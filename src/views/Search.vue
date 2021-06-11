<template>
  <div class="search-wrapper">
    <div class="search">
      <div
        class="vld-parent placeholder"
        v-if="results.length === 0"
        ref="searchContainer"
      >No Results</div>
      <div v-else v-for="r in results" :key="r.id">
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
const searchContainer = ref(null);
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
  const options = {
    isLoading: true,
    container: searchContainer.value,
  };
  api.search.fetch(query, options).then((res) => {
    results.value = res.doctors;
    console.log(res);
  });
};
</script>

<style scoped lang="scss">
.placeholder {
  height: 300px;
  border-radius: 15px 15px 0 0;
  background-color: white;
  padding: 1em;
  margin: 1em;
  display: flex;
  box-shadow: #cccccc 0px 2px 10px;
  text-align: center;
  font-size: 23px;
}
</style>
