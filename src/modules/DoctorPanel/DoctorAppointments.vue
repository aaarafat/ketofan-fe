<template>
  <div class="doctor-appointments" v-if="appointments.length">
    <div class="heading">
      <div class="seprator"></div>
      <div class="time">Today</div>
      <div class="line"></div>
    </div>
    <div v-for="app in todayApps" :key="app.id" :appointment="app">
      <DoctorAppointment :appointment="app" />
    </div>
    <div class="heading">
      <div class="seprator"></div>
      <div class="time">Upcoming</div>
      <div class="line"></div>
    </div>
    <div v-for="app in upcomingApps" :key="app.id" :appointment="app">
      <DoctorAppointment :appointment="app" />
    </div>
  </div>
  <div class="doctor-appointments" v-if="!appointments.length">
    <h2>No Appointments</h2>
  </div>
</template>

<script setup>
import { computed, ref, inject } from "vue";
import DoctorAppointment from "./DoctorAppointment.vue";
const api = inject("api");
api.doctorApps.fetch().then((res) => {
  console.log(res);
  appointments.value = res.appointments;
});
const appointments = ref([]);
const todayApps = computed(() => {
  return appointments.value.filter((app) => {
    const day = new Date(Date.now()).getDay();
    const appd = new Date(app.date).getDay();
    return appd === day;
  });
});

const upcomingApps = computed(() => {
  return appointments.value.filter((app) => {
    const day = new Date(Date.now()).getDay();
    const appd = new Date(app.date).getDay();
    return appd !== day;
  });
});
</script>

<style></style>
