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
            :style="{
              'display': showCheckbox ? 'block' : 'none',
              'width': '24px'
            }"
            off-icon="mdi-checkbox-blank"
            hide-details
            dense
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
                color="grey lighten-5"
              >
              </v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>
  </div>  
</template>

<script>
export default {
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
      clothesWithSelected: []
    }
  },
  watch: {
    clothes: {
      immediate: true,
      handler: function (value, oldValue) {
        console.log("watch")
        const result = value.map(clothe => {
          clothe["selected"] = false
          return { ...clothe }
        })
        this.clothesWithSelected = result
      }
    }
  },
  methods: {
    openDetails(clothe) {
      this.$emit("openDetails", clothe)
    },
    checkboxSelected () {
      this.$emit("checkboxSelected", this.clothe)
    },
    selectClothe (clothe) {
      const object = {
        _id: clothe._id,
        category_id: clothe.category_id,
        closet_id: clothe.closet_id,
        image: clothe.image,
        occasions: clothe.occasions,
        seasons: clothe.seasons,
        type: clothe.type
      }
      clothe.selected = !clothe.selected;

      if (clothe.selected) {
        this.$emit("selectClothe", object)
        return;
      }
      this.$emit("unselectClothe", object)
    }
  }
}
</script>

<style scoped>
::v-deep .image-selected div.v-responsive__content {
  background-color: #1110108c;
}
::v-deep i.mdi-checkbox-blank::before {
  color: white;
}
</style>