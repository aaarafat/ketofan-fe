<template>
  <div class="confirm-booking">
    <div class="wrapper">
      <div class="pic-wrapper">
        <img :src="url" />
      </div>
      <div class="profile">
        <div class="info">
          <div class="name">{{ result.name }}</div>
          <div class="bio">{{ result.bio }}</div>
          <div class="details">
            <div class="specialty label">
              <span class="material-icons-outlined icon"> medication </span>
              <span> {{ result.specialization }} </span>
            </div>
            <div class="area label">
              <span class="material-icons-outlined icon"> place </span>
              <span> {{ result.area }} </span>
            </div>
            <div class="fees label">
              <span class="material-icons-outlined icon"> payments </span>
              <span> {{ result.fees }} LE</span>
            </div>
          </div>
        </div>
      </div>
      <div class="timing">
        {{ `${day} at ${time}` }}
        <strong> , Appointment Reservation</strong>
      </div>
    </div>
    <div class="options">
      <div class="confirm" @click="handleConfirm">Confirm</div>
      <div class="cancel" @click="router.go(-1)">Cancel</div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted, inject } from "vue";
import { onBeforeRouteUpdate, useRoute, useRouter } from "vue-router";
import { $auth } from "../services/auth";
const route = useRoute();
const api = inject("api");
const result = ref([]);
const day = ref([]);
const time = ref([]);
const url = ref([]);
const router = useRouter();
onMounted(() => {
  console.log(route.query);
  day.value = route.query.day;
  time.value = route.query.time;
  const query = { ...route.params, ...route.query };
  api.search.get(route.params.doctorId).then((res) => {
    result.value = res.doctor;
    url.value =
      import.meta.env.VITE_ROOT_API + "/images/" + res.doctor.profileImage;
  });
});
onBeforeRouteUpdate((to, from) => {
  const query = { ...to.params, ...to.query };
  fetchSearch(query);
});

const handleConfirm = () => {
  const token = $auth.getToken();
  console.log(token);
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  axios
    .post(
      import.meta.env.VITE_ROOT_API +
        `/doctors/${route.params.doctorId}/bookings/${route.params.id}`,
      {},
      config
    )
    .then((res) => {
      router.push("/");
    });
};
</script>

<style></style>
