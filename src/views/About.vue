<template>
  <div class="about">
    <div class="side">
      <AboutSideBar active-route />
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import AboutSideBar from "../modules/About/AboutSideBar.vue";
</script>
