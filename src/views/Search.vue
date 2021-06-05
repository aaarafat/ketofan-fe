<template>
  <h1>Search for {{ route.params }}</h1>
  <h1>{{ route.query }}</h1>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
console.log(route.params);
console.log(route.query);
</script>

<style></style>
