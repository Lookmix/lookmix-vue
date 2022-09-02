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
            class="font-weight-medium"
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
            class="font-weight-medium"
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
    }
  },
  data () {
    return {
      checkbox: undefined,
      casual: "Casual",
      closets: [],
      selectedDay: undefined,
      selectedNight: undefined
    }
  },
  mounted () {
    this.closets = [ this.casual, "Social" ]
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
  }
}
</script>