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
        {{ d }}
      </span>
      <span class="element" @click="handleView">View more...</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["type", "data"],
  methods: {
    handleClick(e) {
      console.log(e.target.innerHTML);
    },
    handleView(e) {
      console.log(this.type);
    },
  },
};
</script>

<style></style>
