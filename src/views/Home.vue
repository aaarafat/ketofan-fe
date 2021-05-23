<template>
  <h1>Home</h1>
  <h2>{{ getSpecialties }}</h2>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const getSpecialties = computed(() => {
  return store.getters.getSpecialties;
});
</script>
