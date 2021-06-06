<template>
  <div class="working-hours">
    <div class="heading">
      <div class="options">
        <div class="option">
          <input
            type="radio"
            id="one"
            value="reserve"
            v-model="workhours.type"
          />
          <label for="one">On Appointment</label>
        </div>
        <div class="option">
          <input type="radio" id="two" value="fifo" v-model="workhours.type" />
          <label for="two">Fifo</label>
        </div>
      </div>
      <div class="save" @click="handleSave">Save Changes</div>
    </div>
    <div class="body">
      <div v-for="(d, i) in workhours.days" :key="d.name">
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
import { ref } from "vue";

const handleSave = () => {
  console.log(workhours.value);
};

const handleChangeWorking = (i) => {
  workhours.value.days[i].working = !workhours.value.days[i].working;
};
const handleChangeTimings = (i, type, data) => {
  workhours.value.days[i][type] = data;
};
const workhours = ref({
  type: "reserve",
  days: [
    {
      name: "Saturday",
      from: "",
      to: "",
      slots: "",
      duration: "",
      working: true,
    },
    {
      name: "Sunday",
      from: "",
      to: "",
      slots: "",
      duration: "",
      working: false,
    },
    {
      name: "Monday",
      from: "",
      to: "",
      slots: "",
      duration: "",
      working: false,
    },
    {
      name: "Tuesday",
      from: "",
      to: "",
      slots: "",
      duration: "",
      working: false,
    },
    {
      name: "Wedensday",
      from: "",
      to: "",
      slots: "",
      duration: "",
      working: false,
    },
    {
      name: "Thursday",
      from: "",
      to: "",
      slots: "",
      duration: "",
      working: false,
    },
    {
      name: "Friday",
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
