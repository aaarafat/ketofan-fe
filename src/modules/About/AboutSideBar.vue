<template>
  <div class="about-sidebar">
    <router-link to="about"
      ><div
        class="option"
        @click="handleSelction"
        id="about"
        :class="{ active: aboutSelected }"
      >
        <span class="material-icons"> info </span>
        About Us
      </div></router-link
    >
    <router-link to="our-team"
      ><div
        class="option"
        @click="handleSelction"
        id="our-team"
        :class="{ active: ourTeamSelected }"
      >
        <span class="material-icons"> people </span>
        Our Team
      </div></router-link
    >
    <router-link to="life-at-ketofan"
      ><div
        class="option"
        @click="handleSelction"
        id="life-at-ketofan"
        :class="{ active: lifeAtKetofanSelected }"
      >
        <span class="material-icons"> apartment </span>
        Life At Ketofan
      </div></router-link
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "about",
    };
  },
  methods: {
    handleSelction(e) {
      this.selected = e.target.id;
    },
  },
  computed: {
    aboutSelected() {
      return this.selected === "about";
    },
    ourTeamSelected() {
      return this.selected === "our-team";
    },
    lifeAtKetofanSelected() {
      return this.selected === "life-at-ketofan";
    },
  },
  mounted() {
    console.log(this.$router.currentRoute._rawValue.name);
    this.selected = this.$router.currentRoute._rawValue.name;
  },
};
</script>

<style></style>
