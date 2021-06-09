<template>
  <div class="feedback">
    <div class="head">
      <span>{{ feedback.name }}</span>

      <div class="options" @click="handleDelete">
        <span class="material-icons delete"> delete_forever </span>
      </div>
    </div>
    <div class="body">
      <div class="details">
        <div>
          {{ feedback.email }}
        </div>
        <div>
          {{ feedback.mobileNumber }}
        </div>
        <div class="time">{{ feedback.created_at }}</div>
      </div>
      <div class="message">
        <p>{{ feedback.comments }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, defineEmit, defineProps } from "vue";
import { useStore } from "vuex";

const store = useStore();
const emit = defineEmit(["deleteFeedback"]);
const props = defineProps({ feedback: Object });
const handleDelete = () => {
  //TODO call BE
  store.dispatch("removeFeedback", props.feedback.id).then(() => {
    emit("deleteFeedback", props.feedback.id);
  });
};
</script>

<style></style>
