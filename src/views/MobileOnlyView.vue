<template>
  <div class="mobile-only">
    <h1>Aplicação disponível apenas em dispositivos móveis</h1>
    <p>Por favor, use um smartphone ou tablet.</p>
  </div>
</template>

<script lang="ts" setup>
// https://vuejs.org/guide/typescript/composition-api
// import { ref, computed, watch } from "vue";

// Reactive state
// const count = ref(0);
// const message = ref("Hello Vue 3!");

// Computed property
// const doubledCount = computed(() => {
//   return count.value * 2
// });

// Watcher
// watch(count, (newCount, oldCount) => {
//   console.log(`Count changed from ${oldCount} to ${newCount}`);
// });

// Function to modify state
// const increment = () => {
//   count.value++;
// };

// Expose to template (automatically exposed with <script setup>)
// No need for explicit `return { count, message, doubledCount, increment }`
</script>

<style scoped>
.mobile-only {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100dvh;
  text-align: center;
}
</style>
