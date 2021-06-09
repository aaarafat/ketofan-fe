<template>
  <div class="column">
    <div class="head cell">
      {{ day.date }}
    </div>
    <div
      class="cell"
      v-for="s in day.slots"
      :key="s.id"
      @click="handleClick($event, s)"
      :class="{ reserved: !s.available }"
    >
      <span>
        {{ s.time.slice(0, 5) }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";
let props = defineProps({ day: Object });
const handleClick = (e, s) => {
  console.log(s);
};
</script>

<style></style>
