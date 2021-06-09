<template>
  <div class="doctors-requests">
    <div v-for="d in doctorsRequests" :key="d.id">
      <DoctorRequest :doctorRequest="d" />
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
});

const handleFileChange = (e, i) => {
  let formData = new FormData();
  formData.append("profileImage", e.target.files[0]);
  formData.append("document", e.target.files[0]);
  formData.append("name", "Abood");
  formData.append("email", "ahmed10@gmail.com");
  formData.append("gender", "M");
  formData.append("dateOfBirth", "1999-10-19");
  formData.append("bio", "Good Doctor");
  formData.append("specializationId", "1");
  formData.append("areaId", "1");
  formData.append("mobileNumber", "01166645155");
  //const headers = formData.getHeaders();
  console.log(formData);
  axios.post("http://localhost:3000/api/v1/doctors/request", formData);
};
</script>

<style></style>
