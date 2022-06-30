<template>
  <v-dialog
    :value="show"
    width="250"
    persistent
  >
    <v-card
      width="250"
      height="250"
      style="display: flex; justify-content: center; flex-direction: column;"
    >
      <v-card-title>
        {{ text }}...
      </v-card-title>

      <v-progress-circular
        :size="65"
        :width="10"
        color="secondary"
        style="margin: auto;"
        indeterminate
      />
    </v-card>
  </v-dialog>
</template>

<script>

export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: "Carregando"
    }
  }
}
</script>