<template>
  <Navbar />
  <Header />
  <div class="hlayout-main-content">
    <router-view></router-view>
  </div>
  <Footer />
</template>

<script setup>
import Navbar from "../common/components/Navbar.vue";
import Header from "../common/components/Header.vue";
import Footer from "../common/components/Footer.vue";
</script>
