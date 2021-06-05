<template>
  <div class="search-bar">
    <div v-for="(tab, i) in tabs" :key="tab.title" class="tab-wrapper">
      <HeaderSearchTab
        :tab="tab"
        :data="data[i]"
        :index="i"
        @select-element="handleSelect"
      />
    </div>
    <HeaderSearchInputTab :doctor="doctor" @input="handleInput" />
    <div class="search-button" @click="handleSearch">
      <span class="material-icons icon"> search </span>
      <span class="text"> Search </span>
    </div>
  </div>
</template>

<script setup>
import HeaderSearchTab from "./HeaderSearchTab.vue";
import HeaderSearchInputTab from "./HeaderSearchInputTab.vue";
import { ref, onMounted, inject } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const doctor = ref("");
const queries = ref(["all", "egypt", "", ""]);
const router = useRouter();
const tabs = ref([
  {
    title: "Select a speciality",
    icon: "healing",
    placeholder: "Choose speciality",
  },
  {
    title: "In this city",
    icon: "place",
    placeholder: "Choose city",
  },
  {
    title: "My insurance is",
    icon: "health_and_safety",
    placeholder: "Choose insurance",
  },
]);
const handleSearch = (e) => {
  let string = `/doctors/${queries.value[0]}/${queries.value[1]}`;
  string += queries.value[2] !== "" ? `/${queries.value[2]}` : "";
  string += doctor.value !== "" ? `?doctor=${doctor.value}/` : "";
  router.push(string);
};
const handleInput = (e) => {
  doctor.value = e.target.value;
};
const handleSelect = (e, i) => {
  tabs.value[i].placeholder = e;
  queries.value[i] = e;
};
const store = useStore();
const data = ref([{}, {}, {}, {}]);
onMounted(() => {
  store.dispatch("fetchSpecialties").then(() => {
    data.value[0] = store.getters.allSpecialties;
  });
  store.dispatch("fetchCities").then(() => {
    data.value[1] = store.getters.allCities;
  });
  store.dispatch("fetchInsurances").then(() => {
    data.value[2] = store.getters.allInsurances;
  });
});
</script>

<style></style>
