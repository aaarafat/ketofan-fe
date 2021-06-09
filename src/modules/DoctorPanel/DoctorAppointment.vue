<template>
  <div class="appointment">
    <div class="head">
      <span class="material-icons-outlined"> calendar_today </span>
      <span>{{ appointment.patient }}</span>
      <!-- <span class="material-icons-outlined note"> sticky_note_2 </span> -->
    </div>
    <div class="body">
      <div class="details">
        <div>
          {{ appointment.day + " " + appointment.date }}
        </div>
        <div class="type">
          {{ appointment.time.slice(0, 5) }}
        </div>
      </div>
      <div class="options" @click="handleDelete">
        <span class="material-icons delete"> delete_forever </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps } from "vue";

const props = defineProps({ appointment: Object });
const handleDelete = () => {
  //TODO call BE
};
const date = computed(() => {
  return new Date(props.appointment.date).toDateString();
});
</script>

<style></style>
