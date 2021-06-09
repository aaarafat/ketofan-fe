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
import axios from "axios";
import { defineProps, ref, inject } from "vue";
import { useRouter } from "vue-router";
import { $auth } from "../../services/auth";
const router = useRouter();
const api = inject("api");
let props = defineProps({ day: Object, doctorId: Number });
const handleClick = (e, s) => {
  if (!s.available) return;

  router.push({
    path: `/confirm/${props.doctorId}/${s.id}`,
    query: { time: s.time.slice(0, 5), day: props.day.date },
  });
};
</script>

<style></style>
