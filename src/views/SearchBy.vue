<template>
  <div class="search-by">
    <h2>Find doctors by {{ route.name }}</h2>
    <div class="container">
      <div class="element" v-for="d in data" :key="d.name">
        {{ d }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";

const route = useRoute();
const store = useStore();
console.log();
const data = ref([]);
onMounted(() => {
  if (route.name === "specialties") {
    store.dispatch("fetchSpecialties").then(() => {
      data.value = store.getters.allSpecialties;
    });
  } else if (route.name === "cities") {
    store.dispatch("fetchCities").then(() => {
      data.value = store.getters.allCities;
    });
  } else if (route.name === "insurances") {
    store.dispatch("fetchInsurances").then(() => {
      data.value = store.getters.allInsurances;
    });
  }
});
</script>

<style></style>
