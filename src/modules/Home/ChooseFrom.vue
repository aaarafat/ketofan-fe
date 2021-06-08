<template>
  <div class="container">
    <h3>Choose and book from top {{ type }}</h3>
    <div class="data-wrapper">
      <span
        class="element"
        v-for="d in data"
        :key="d.name"
        @click="handleClick"
      >
        {{ d.name }}
      </span>
      <span class="element" @click="handleView">View more...</span>
    </div>
  </div>
</template>

<script setup="props">
import { defineProps, ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const props = defineProps({ type: String, data: Array });
const params = ref({ area: "egypt", speciality: "all" });
const handleClick = (e) => {
  params.value[props.type] = e.target.innerHTML;
  let string = `/search/${params.value["specialties"]}/${params.value["areas"]}`;
  router.push(string);
};
const handleView = (e) => {
  let string = `/${props.type}`;
  router.push(string);
};
</script>

<style></style>
