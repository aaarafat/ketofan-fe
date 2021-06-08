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

    <div class="bookings"></div>
  </div>
</template>

<script setup>
import { defineEmit, defineProps, inject, watch } from "vue";
const api = inject("api");
const url =
  import.meta.env.VITE_ROOT_API + "/images/" + props.result.profileImage;
const props = defineProps({ result: Object });
api.search.get(props.result.id + "/bookings").then((res) => {
  console.log(res);
});
</script>

<style></style>
