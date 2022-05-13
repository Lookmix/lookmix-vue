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
      <v-card-title
        style="margin: auto;margin: auto;"
      >
        Carregando...
      </v-card-title>
      <v-progress-circular
        :size="100"
        :width="10"
        color="secondary"
        indeterminate
        style="margin: auto; margin-bottom: 50px;"
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
    }
  }
}
</script>