<template>
  <div class="working-hours">
    <div class="heading">
      <div class="options">
        <div class="option">
          <input
            type="radio"
            id="one"
            value="reservation"
            v-model="workingDays.type"
          />
          <label for="one">On Appointment</label>
        </div>
        <div class="option">
          <input
            type="radio"
            id="two"
            value="fifo"
            v-model="workingDays.type"
          />
          <label for="two">Fifo</label>
        </div>
      </div>
      <div class="save" @click="handleSave">Save Changes</div>
    </div>
    <div class="body">
      <div v-for="(d, i) in workingDays.days" :key="d.name">
        <DoctorWorkingDay
          :day="d"
          :type="workhours.type"
          :index="i"
          @changeWorking="handleChangeWorking"
          @changeTimings="handleChangeTimings"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import DoctorWorkingDay from "./DoctorWorkingDay.vue";
import { inject, ref } from "vue";
const api = inject("api");
const workingDays = ref([]);

api.workingDays.fetch().then((res) => {
  console.log(res.workingDays);
  workingDays.value = res.workingDays;
});
const handleSave = () => {
  console.log(workingDays);
  api.workingDays.post({ ...workingDays.value });
};

const handleChangeWorking = (i) => {
  workingDays.value.days[i].working = !workingDays.value.days[i].working;
};
const handleChangeTimings = (i, type, data) => {
  workingDays.value.days[i][type] = data;
};
const workhours = ref({
  type: "reserve",
  days: [
    {
      day: "Saturday",
      from: "",
      to: "",
      slots: "",
      duration: "",
      working: true,
    },
    {
      day: "Sunday",
      from: "",
      to: "",
      slots: "",
      duration: "",
      working: false,
    },
    {
      day: "Monday",
      from: "",
      to: "",
      slots: "",
      duration: "",
      working: false,
    },
    {
      day: "Tuesday",
      from: "",
      to: "",
      slots: "",
      duration: "",
      working: false,
    },
    {
      day: "Wedensday",
      from: "",
      to: "",
      slots: "",
      duration: "",
      working: false,
    },
    {
      day: "Thursday",
      from: "",
      to: "",
      slots: "",
      duration: "",
      working: false,
    },
    {
      day: "Friday",
      from: "",
      to: "",
      slots: "",
      duration: "",
      working: false,
    },
  ],
});
</script>

<style></style>
