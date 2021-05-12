<template>
  <Navbar />
  <router-view></router-view>
  <Footer />
</template>

<script setup>
import Navbar from "../common/components/Navbar.vue";
import Footer from "../common/components/Footer.vue";
</script>
