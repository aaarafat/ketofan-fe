<template>
  <div class="doctor-request">
    <div class="head">
      <div class="profile">
        <div class="picture">
          <img :src="url + props.doctorRequest.profileImage" />
        </div>
        <div class="info">
          <span class="name">{{ doctorRequest.name }}</span>
          <div class="email">
            {{ doctorRequest.email }}
          </div>
          <div class="mobile">
            {{ doctorRequest.mobileNumber }}
          </div>
        </div>
      </div>

      <div class="options">
        <span class="material-icons icon accept" @click="handleAccept">
          thumb_up
        </span>
        <span class="material-icons icon reject" @click="handleReject">
          thumb_down
        </span>
      </div>
    </div>
    <div class="body">
      <div class="bio">
        <p>{{ doctorRequest.bio }}</p>
      </div>
      <div class="document">
        <div class="picture">
          <img :src="url + props.doctorRequest.document" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps, inject, defineEmit } from "vue";
const api = inject("api");
const props = defineProps({ doctorRequest: Object });
const emit = defineEmit(["deleteRequest"]);
const url = import.meta.env.VITE_ROOT_API + "/images/";
const handleReject = () => {
  api.doctorsRequests.put(props.doctorRequest.id + "/reject").then(() => {
    emit("deleteRequest", props.doctorRequest.id);
  });
};
const handleAccept = () => {
  api.doctorsRequests.put(props.doctorRequest.id + "/approve").then(() => {
    emit("deleteRequest", props.doctorRequest.id);
  });
};
</script>

<style></style>
