<template>
  <div class="bookings">
    <div class="head">
      <div class="column">Doctor Name</div>
      <div class="column">Reservation Date</div>
      <div class="column">Cancel</div>
    </div>
    <div v-for="(app, index) in data" :key="index">
      <Appointment
        @cancelApp="handelCancel"
        :idx="index"
        :name="app.doctor"
        :place="app.place"
        :date="app.date + ' ' + app.time"
      ></Appointment>
    </div>
  </div>
</template>

<script setup>
import Appointment from "../modules/Appointments/Appointment.vue";
import { inject, reactive, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
const api = inject("api");
const store = useStore();
const router = useRouter();

const data = ref(null);
const handelCancel = (idx) => {
  console.log(idx);
  let id = data.value[idx].id;
  api.appointments.delete(id).then(() => {
    api.appointments.get().then((res) => {
      data.value = res.appointments;
    });
  });
};
onMounted(async () => {
  data.value = (await api.appointments.get()).appointments;
  console.log(data.value);
});
</script>

<style>
</style>