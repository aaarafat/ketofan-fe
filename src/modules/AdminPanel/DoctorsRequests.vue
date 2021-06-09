<template>
  <div class="doctors-requests">
    <div v-for="d in doctorsRequests" :key="d.id">
      <DoctorRequest :doctorRequest="d" @deleteRequest="handleDelete" />
    </div>
    <div v-if="doctorsRequests.length === 0">
      <h1>No Requests</h1>
    </div>
  </div>
  <!--<input type="file" multiple @change="handleFileChange($event, index)" />-->
</template>

<script setup>
import axios from "axios";
import { inject, ref } from "vue";
import { useStore } from "vuex";
import DoctorRequest from "./DoctorRequest.vue";
const store = useStore();
const doctorsRequests = ref([]);
store.dispatch("fetchDoctorsRequests").then(() => {
  doctorsRequests.value = store.getters.allDoctorsRequests;
  console.log(store.getters.allDoctorsRequests);
});

const handleDelete = (id) => {
  console.log("deleeeeeeeete");
  doctorsRequests.value = doctorsRequests.value.filter((d) => d.id !== id);
};
</script>

<style></style>
