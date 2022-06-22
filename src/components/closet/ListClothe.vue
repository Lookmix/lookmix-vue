<template>
  <div class="mt-4">
    <span class="text-body-1 font-weight-medium">
      {{ title }}
    </span>

    <v-row no-gutters class="mb-10">
      <v-col
        v-for="clothe in clothes"
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
          @click="showCheckbox ? clothe.selected = !clothe.selected : openDetails(clothe)"
        >
          <v-checkbox
            v-if="showCheckbox"
            :value="clothe.selected"
            class="mt-0 pt-0"
            style="width: 24px;"
            off-icon="mdi-checkbox-blank"
            hide-details
            dense
            @change="clothe.selected = !clothe.selected; checkboxSelected()"
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
    clothes: Array,
    showCheckbox: Boolean
  },
  methods: {
    openDetails(clothe) {
      this.$emit("openDetails", clothe)
    },
    checkboxSelected () {
      this.$emit("checkboxSelected", this.clothe)
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