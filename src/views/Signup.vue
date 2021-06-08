<template>
    <div class="login">
        <div class="loginTitle">
            Sign Up
        </div>
        <!-- <div id="signupTop" class="formBody ">
         <button id="conWFacebook" class='loginButton loginInput'>
            <span id="facebookIcon" class="material-icons">
                facebook
            </span>
            Connect With Facebook
        </button>
        </div>
        <div class="formSeparator">
            <hr>
            <div id="loginOr">or</div>
        </div> -->
        <div class="formBody signupFormBody">
            <div class="formField">
                <label for="">Your Name</label>
                <input class="loginInput" name="name" type="name" placeholder="First and Last name" v-model="data.name">
            </div>

            <div class="formField" >
                <label class="gender" for="">Gender</label>
                <div class="gender loginInput">
                    <label class="radio" for="male">Male</label>
                    <input class="radio" type="radio" id="male" name="gender" value="M" v-model="data.gender">
                    <label class="radio" for="female">Female</label>
                    <input class="radio" type="radio" id="female" name="gender" value="F" v-model="data.gender">
                </div>
            </div>
            <div class="formField">
                <label for="">Mobile Number</label>
                <input class="loginInput" name="phone" type="number" placeholder="Mobile Number" v-model="data.phone">
            </div>
            
            <div class="formField">
                <label for="">Email</label>
                <input class="loginInput" name="email" type="email" placeholder="example@domain.com" v-model="data.email">
            </div>
            
            <div class="formField">
                <label for="">
                    Birthdate
                </label>
                <input class="loginInput" name="Birthdate" type="date" v-model="data.birthdate">
            </div>
            <div class="formField">
                <label for="">Password</label>
                <input class="loginInput" name="password" type="password" placeholder="Password" v-model="data.password">
            </div>
            <button @click="handleSubmit" class='loginButton loginInput'>Join Now</button>
        </div>

        
        <div class= "formBody signupFormBody">
           
            <div class="WrongAuthPage">
                <span>
                    Already Signed Up?
                    <router-link to="login">login</router-link>
                </span>
            </div>
        </div>

    </div>
        
</template>

<script setup>
import { inject, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
const api = inject("api");
const store = useStore();
const router = useRouter();
const data = reactive({ 
    email: "", 
    password: "",
    gender:"",
    phone:"",
    birthdate:"",
    name:"",
});
const handleSubmit = async () => {
  console.log(data.male);
  const res = await api.register.post({ ...data });
  if (res) {
    store.dispatch("setUser", res);

    if (store.getters.isDoctor) router.push("/doctor");
    else router.push("/");
  }
};
</script>

<style scoped>

</style>

