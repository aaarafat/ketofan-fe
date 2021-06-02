<template>
  <div class="search-tab" @click="toggleDropdown">
    <div class="button">
      <div class="title">{{ tab.title }}</div>
      <div class="content">
        <span class="material-icons icon"> {{ tab.icon }} </span>
        <span class="placeholder">{{ tab.placeholder }}</span>
      </div>
    </div>
    <div>
      <span class="material-icons"> arrow_drop_down </span>
    </div>
    <div v-if="expand" class="dropdown"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      expand: false,
    };
  },
  props: ["tab"],
  methods: {
    toggleDropdown() {
      this.expand = !this.expand;
    },
  },
  mounted() {},
};
</script>

<style></style>
