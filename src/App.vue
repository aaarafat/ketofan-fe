<template>
  <Navbar />
  <router-view></router-view>
</template>

<script setup>
import Navbar from "./common/components/Navbar.vue";
</script>

<style lang="scss">
@import "sass/main.scss";
</style>
