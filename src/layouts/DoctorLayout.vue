<template>
  <DoctorNavbar />
  <div class="doclayout-main-content">
    <router-view></router-view>
  </div>
</template>

<script setup>
import DoctorNavbar from "../modules/DoctorPanel/DoctorNavbar.vue";
</script>
