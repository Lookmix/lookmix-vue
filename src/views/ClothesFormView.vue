<template>
  <div>
    <div 
      :style="{
        'display': !existsClothes ? 'flex' : 'none', 
        'flex-direction': 'column',
      }"
    >
      <v-card elevation="0">  
        <v-card-text style="text-align: center;">
          <br/>

          <span> 
            Adicione novas peças ao seu guarda-roupa
          </span>

          <br/>

          <div
            style="padding: 10px 5px; display: flex; justify-content: center;"
          >
            <button-add-clothe :icon-button="false"/>
          </div>
        </v-card-text>
      </v-card>
    </div>

    <swiper
      v-if="existsClothes"
      :style="{ 
        'height': swiperHeight+'px', 
        'margin-top': '10px' 
      }"
      ref="mySwiper" 
      :options="swiperOptions"
      @slideChangeTransitionEnd="onSlideChange($event)"
    >
      <swiper-slide 
        :style="{'width': cardWidth+'px'}"
        v-for="(clothe, index) in clothes" 
        :key="clothe._id"
      >
        <ClotheForm 
          :id="clothe._id"
          :key="clothe._id"
          :image="clothe.image"
          :editClothe="edit ? clothe : undefined"
          :cardWidth="cardWidth"
          :cardHeight="swiperHeight"
          @payloadSave="setClothe($event, clothe._id)"
          @payloadUpdate="setUpdatedClothe($event, clothe._id)"
          @remove="removeClothe($event, index)"
        />
      </swiper-slide>
    </swiper>

    <v-toolbar
      v-if="existsClothes"
      dense
      bottom
      flat
      color="primary"
      elevation="0"
    >
      <v-btn 
        small
        style="margin: 0px 10px;"
        icon 
        @click="prev()" 
        :disabled="pageCount === 1"
      >
        <v-icon color="white">
          mdi-chevron-left
        </v-icon>
      </v-btn>

      <v-spacer/>

      <span style="font-size: 18px; color: white; font-weight: bold;"> 
        {{ pageCount }} de {{ totalClothes }}
      </span>

      <v-spacer/>

      <v-btn 
        small
        style="margin: 0px 10px;"
        icon 
        @click="next()" 
        :disabled="pageCount === clothes.length"
      >
        <v-icon color="white">
          mdi-chevron-right
        </v-icon>
      </v-btn>
    </v-toolbar>

    <v-dialog
      :value="loadingDialog" 
      width="300"
      persistent
    >
      <v-card
        width="300"
        height="300"
      >
        <template v-if="clotheUploadSuccess === undefined">
          <v-card-title>
            Salvando peças...
          </v-card-title>

          <v-card-text class="mt-10">
            <div 
              style="display: flex; justify-content: center; flex-direction: column;"
            >
              <v-progress-circular
                :size="140"
                :width="20"
                color="secondary"
                style="margin: auto;"
                :value="uploadProgress"
                :rotate="360"
              > 
                <span class="font-weight-bold" v-if="uploadProgress < 100">
                  {{ uploadProgressFormatted }} %
                </span>
                <span v-else>
                  Acabando... 
                </span>
              </v-progress-circular>
            </div>
          </v-card-text>
        </template>

        <template v-if="clotheUploadSuccess">
          <v-card-title>
            Sucesso
          </v-card-title>

          <v-card-text class="mt-n3">
            <v-img 
              contain
              height="134"
              width="194"
              style="margin: auto;"
              class="mb-4"
              src="../assets/hanger-success.svg"
            >
            </v-img>
            <span>
              Suas peças foram salvas, veja como ficou seu closet
            </span>
          </v-card-text>

          <v-card-actions
            class="mt-n3"
            style="display: flex; justify-content: center;"
          >
            <v-btn 
              :elevation="0"
              color="primary"
              text
              @click="redirectToCloset();" 
            >
              VER CLOSET
            </v-btn>
          </v-card-actions>
        </template>

        <template v-if="clotheUploadSuccess === false">
          <v-card-title>
            Oops...
          </v-card-title>

          <v-card-text class="mt-n3">
            <v-img 
              contain
              src="../assets/hanger-error.svg"
              height="134"
              width="194"
              style="margin: auto;"
              class="mb-4"
            >
            </v-img>
            <span>
              Um erro impediu que algumas de suas peças fossem salvas
            </span>
          </v-card-text>

          <v-card-actions
            class="mt-n3"
            style="display: flex; justify-content: center;"
          >
            <v-btn 
              :elevation="0"
              color="primary"
              text
              @click="setLoadingDialog(false); setClotheUploadSuccess(undefined); uploadProgress=0;" 
            >
              FECHAR
            </v-btn>
          </v-card-actions>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from "vuex"
import ClotheForm from "./../components/closet/ClotheForm.vue"
import ButtonAddClothe from "./../components/closet/ButtonAddClothe.vue"
import { Swiper, SwiperSlide } from "vue-awesome-swiper"
import "swiper/swiper-bundle.css"

