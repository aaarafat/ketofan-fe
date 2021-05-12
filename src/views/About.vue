<template>
  <h1>About</h1>
  <div class="about">
    <AboutSideBar />
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import AboutSideBar from "../modules/About/AboutSideBar.vue";
</script>
