<template>
  <div
    :style="{
      'display': 'flex', 
      'flex-direction': 'column',
      'height': !checkbox ? '50px' : '173px'
    }"
  >
    <v-checkbox
      v-model="checkbox"
      hide-details
      style="margin-left: -3px;"
    >
      <template slot="label">
        <div 
          :class="{
            'text-body-1': true,
            'font-weight-medium': true
          }"
        >
          Look <span class="text-lowercase"> {{ occasion }} </span>
        </div>
      </template>
    </v-checkbox>

    <template v-if="checkbox">
      <div style="display: flex;" class="mt-3 mb-2">
        <span
          class="mr-5 text-body-2"
          style="margin-top: auto; margin-bottom: auto;"
        >
          Dia
        </span>

        <v-chip-group
          v-model="selectedDay"
          :mandatory="enableMandatoryDay"
          active-class="pink accent-2 white--text"
        >
          <v-chip
            class="font-weight-medium text-uppercase"
            v-for="(item, index) in filteredClosets" 
            :key="index"
          >
            {{ item }}
          </v-chip>
        </v-chip-group>
      </div>

      <div style="display: flex;">
        <span
          class="mr-5 text-body-2"
          style="margin-top: auto; margin-bottom: auto;"
        >                  
          Noite
        </span>

        <v-chip-group
          v-model="selectedNight"
          :mandatory="enableMandatoryNight"
          active-class="pink accent-2 white--text"
        >
          <v-chip
            class="font-weight-medium text-uppercase"
            v-for="(item, index) in filteredClosets" 
            :key="index"
          >
            {{ item }}
          </v-chip>
        </v-chip-group>
      </div>
      <v-divider class="mt-3"/> 
    </template>
  </div>
</template>

<script>
export default {
  props: {
    occasion: {
      type: String
    },
    social: {
      type: Boolean,
      default: true
    },
    initialCheckbox: {
      type: Boolean,
      default: undefined
    },
    initialSelectedDay: {
      type: String,
      default: undefined
    },
    initialSelectedNight: {
      type: String,
      default: undefined
    }
  },
  data () {
    return {
      checkbox: this.initialCheckbox,
      casual: "casual",
      closets: [],
      selectedDay: undefined,
      selectedNight: undefined
    }
  },
  mounted () {
    this.closets = [ this.casual, "social" ]
    if (this.initialSelectedDay !== undefined) {
      this.selectedDay = this.closets.indexOf(this.initialSelectedDay)
    }
    if (this.initialSelectedNight !== undefined) {
      this.selectedNight = this.closets.indexOf(this.initialSelectedNight)
    }
  },
  watch: {
    checkbox: {
      handler (newValue, oldValue) {
        if (newValue) {
          this.selectedDay = 0
          this.selectedNight = undefined
          this.generatePayload()
          return;
        }
        this.deletePayload()
      }
    },
    selectedDay: {
      handler (newValue, oldValue) {
        this.generatePayload()
      }
    },
    selectedNight: {
      handler (newValue, oldValue) {
        this.generatePayload()
      }
    }
  },
  computed: {
    enableMandatoryDay () {
      return this.selectedNight === undefined
    },
    enableMandatoryNight () {
      return this.selectedDay === undefined && !this.enableMandatoryDay
    },
    filteredClosets () {
      if (this.social) {
        return this.closets
      }
      return [ this.casual ]
    }
  },
  methods: {
    generatePayload () {
      const payload = {
        occasion: this.occasion,
        casual: [],
        social: []
      }
      if (this.selectedDay !== undefined) {
        const closetDay = this.closets[this.selectedDay]
        payload[closetDay].push("dia")
      }
      if (this.selectedNight !== undefined) {
        const closetNight = this.closets[this.selectedNight]
        payload[closetNight].push("noite")
      }
      console.log(payload)
    },
    deletePayload () {
      console.log("delete...")
    }
  }
}
</script>