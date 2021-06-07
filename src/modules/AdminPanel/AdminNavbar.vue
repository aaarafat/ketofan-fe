<template>
  <div class="admin-nav">
    <div class="navigation">
      <div class="logo">
        <span>K</span>
      </div>
      <router-link :to="{ name: 'DoctorsRequests' }">
        <div class="option">Doctor Requests</div>
      </router-link>
      <router-link :to="{ name: 'Feedbacks' }">
        <div class="option">Feedbacks</div>
      </router-link>
    </div>
    <div class="info">
      <div class="name">{{ user.name }}</div>
      <div class="navigation home" @click="handleHome">
        <span class="material-icons-outlined icon"> home </span>
        <span>Home</span>
      </div>
      <div class="navigation logout" @click="handleLogout">
        <span class="material-icons icon"> logout </span>
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
const handleHome = () => {
  router.push("/");
};
</script>

<style></style>
