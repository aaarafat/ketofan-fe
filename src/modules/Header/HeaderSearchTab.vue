<template>
  <div
    class="search-tab"
    @click="toggleDropdown"
    v-click-outside="onClickOutside"
  >
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
    <div v-if="expand" class="dropdown">
      <ul>
        <li v-for="d in data" :key="d" class="element" @click="handleChoose">
          {{ d }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import vClickOutside from "click-outside-vue3";

export default {
  directives: { clickOutside: vClickOutside.directive },

  data() {
    return {
      expand: false,
    };
  },
  props: ["tab", "data", "index"],
  methods: {
    toggleDropdown() {
      this.expand = !this.expand;
    },
    onClickOutside(event) {
      if (this.expand) this.expand = false;
    },
    handleChoose(e) {
      this.$emit("select-element", e.target.innerText, this.index);
    },
  },
  mounted() {},
};
</script>

<style></style>
