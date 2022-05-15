<template>
  <div> <!--style="margin-top: 10px;"-->
    <div style="display: flex; flex-direction: column;">
      <v-card elevation="0" v-if="!existsClothes">
        <v-card-text style="text-align: center;">
          <br/>
          <span> Adicione novas peças ao seu guarda-roupa </span>
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
        'height': swiperHeight, 
        'margin-top': '10px' 
      }"
      ref="mySwiper" 
      :options="swiperOptions"
      @slideChangeTransitionEnd="onSlideChange($event)"
    >
      <swiper-slide 
        :style="{'width': widthCard+'px'}"
        v-for="(clothe, index) in clothes" 
        :key="index"
      >
        <ClotheForm 
          :id="clothe.id"
          :image="clothe.image"
          :widthCard="widthCard"
          @payload="setClothe($event, clothe.id)"
          @remove="removeClothe($event, index)"
        />
      </swiper-slide>
    </swiper>

    <v-toolbar
      v-if="existsClothes"
      dense
      bottom
      flat
      color="accent"
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
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex"
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
  mounted () {
    this.setPreviousPage("/closet")
  },
  data () {
    return {
      index: 0,
      swiperOptions: {
        centeredSlides: true,
        slidesPerView: "auto",
        spaceBetween: 10
      }
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
  },
  computed: {
    ...mapGetters([
      "clothes"
    ]),
    existsClothes () {
      const existsClothes = this.clothes.length > 0
      this.setShowAddClotheButton(existsClothes)
      return existsClothes
    },
    pageCount () {
      return this.index + 1
    },
    swiper() {
      return this.$refs.mySwiper.$swiper
    },
    swiperHeight () {
      const header = 56
      const footer = 48
      const marginTop = 10
      let innerHeight = window.innerHeight
      innerHeight = innerHeight - header - footer - marginTop
      return `${innerHeight}px`
    },
    widthCard () {
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
    }
  },
  methods: {
    ...mapMutations([
      "setPreviousPage",
      "setDisableSaveClothesButton",
      "setLoadingDialog",
      "setShowAddClotheButton",
      "addClotheOnIndex",
      "removeClotheOnIndex"
    ]),
    setClothe (clothe, id) {
      const index = this.clothes.findIndex(item => item.id === id)

      if (index !== -1) {
        this.addClotheOnIndex({ index: index, value: { id, ...clothe } })
      }
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
  }
}
</script>