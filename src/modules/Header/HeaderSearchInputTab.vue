<template>
  <div class="search-tab search-input">
    <div class="button">
      <div class="title">Or search by name</div>
      <div class="content">
        <span class="material-icons icon">person_search </span>
        <input
          class="placeholder"
          v-model="doctor"
          placeholder="Search by name"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["doctor"],
  methods: {},
  mounted() {},
};
</script>

<style></style>
