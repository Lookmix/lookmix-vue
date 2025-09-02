<template>
  <v-dialog
    :model-value="show" 
    width="300"
    persistent
  >
    <v-card
      width="300"
      height="300"
    >
      <template v-if="showSuccessFeedback === undefined">
        <v-card-title>
          {{ loadingTitle }}
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
              :model-value="progress"
              :rotate="360"
            > 
              <span class="font-weight-bold" v-if="progress < 100">
                {{ progressFormatted }} %
              </span>
              <span v-else>
                Acabando... 
              </span>
            </v-progress-circular>
          </div>
        </v-card-text>
      </template>

      <template v-if="showSuccessFeedback">
        <v-card-title>
          Sucesso
        </v-card-title>

        <v-card-text class="mt-n3">
          <v-img 
            height="134"
            width="194"
            style="margin: auto;"
            class="mb-4"
            src="../assets/hanger-success.svg"
          >
          </v-img>
          <span>
            {{ successDescription }}
          </span>
        </v-card-text>

        <v-card-actions
          class="mt-n3"
          style="display: flex; justify-content: center;"
        >
          <v-btn 
            :elevation="0"
            color="primary"
            variant="text"
            @click="successActionClick()" 
          >
            {{ successActionText }}
          </v-btn>
        </v-card-actions>
      </template>

      <template v-if="showSuccessFeedback === false">
        <v-card-title>
          Oops...
        </v-card-title>

        <v-card-text class="mt-n3">
          <v-img 
            src="../assets/hanger-error.svg"
            height="134"
            width="194"
            style="margin: auto;"
            class="mb-4"
          >
          </v-img>
          <span>
            {{ errorDescription }}
          </span>
        </v-card-text>

        <v-card-actions
          class="mt-n3"
          style="display: flex; justify-content: center;"
        >
          <v-btn 
            :elevation="0"
            color="primary"
            variant="text"
            @click="errorActionClick();" 
          >
            {{ errorActionText }}
          </v-btn>
        </v-card-actions>
      </template>
    </v-card>
  </v-dialog>
</template>

<script>

export default {
  props: {
    showLoadingDialog: {
      type: Boolean,
      default: false
    },
    showSuccessFeedback: {
      default: undefined
    },
    loadingTitle: {
      type: String
    },
    successDescription: {
      type: String
    },
    successActionText: {
      type: String,
      default: "OK"
    },
    errorDescription: {
      type: String
    },
    errorActionText: {
      type: String,
      default: "OK"
    },
    intervalInMiliseconds: {
      type: Number,
      default: 1000
    },
    totalCircularProgressParts: {
      type: Number,
      default: 2
    },
  },
  data () {
    return {
      interval: {},
      progress: 0,
      dialog: false
    }
  },
  methods: {
    resetInterval () {
      clearInterval(this.interval)
    },
    successActionClick () {
      this.dialog = false
      this.$emit("success")
    },
    errorActionClick () {
      this.dialog = false
      this.progress = 0
      this.resetInterval()
      this.$emit("error")
    }
  },
  watch: {
    showLoadingDialog: {
      handler: function (val, oldVal) {
        if (val) {
          this.dialog = true
          this.interval = setInterval(() => {
            if (this.progress >= 100) {
              this.resetInterval()
              return;
            }
            let divisionResult = 100 / this.totalCircularProgressParts
            this.progress += divisionResult
          }, this.intervalInMiliseconds)
        }
      }
    }
  },
  computed: {
    progressFormatted () {
      return this.progress.toFixed()
    },
    show () {
      return this.showLoadingDialog && this.dialog
    }
  },
  unmounted () {
    this.resetInterval()
  }
}
</script>