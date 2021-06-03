<template>
  <div class="home">
    <HomeHeader />
  </div>
</template>

<script setup>
import { computed, inject, onMounted, ref } from "vue";
import { useStore } from "vuex";
import HomeHeader from "../modules/Home/HomeHeader.vue";

const api = inject("api");
const store = useStore();
const specialties = ref(null);
onMounted(() => {
  store.dispatch("fetchSpecialties").then(() => {
    specialties.value = store.getters.allSpecialties;
  });
});
</script>
