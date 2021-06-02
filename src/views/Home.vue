<template>
  <h1>Home</h1>
  <h2>{{ specialties }}</h2>
  <router-link to="about">about</router-link>
  <button @click="fetcho">fetch</button>
</template>

<script setup>
import { computed, inject, onMounted, ref } from "vue";
import { useStore, mapState } from "vuex";

const api = inject("api");
const store = useStore();
const specialties = ref(null);
const fetcho = async () => {
  console.log("clicked");
};
const getSpecialties = computed(() => {
  return store.getters.allSpecialties;
});
onMounted(() => {
  store.dispatch("fetchSpecialties").then(() => {
    specialties.value = store.getters.allSpecialties;
  });
});
</script>