export default {
  components: {
    ClotheForm,
    Swiper,
    SwiperSlide,
    ButtonAddClothe
  },
  props: [
    "edit"
  ],
  beforeDestroy () {
    this.clearUploadInterval()

    this.resetClothes()

    this.resetUpdatedClothes()

    if (this.edit) {
      this.setToolbarTitle("Lookmix")
    }
  },
  mounted () {
    this.setPreviousPage("/closet")

    if (this.edit) {
      this.setToolbarTitle("Atualizar peças")
      this.updateSaveButtonState(false)
    }
    if (this.categories.length < 1) {
      this.getCategories()
    }
    if (this.occasions.length < 1) {
      this.getOccasions()
    }
    if (this.seasons.length < 1) {
      this.getSeasons()
    }
  },
  data () {
    return {
      index: 0,
      swiperOptions: {
        centeredSlides: true,
        slidesPerView: "auto",
        spaceBetween: 10
      },
      uploadProgress: 0,
      uploadInterval: {}
    }
  },
  watch: {
    totalClothes: {
      handler: function (val, oldVal) {
        if (val > oldVal) {
          this.slideToBegin()
        }
      },
      deep: true
    },
    loadingDialog: {
      handler: function (val, oldVal) {
        if (val) {
          this.uploadInterval = setInterval(() => {
            if (this.uploadProgress === 100) {
              this.clearUploadInterval()
              return;
            }
            let divisionResult = 100 / this.totalClothes
            this.uploadProgress += divisionResult
          }, 3000)
        }
      }
    }
  },
  computed: {
    ...mapGetters([
      "clothes",
      "loadingDialog",
      "clotheUploadSuccess",
      "categories",
      "occasions",
      "seasons",
      "updatedClothes"
    ]),
    existsClothes () {
      const existsClothes = this.clothes.length > 0
      this.setShowAddClotheButton(existsClothes)
      return existsClothes
    },
    pageCount () {
      return this.index + 1
    },
    swiperHeight () {
      const header = 56
      const footer = 48
      const marginTop = 10
      let innerHeight = window.innerHeight
      innerHeight = innerHeight - header - footer - marginTop
      return innerHeight
    },
    cardWidth () {
      switch (this.$vuetify.breakpoint.name) {
        case "xs": return 319
        case "sm": return 319
        case "md": return 500
        case "lg": return 500
        case "xl": return 500
      }
      return 319
    },
    totalClothes () {
      return this.clothes.length
    },
    uploadProgressFormatted () {
      return this.uploadProgress.toFixed()
    }
  },
  methods: {
    ...mapActions([
      "getCategories",
      "getOccasions",
      "getSeasons"
    ]),
    ...mapMutations([
      "setPreviousPage",
      "setDisableSaveClothesButton",
      "setLoadingDialog",
      "setShowAddClotheButton",
      "addClotheOnIndex",
      "removeClotheOnIndex",
      "setClotheUploadSuccess",
      "resetClothes",
      "resetUpdatedClothes",
      "setToolbarTitle",
      "addUpdatedClotheOnIndex",
      "addUpdatedClothe"
    ]),
    setClothe (clothe, _id) {
      const index = this.clothes.findIndex(item => item._id === _id)

      if (index !== -1) {
        this.addClotheOnIndex({ index: index, value: { _id, ...clothe } })
      }
    },
    setUpdatedClothe (clothe, _id) {
      const index = this.updatedClothes.findIndex(item => item._id === _id)

      if (index !== -1) {
        this.addUpdatedClotheOnIndex({ index: index, value: { _id, ...clothe } })
        return;
      }
      this.addUpdatedClothe({ _id, ...clothe })
    },
    removeClothe (event, index) {
      this.removeClotheOnIndex(index)
      this.updateSaveButtonState()

      if (this.index > 0) {
        this.prev()
      }
    },
    updateSaveButtonState () {
      let disable = false

      if (this.clothes.length < 1) {
        disable = true
      }
      this.setDisableSaveClothesButton(disable)
    },
    slideToBegin () {
      const swiperRef = this.$refs.mySwiper
      if (swiperRef) {
        this.index = 0
        swiperRef.$swiper.slideTo(this.index, 400, false)
      }
    },
    next () {
      const swiperRef = this.$refs.mySwiper
      if (swiperRef) {
        this.index++
        swiperRef.$swiper.slideTo(this.index, 400, false)
      }
    },
    prev () {
      const swiperRef = this.$refs.mySwiper
      if (swiperRef) {
        this.index--
        swiperRef.$swiper.slideTo(this.index, 400, false)
      }
    },
    onSlideChange (event) {
      this.index = event.activeIndex
    },
    clearUploadInterval () {
      clearInterval(this.uploadInterval)
    },
    redirectToCloset () {
      this.setLoadingDialog(false)
      this.setClotheUploadSuccess(undefined)
      this.$router.push("/closet")
      this.resetClothes()
    }
  }
}
</script>