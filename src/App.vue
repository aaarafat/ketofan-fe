<template>
  <Navbar />
  <Header />
  <router-view></router-view>
  <Footer />
</template>

<script setup>
import Navbar from "./common/components/Navbar.vue";
import Header from "./common/components/Header.vue";
import Footer from "./common/components/Footer.vue";
</script>

<style lang="scss">
@import "sass/main.scss";
</style>
