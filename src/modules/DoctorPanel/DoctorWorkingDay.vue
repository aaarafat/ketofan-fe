<template>
  <div class="working-day">
    <div class="head">
      <div>
        {{ day.name }}
      </div>
      <div class="switch" @click="handleSwitch">
        <label
          class="slider"
          width="3em"
          height="1.6em"
          :class="{ active: day.working }"
        ></label>
      </div>
    </div>
    <div v-if="day.working" class="details">
      <div class="options">
        <div class="option">
          <span>From</span>
          <select v-model="data.from" @change="handleSelect" id="from">
            <option disabled value="">Please select one</option>
            <option v-for="h in hours" :key="h">{{ h }}</option>
          </select>
        </div>
        <div class="option">
          <span>To</span>
          <select v-model="data.to" @change="handleSelect" id="to">
            <option disabled value="">Please select one</option>
            <option v-for="h in hours" :key="h">{{ h }}</option>
          </select>
        </div>
        <div class="option" v-if="type === 'reserve'">
          <span>Duration</span>
          <select v-model="data.duration" @change="handleSelect" id="duration">
            <option disabled value="">Please select one</option>
            <option v-for="d in duration" :key="d">{{ d }}</option>
          </select>
        </div>
        <div class="option" v-if="type === 'fifo'">
          <span>Slots</span>
          <select v-model="data.slots" @change="handleSelect" id="slots">
            <option disabled value="">Please select one</option>
            <option v-for="s in slots" :key="s">{{ s }}</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineEmit, defineProps, ref } from "vue";
const props = defineProps({ day: Object, type: String, index: Number });
const data = ref({
  from: "",
  to: "",
  duration: "",
  slots: "",
});
const emit = defineEmit(["changeWorking", "changeTimings"]);
const hours = [
  "12:00 AM",
  "12:30 AM",
  "01:00 AM",
  "01:30 AM",
  "02:00 AM",
  "02:30 AM",
  "03:00 AM",
  "03:30 AM",
  "04:00 AM",
  "04:30 AM",
  "05:00 AM",
  "05:30 AM",
  "06:00 AM",
  "06:30 AM",
  "07:00 AM",
  "07:30 AM",
  "08:00 AM",
  "08:30 AM",
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "01:00 PM",
  "01:30 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM",
  "05:00 PM",
  "05:30 PM",
  "06:00 PM",
  "06:30 PM",
  "07:00 PM",
  "07:30 PM",
  "08:00 PM",
  "08:30 PM",
  "09:00 PM",
  "09:30 PM",
  "10:00 PM",
  "10:30 PM",
  "11:00 PM",
  "11:30 PM",
];
const duration = [
  "15 Minutes",
  "30 Minutes",
  "60 Minutes",
  "90 Minutes",
  "120 Minutes",
];
const slots = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23,
  24, 25, 26, 27, 28, 29, 30, 32, 33, 34, 35, 36,
];
const working = ref(props.day.working);
const handleSwitch = () => {
  emit("changeWorking", props.index);
};
const handleSelect = (e) => {
  emit("changeTimings", props.index, e.target.id, data.value[e.target.id]);
};
</script>

<style></style>
