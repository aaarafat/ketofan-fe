<template>
  <div class="search-bar">
    <div v-for="tab in tabs" class="" :key="tab.title">
      <HeaderSearchTab :tab="tab" />
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
import { ref } from "vue";
const doctor = ref("");
const tabs = [
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
    title: "In this area",
    icon: "place",
    placeholder: "Choose area",
  },
  {
    title: "My insurance is",
    icon: "health_and_safety",
    placeholder: "Choose insurance",
  },
];
const handleSearch = (e) => {
  console.log(doctor.value);
};
const handleInput = (e) => {
  doctor.value = e.target.value;
};
</script>

<style></style>
