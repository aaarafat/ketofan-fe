<template>
  <div class="dropdownMenu">
        <div v-if="!store.getters.isAdmin">
            <span class="material-icons icon">
                person
            </span>
           <router-link  @click="hide"  to="/profile">My Profile</router-link> 
        </div>
        <div v-if="!store.getters.isAdmin">
            <span class="material-icons icon">
                date_range
            </span>
            
            <router-link  @click="hide" to="/appointments">My Appointments</router-link> 
        </div>
        <div v-if="store.getters.isAdmin">
            <span class="material-icons icon">
                admin_panel_settings
            </span>
            
            <router-link @click="hide" to="/admin">Admin Panel</router-link> 
        </div>
        <div @click="logout">
            <span class="material-icons icon">
                logout
            </span>
            Logout
        </div>
    </div>
</template>

<script setup="props">
import { defineProps, inject, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
const props = defineProps({ show: Function});
const store = useStore()
const router = useRouter()
const api = inject("api")

const logout = ()=>{
store.dispatch("removeUser")  
router.push("/");
hide()
}
const hide = ()=>{
    props.show()
}
</script>
