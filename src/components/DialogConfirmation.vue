<template>
  <v-dialog
    :model-value="show"
    width="250"
    persistent
  >
    <v-card
      width="250"
      height="250"
      style="display: flex; justify-content: center; flex-direction: column;"
    >
      <v-card-title>
        {{ title }}
      </v-card-title>

      <v-card-text>
        {{ description }}
      </v-card-text>

      <v-card-actions>
        <v-btn
          size="small"
          variant="outlined text"
          @click="cancel()"
        >
          Cancelar
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          color="secondary"
          variant="text"
          size="small"
          @click="confirm()"
        >
          Continuar
        </v-btn>
      </v-card-actions>
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
    title: {
      type: String,
      default: "Confirmação"
    },
    description: {
      type: String,
      default: "Esta ação não pode ser desfeita, deseja continuar?"
    }
  },
  methods: {
    confirm () {
      this.$emit("confirm", true)
    },
    cancel () {
      this.$emit("confirm", false)
    }
  }
}
</script>