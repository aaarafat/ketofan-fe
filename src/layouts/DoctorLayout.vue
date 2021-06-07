<template>
  <div style="overflow-y: scroll; height: 100vh; position fixed">
    <DoctorNavbar />
    <div class="doclayout-main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import DoctorNavbar from "../modules/DoctorPanel/DoctorNavbar.vue";
</script>
