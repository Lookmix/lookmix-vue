<template>
  <v-dialog
    :value="show" 
    width="300"
    persistent
  >
    <v-card
      width="300"
      height="300"
    >
      <template v-if="successFeedback === undefined">
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
              :value="progress"
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

      <template v-if="successFeedback">
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
            text
            @click="successActionClick()" 
          >
            {{ successActionText }}
          </v-btn>
        </v-card-actions>
      </template>

      <template v-if="successFeedback === false">
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
            text
            @click="errorActionClick(); progress=0;" 
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
    loadingDialog: {
      type: Boolean,
      default: false
    },
    successFeedback: {
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
      this.$emit("error")
    }
  },
  watch: {
    loadingDialog: {
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
      return this.loadingDialog && this.dialog
    }
  },
  beforeDestroy () {
    this.resetInterval()
  }
}
</script>