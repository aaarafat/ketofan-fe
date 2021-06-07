<template>
  <router-view></router-view>
</template>

<script setup>
import { watch } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
const store = useStore();
store.dispatch("fetchUser");
const route = useRoute();
watch(route, () => {
  window.scrollTo(0, 0);
});
</script>

<style lang="scss">
@import "sass/main.scss";
</style>
