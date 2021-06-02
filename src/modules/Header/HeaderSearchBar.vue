<template>
  <div class="search-bar">
    <div v-for="tab in tabs" class="search-tab">
      <HeaderSearchTab :tab="tab" />
    </div>
    <HeaderSearchInputTab />
    <div class="search-button">
      <span class="material-icons icon"> search </span>
      <span> Search </span>
    </div>
  </div>
</template>

<script setup>
import HeaderSearchTab from "./HeaderSearchTab.vue";
import HeaderSearchInputTab from "./HeaderSearchInputTab.vue";
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
</script>

<style></style>
