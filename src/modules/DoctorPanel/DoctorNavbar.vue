<template>
  <div class="doc-nav">
    <div class="navigation">
      <div class="logo">
        <span>K</span>
      </div>
      <router-link :to="{ name: 'DoctorAppointments' }">
        <div class="option">Appointments</div>
      </router-link>
      <router-link :to="{ name: 'DoctorWorkingHours' }">
        <div class="option">Working Hours</div>
      </router-link>
    </div>
    <div class="info">
      <div class="name">{{ user.name }}</div>
      <div class="photo"></div>
      <div class="logout" @click="handleLogout">
        <span class="material-icons"> logout </span>
        <span>Log out</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();
const user = ref(store.getters.getUser);
const handleLogout = () => {
  store.dispatch("removeUser");
  router.push("/");
};
</script>

<style></style>
