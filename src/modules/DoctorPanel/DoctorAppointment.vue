<template>
  <div class="appointment">
    <div class="head">
      <span class="material-icons-outlined"> calendar_today </span>
      <span>{{ appointment.patient }}</span>
      <span class="material-icons-outlined note"> sticky_note_2 </span>
    </div>
    <div class="body">
      <div class="details">
        <div>
          {{ date }}
        </div>
        <div class="type">
          {{ appointment.type }}
        </div>
      </div>
      <div class="options"></div>
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps } from "vue";

const props = defineProps({ appointment: Object });
console.log(Date.toString(props.appointment.date));
const date = computed(() => {
  return new Date(props.appointment.date).toDateString();
});
</script>

<style></style>
