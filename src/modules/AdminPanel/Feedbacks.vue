<template>
  <div class="feedbacks">
    <div v-for="f in feedbacks" :key="f.id">
      <Feedback :feedback="f" />
    </div>
  </div>
</template>

<script setup>
import { inject, ref } from "vue";
import { useStore } from "vuex";
import Feedback from "./Feedback.vue";
const store = useStore();
const feedbacks = ref([]);
store.dispatch("fetchFeedbacks").then(() => {
  feedbacks.value = store.getters.allFeedbacks;
  console.log(feedbacks.value);
});
</script>

<style></style>
