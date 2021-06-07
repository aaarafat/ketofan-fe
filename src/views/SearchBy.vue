<template>
  <div class="search-by">
    <h2>Find doctors by {{ route.name }}</h2>
    <div class="container">
      <div class="element" v-for="d in data" :key="d.name" @click="handleClick">
        {{ d }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute, onBeforeRouteUpdate } from "vue-router";

const route = useRoute();
const store = useStore();
const router = useRouter();
const data = ref([]);
const params = ref({ area: "egypt", speciality: "all", insurance: "" });
onMounted(() => {
  if (route.name === "speciality") {
    store.dispatch("fetchSpecialties").then(() => {
      data.value = store.getters.allSpecialties;
    });
  } else if (route.name === "area") {
    store.dispatch("fetchCities").then(() => {
      data.value = store.getters.allCities;
    });
  } else if (route.name === "insurance") {
    store.dispatch("fetchInsurances").then(() => {
      data.value = store.getters.allInsurances;
    });
  }
});

watch(route, () => {
  params.value = { area: "egypt", speciality: "all", insurance: "" };
  if (route.name === "speciality") {
    store.dispatch("fetchSpecialties").then(() => {
      data.value = store.getters.allSpecialties;
    });
  } else if (route.name === "area") {
    store.dispatch("fetchCities").then(() => {
      data.value = store.getters.allCities;
    });
  } else if (route.name === "insurance") {
    store.dispatch("fetchInsurances").then(() => {
      data.value = store.getters.allInsurances;
    });
  }
  window.scrollTo(0, 0);
});

const handleClick = (e) => {
  params.value[route.name] = e.target.innerHTML;
  let string = `/search/${params.value.speciality}/${params.value.area}`;
  string += params.value.insurance !== "" ? `/${params.value.insurance}` : "";

  router.push(string);
};
</script>

<style></style>
