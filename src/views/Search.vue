<template>
  <h1>Search for {{ route.params }}</h1>
  <h1>{{ route.query }}</h1>
</template>

<script setup>
import { onBeforeRouteUpdate, useRoute, useRouter } from "vue-router";
const route = useRoute();
onBeforeRouteUpdate((to, from) => {
  console.log(to.params);
  //TODO call API
});
</script>

<style></style>
