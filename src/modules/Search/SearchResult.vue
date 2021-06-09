<template>
  <div class="result">
    <div class="profile">
      <div class="pic-wrapper">
        <img :src="url" />
      </div>
      <div class="info">
        <span class="name"> {{ result.name }}</span>
        <div class="specialty label">
          <span class="material-icons-outlined icon"> medication </span>
          <span> speciality </span>
        </div>
        <div class="area label">
          <span class="material-icons-outlined icon"> place </span>
          <span> area </span>
        </div>
        <div class="fees label">
          <span class="material-icons-outlined icon"> payments </span>
          <span> 750LE </span>
        </div>
      </div>
    </div>

    <div class="bookings" v-if="loaded">
      <BookingTable :days="days" />
    </div>
  </div>
</template>

<script setup>
import { defineEmit, defineProps, inject, ref, watch } from "vue";
import BookingTable from "./BookingTable.vue";
import moment from "moment";
const api = inject("api");
const url =
  import.meta.env.VITE_ROOT_API + "/images/" + props.result.profileImage;
const props = defineProps({ result: Object });
const weekDays = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
};
const days = ref([]);
const loaded = ref(false);
api.search.get(props.result.id + "/bookings").then((res) => {
  let b = res.bookings;
  let temp = [];
  const today = new Date().getDay();
  console.log(moment().format("ddd DD/MM "));

  let date = "";
  Object.keys(b).forEach((d) => {
    let offset = (weekDays[d] - today + 7) % 7;
    if (offset === 0) date = "Today";
    else if (offset === 1) date = "Tomorrow";
    else date = moment().add(offset, "d").format("ddd DD/MM ");
    temp.push({
      offset,
      slots: b[d],
      day: d,
      date,
    });
  });
  temp.sort((a, b) => (a.offset > b.offset ? 1 : b.offset > a.offset ? -1 : 0));
  console.log(props.result.name, temp);
  days.value = temp;
  loaded.value = true;
});
</script>

<style></style>
