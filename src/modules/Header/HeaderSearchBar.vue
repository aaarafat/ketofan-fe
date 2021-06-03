<template>
  <div class="search-bar">
    <div v-for="(tab, i) in tabs" class="" :key="tab.title">
      <HeaderSearchTab
        :tab="tab"
        :data="data[0]"
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

const doctor = ref("");
const queries = ref(["all", "egypt", "", ""]);
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
  console.log(
    `${queries.value[0]}/${queries.value[1]}/${queries.value[2]}/${doctor.value}`
  );
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
});
</script>

<style></style>
