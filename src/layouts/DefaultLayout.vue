<template>
  <Navbar />
  <div class="dlayout-main-content">
    <router-view></router-view>
  </div>
  <Footer />
</template>

<script setup>
import Navbar from "../common/components/Navbar.vue";
import Footer from "../common/components/Footer.vue";
</script>
