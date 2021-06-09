<template>
  <div class="search-wrapper">
    <div class="search">
      <div v-for="r in results" :key="r.id">
        <SearchResult :result="r" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, inject } from "vue";
import { onBeforeRouteUpdate, useRoute, useRouter } from "vue-router";
import SearchResult from "../modules/Search/SearchResult.vue";
const route = useRoute();
const api = inject("api");
const results = ref([]);
onMounted(() => {
  const route = useRoute();
  const query = { ...route.params, ...route.query };
  fetchSearch(query);
});
onBeforeRouteUpdate((to, from) => {
  const query = { ...to.params, ...to.query };
  fetchSearch(query);
});

const fetchSearch = (query) => {
  if (query.area === "egypt") delete query.area;
  if (query.specialization === "all") delete query.specialization;
  if (query.insurance === "") delete query.insurance;
  console.log(query);
  api.search.fetch(query).then((res) => {
    results.value = res.doctors;
    console.log(res);
  });
};
</script>

<style></style>
