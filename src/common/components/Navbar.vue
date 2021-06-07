<template>
  <div class="navbar">
    <div v-if="showOverlay" @click="toggleSidebar" class="overlay"></div>

    <nav>
      <input type="checkbox" id="navCheck" />
      <label for="navCheck" class="checkbtn">
        <i @click="toggleSidebar" class="material-icons">menu</i>
      </label>
      <label class="logo">Ketofan</label>
      <ul :class="{ sidebar: showOverlay }">
        <li v-if="showOverlay" id="arrow">
          <input type="checkbox" id="navCheck" />
          <label @click="toggleSidebar" for="navCheck" class="checkbtn">
            <i class="material-icons">arrow_forward</i>
          </label>
        </li>

        <ListItem
          v-if="showOverlay"
          linkText="Home"
          iconType="home"
          path="/"
          linkId="navHome"
        />

        <hr />
        <ListItem
          :showIcon="showOverlay"
          linkText="Sign Up"
          iconType="app_registration"
          path="/signup"
        />

        <span class="bar">|</span>
        <hr />
        <ListItem
          :showIcon="showOverlay"
          linkText="Login"
          iconType="login"
          path="/login"
        />

        <span class="bar">|</span>
        <hr />

        <ListItem
          :showIcon="showOverlay"
          linkText="Contact Us"
          path="/contact-us"
          iconType="phone"
        />
        <span class="bar">|</span>

        <li>
          <img
            id="navEgyptFlag"
            alt="egypt flag"
            src="https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/27353/_next/static/images/Egypt.png"
          />
        </li>

        <li id="navEgypt">
          <p>Egypt</p>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import ListItem from "../../modules/Navbar/ListItem.vue";
export default {
  data() {
    return {
      signedIn: null,
      sidebar: null,
      showOverlay: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.toggleOverlay();
    },
    toggleOverlay() {
      setTimeout(() => {
        this.showOverlay = !this.showOverlay;
      }, 150);
    },
  },
  components: {
    ListItem: ListItem,
  },
};
//to-do
//rerouting to login using token
//
</script>
