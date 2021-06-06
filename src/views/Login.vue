<template>
  <div class="login">
    <div class="loginTitle">Login</div>
    <div class="formBody">
      <div class="formField">
        <label for="">Mobile or Email</label>
        <input
          class="loginInput"
          name="email"
          type="email"
          placeholder="Email or Phone"
          v-model="data.email"
        />
      </div>
      <div class="formField">
        <label for="">Password</label>
        <input
          class="loginInput"
          name="password"
          type="password"
          placeholder="Password"
          v-model="data.password"
        />
      </div>
      <button class="loginButton loginInput" @click="handleLogin">Login</button>
    </div>

    <div class="formSeparator">
      <hr />
      <div id="loginOr">or</div>
    </div>
    <div class="formBody">
      <!--
      <button id="conWFacebook" class="loginButton loginInput">
        <span id="facebookIcon" class="material-icons"> facebook </span>
        Connect With Facebook
      </button> -->
      <div class="WrongAuthPage">
        <span>
          New User?
          <router-link to="signup">Sign Up</router-link>
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
const data = reactive({ email: "", password: "" });
const handleLogin = async () => {
  console.log(data.email, data.password);
  const res = await api.signin.post({ ...data });
  if (res) {
    store.dispatch("setUser", res);

    if (store.getters.isDoctor) router.push("/doctor");
    else router.push("/");
  }
};
</script>
