<template>
  <div class="booking-table">
    <swiper :slides-per-view="3" :scrollbar="{ draggable: true }" virtual>
      <swiper-slide v-for="(d, i) in days" :key="d.id" :virtualIndex="i"
        ><BookingColumn :day="d"
      /></swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import BookingColumn from "./BookingCloumn.vue";
import { defineProps, ref } from "vue";

// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Virtual]);

let props = defineProps({ days: Array });
</script>

<style></style>
