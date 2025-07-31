<template>
  <div class="mt-4 py-1">
    <span class="text-body-1 font-weight-medium">
      {{ title }}
    </span>

    <v-row no-gutters class="mb-2">
      <v-col
        v-for="clothe in clothesWithSelected"
        :key="clothe._id"
        class="d-flex child-flex"
        cols="4"
      >
        <v-img
          cover
          style="border: 1px solid transparent;"
          v-ripple
          :src="clothe.image"
          :lazy-src="clothe.image"
          aspect-ratio="1"
          :class="{
            'grey': true, 
            'lighten-2': true, 
            'image-selected': clothe.selected && showCheckbox
          }"
          @click="showCheckbox ? selectClothe(clothe) : openDetails(clothe)"
        >
          <v-checkbox
            :value="clothe.selected"
            class="mt-0 pt-0"
            color="backgroundBase"
            :style="{
              'display': showCheckbox ? 'block' : 'none',
              'width': '24px'
            }"
            false-icon="mdi-checkbox-blank"
            hide-details
            density="compact"
            readonly
            :ripple="false"
          >
          </v-checkbox>

          <template v-slot:placeholder>
            <v-row
              class="fill-height ma-0"
              align="center"
              justify="center"
            >
              <v-progress-circular
                indeterminate
                color="bg-grey-lighten-5"
              >
              </v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>

    <clothe-details 
      :showDetails="showClotheDetails" 
      :clothe="clotheDetails"
      @closeDialog="showClotheDetails = false; clotheDetails = undefined;"
    />
  </div>  
</template>

<script>
import * as utils from "./../../utils"
import { mapMutations } from "vuex"
import ClotheDetails from "./../closet/ClotheDetails.vue"

export default {
  components: {
    ClotheDetails
  },
  props: {
    title: String,
    clothes: {
      type: Array,
      default: function () {
        return []
      }
    },
    showCheckbox: Boolean
  },
  data () {
    return {
      clothesWithSelected: [],
      showClotheDetails: false,
      clotheDetails: undefined
    }
  },
  watch: {
    clothes: {
      immediate: true,
      handler: function (value, oldValue) {
        const result = value.map(clothe => {
          clothe["selected"] = false
          return { ...clothe }
        })
        this.clothesWithSelected = result
      }
    },
    showCheckbox: {
      immediate: true,
      handler: function (value, oldValue) {
        this.resetSelected()
      }
    }
  },
  methods: {
    ...mapMutations([
      "setSelectedClothes",
      "removeSelectedClothe"
    ]),
    openDetails(clothe) {
      this.clotheDetails = clothe
      this.showClotheDetails = true
    },
    checkboxSelected () {
      this.$emit("checkboxSelected", this.clothe)
    },
    selectClothe (clothe) {
      const imageId = utils.getImageId(clothe.image)

      const payload = {
        clotheId: clothe._id,
        imageId: imageId,
      }
      clothe.selected = !clothe.selected;

      if (clothe.selected) {
        this.setSelectedClothes(payload)
        return;
      }
      this.removeSelectedClothe(payload)
    },
    resetSelected () {
      for (let clothe of this.clothesWithSelected) {
        clothe.selected = false
      }
    }
  }
}
</script>

<style scoped>
/* TODO: Some components have structural changes in their markup */
:deep(.image-selected div.v-responsive__content) {
  background-color: #1110108c;
}
/* TODO: Some components have structural changes in their markup */
:deep(i.mdi-checkbox-blank::before) {
  color: white;
}
</style>