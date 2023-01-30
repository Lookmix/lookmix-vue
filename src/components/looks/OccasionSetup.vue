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
            'font-weight-medium': true,
            'text-capitalize': true
          }"
        >
          {{ occasion }}
        </div>
      </template>
    </v-checkbox>

    <template v-if="checkbox">
      <div style="display: flex;" class="mt-3 pl-8 mb-2">
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

      <div style="display: flex;" class="pl-8">
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
import { mapGetters } from "vuex"
import * as models from "./../../models.js"

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
      type: Number,
      default: undefined
    },
    initialSelectedNight: {
      type: Number,
      default: undefined
    }
  },
  data () {
    return {
      checkbox: this.initialCheckbox,
      casual: "casual",
      closets: [],
      selectedDay: this.initialSelectedDay,
      selectedNight: this.initialSelectedNight
    }
  },
  mounted () {
    this.closets = [ this.casual, "social" ]
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
    ...mapGetters([
      "occasions"
    ]),
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
    },
    nightId () {
      const nightId = this.occasions.filter(x => 
        x.name.toLocaleLowerCase() === models.NIGHT
      )[0]._id
      return nightId
    },
    dayId () {
      const dayId = this.occasions.filter(x => 
        x.name.toLocaleLowerCase() === models.DAY
      )[0]._id
      return dayId
    }
  },
  methods: {
    generatePayload () {
      const payload = {
        card_look_title: this.occasion,
        casual: [],
        social: []
      }
      if (this.selectedDay !== undefined) {
        const closetDay = this.closets[this.selectedDay]
        payload[closetDay].push(this.dayId)
      }
      if (this.selectedNight !== undefined) {
        const closetNight = this.closets[this.selectedNight]
        payload[closetNight].push(this.nightId)
      }
      this.$emit("updateOccasion", payload)
    },
    deletePayload () {
      this.$emit("removeOccasion", this.occasion)
    }
  }
}
</script>