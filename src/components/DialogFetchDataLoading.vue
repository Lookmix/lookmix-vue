<template>
  <v-dialog
    :model-value="showDialog"
    width="250"
    persistent
  >
    <v-card
      width="250"
      height="250"
      style="display: flex; justify-content: center; flex-direction: column;"
    >
      <v-card-title>
        Carregando...
      </v-card-title>

      <v-progress-circular
        :size="65"
        :width="10"
        color="secondary"
        style="margin: auto;"
        indeterminate
      />

      <v-card-text 
        :style="{
          'display': 'flex',
          'flex-direction': 'row',
          'justify-content': 'center',
          'padding-top': '20px',
          'height': '68px'
        }"
      >
        <v-btn 
          v-if="showCloseButton"
          variant="text"
          border
          size="small"
          @click="closeButtonClick()" 
        >
          FECHAR
        </v-btn>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    showDialog: { 
      type: Boolean, 
      default: false 
    },
    showCloseButton: {
      type: Boolean, 
      default: false 
    }
  },
  data () {
    return {
      // dialog: this.showDialog,
      // closeButton: this.showCloseButton
    }
  },
  methods: {
    closeButtonClick () {
      // this.dialog = false
      this.$emit("showDialog", false)
      // this.closeButton = false
      this.$emit("showCloseButton", false)
    }
  }
}
</script>