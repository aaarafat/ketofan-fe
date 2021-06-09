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

      <div class="logout" @click="handleLogout">
        <span class="material-icons"> logout </span>
        <span>Log out</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, watch, inject } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();
const user = ref(store.getters.getUser);
const url = ref("");
const api = inject("api");
api.search.get(user.value.id).then((res) => {
  console.log(res);
  url.value =
    import.meta.env.VITE_ROOT_API + "/images/" + res.doctor.profileImage;
});

const handleLogout = () => {
  store.dispatch("removeUser");
  router.push("/");
};
</script>

<style></style>
