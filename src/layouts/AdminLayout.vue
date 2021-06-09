<template>
  <div style="overflow-y: scroll; height: 100vh; position fixed">
    <AdminNavbar />
    <div class="adminlayout-main-content">
      <router-view> </router-view>
    </div>
  </div>
</template>

<script setup>
import AdminNavbar from "../modules/AdminPanel/AdminNavbar.vue";
</script>

<style></style>
