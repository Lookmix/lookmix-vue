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
          active-class="pink accent-2 white--text"
        >
          <v-chip
            class="font-weight-medium"
            v-for="(item, index) in closets" 
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
          active-class="pink accent-2 white--text"
        >
          <v-chip
            class="font-weight-medium"
            v-for="(item, index) in closets" 
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
    }
  },
  data () {
    return {
      checkbox: undefined,
      closets: ["Casual", "Social"],
      selectedDay: undefined,
      selectedNight: undefined
    }
  }
}
</script>