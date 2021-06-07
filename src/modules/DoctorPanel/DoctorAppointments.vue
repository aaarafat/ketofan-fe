<template>
  <div class="doctor-appointments">
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
</template>

<script setup>
import { computed, ref } from "vue";
import DoctorAppointment from "./DoctorAppointment.vue";

const appointments = ref([
  {
    id: 1,
    patient: "احمد وليد",
    notes: "راجل كبير في السن",
    date: Date.now(),
    type: "examination",
  },
  {
    id: 2,
    patient: "Hassan",
    notes: "None",
    date: Date.now() + 864000000,
    type: "examination",
  },
]);
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
