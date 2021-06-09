<template>
  <div class="feedbacks">
    <div v-for="f in feedbacks" :key="f.id">
      <Feedback :feedback="f" @deleteFeedback="handleDelete" />
    </div>
    <div v-if="feedbacks.length === 0">
      <h1>No Feedbacks</h1>
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
const handleDelete = (id) => {
  console.log("deleeeeeeeete");
  feedbacks.value = feedbacks.value.filter((f) => f.id !== id);
};
</script>

<style></style>
