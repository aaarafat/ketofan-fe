<template>
  <div class="navbar">

    <div v-if="data.showOverlay" @click="toggleSidebar" class='overlay'>
    </div>

    <nav>
      <input type="checkbox" id="navCheck">
      <label for="navCheck" class="checkbtn">
        <i @click="toggleSidebar" class="material-icons">menu</i>
      </label>
      <label class="logo"><router-link  
            to= "/">
            Ketofan
        </router-link></label>
      <ul :class="{sidebar: data.showOverlay}">

        <li v-if="data.showOverlay" id='arrow'>
          <input type="checkbox" id="navCheck">
          <label  @click="toggleSidebar" for="navCheck" class="checkbtn">
            <i class="material-icons">arrow_forward</i>
          </label>
        </li>


        <ListItem 
          v-if="data.showOverlay"
          linkText="Home"
          iconType = "home"
          path = "/"
          linkId="navHome"/>
        
        <hr>
        <ListItem 
          v-if="!store.getters.isLogined"
          :showIcon="data.showOverlay"
          linkText="Sign Up"
          iconType = "app_registration"
          path = "signup"
          />
        
        
        <li v-if="store.getters.isLogined && data.showOverlay" @click="toggleSidebar">
          <span class="material-icons icons">
              person
          </span>
         <router-link to="profile"> My Profile </router-link>
        </li>
        <hr/>
        
        <li v-if="store.getters.isLogined && data.showOverlay" @click="toggleSidebar">
          <span class="material-icons icons">
              date_range
          </span>
          <router-link to="appointments"> My Appointments </router-link>
        </li>

        <!-- to be revisited -->
        <li v-if="store.getters.isLogined && !data.showOverlay" @click="toggleMenu">
          {{store.getters.getUser.name}}
          <span id="dropDownArrow" class="material-icons icon">
              arrow_drop_down
          </span>
        </li>

        <Menu v-if="!data.showOverlay && data.showMenu && store.getters.isLogined"
        :show="toggleMenu"/>

        <span v-if="!store.getters.isLogined" class="bar">|</span>
        <ListItem 
          v-if="!store.getters.isLogined"
          :showIcon="data.showOverlay"
          linkText="Login"
          iconType = "login"
          path = "login"
          />

         
        <span class="bar">|</span>
        <hr>

        <ListItem 
          :showIcon="data.showOverlay"
          linkText="Contact Us"
          path = "contact-us"
          iconType = "phone"
          />
        <hr v-if="store.getters.isLogined">
        <li v-if="store.getters.isLogined && data.showOverlay" @click="logout">
          <span class="material-icons icons">
              logout
          </span>
          Logout
        </li>
        
      </ul>
    </nav>
  </div>
</template>

<script setup>
import ListItem from '../../modules/Navbar/ListItem.vue'
import Menu from '../../modules/Navbar/Menu.vue'
import { inject, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
  
  const data = ref({showOverlay:false, showMenu:false})
  const store = useStore()
  const router = useRouter()
  const api = inject("api")

  const toggleSidebar = ()=>{
    toggleOverlay()
  }
  const toggleOverlay = ()=>{
    console.log("toggleSidebar")
    setTimeout(() => {  data.value.showOverlay = !data.value.showOverlay }, 150);
  }
  const toggleMenu = ()=>{
    data.value.showMenu = !data.value.showMenu;
  }
  const logout = ()=>{
    store.dispatch("removeUser")  
    router.push("/");
    data.value.showOverlay = !data.value.showOverlay
  }
//to-do
//rerouting to login using token
//
</script>