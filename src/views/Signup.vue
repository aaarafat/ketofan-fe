<template>
  <div class="login">
    <div class="loginTitle">Sign Up</div>

    <div class="formBody signupFormBody">
      <div class="formField">
        <label for="">Your Name</label>
        <input
          @change="handleChange"
          class="loginInput"
          name="name"
          type="name"
          placeholder="First and Last name"
          v-model="data.name"
        />
        <p v-if="error.name.show" class="error">{{ error.name.message }}</p>
      </div>

      <div class="formField" id="radioField">
        <label class="gender" for="">Gender</label>
        <div class="gender loginInput">
          <label class="radio" for="male">Male</label>
          <input
            @change="handleChange"
            class="radio"
            type="radio"
            id="male"
            name="gender"
            value="M"
            v-model="data.gender"
          />
          <label class="radio" for="female">Female</label>
          <input
            @change="handleChange"
            class="radio"
            type="radio"
            id="female"
            name="gender"
            value="F"
            v-model="data.gender"
          />
        </div>
        <p v-if="error.gender.show" class="error">{{ error.gender.message }}</p>
      </div>

      <div class="formField">
        <label for="">Mobile Number</label>
        <input
          @change="handleChange"
          class="loginInput"
          name="phone"
          placeholder="Mobile Number"
          v-model="data.mobileNumber"
        />
        <p v-if="error.mobileNumber.show" class="error">
          {{ error.mobileNumber.message }}
        </p>
      </div>

      <div class="formField">
        <label for="">Email</label>
        <input
          @change="handleChange"
          class="loginInput"
          name="email"
          type="email"
          placeholder="example@domain.com"
          v-model="data.email"
        />
        <p v-if="error.email.show" class="error">{{ error.email.message }}</p>
      </div>

      <div class="formField">
        <label for=""> Birthdate </label>
        <input
          @change="handleChange"
          class="loginInput"
          name="Birthdate"
          type="date"
          v-model="data.dateOfBirth"
        />
        <p v-if="error.dateOfBirth.show" class="error">
          {{ error.dateOfBirth.message }}
        </p>
      </div>
      <div class="formField">
        <label for="">Password</label>
        <input
          @change="handleChange"
          class="loginInput"
          name="password"
          type="password"
          placeholder="Password"
          v-model="data.password"
        />
        <p v-if="error.password.show" class="error">
          {{ error.password.message }}
        </p>
      </div>
      <button @click="handleSubmit" class="loginButton loginInput">
        Join Now
      </button>
    </div>

    <div class="formBody signupFormBody">
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
  gender: "",
  mobileNumber: "",
  dateOfBirth: "",
  name: "",
});
let enableSubmit = false;
const emptyFieldError = "Plaease Enter Your ";
const error = ref({
  email: {
    show: false,
    message: "Please Enter A Valid Email",
  },
  password: {
    show: false,
    message: emptyFieldError + "Password",
  },
  gender: {
    show: false,
    message: emptyFieldError + "Gender",
  },
  mobileNumber: {
    show: false,
    message: "Please Enter A Valid Phone",
  },
  dateOfBirth: {
    show: false,
    message: emptyFieldError + "Birthdate",
  },
  name: {
    show: false,
    message: emptyFieldError + "Name",
  },
});

const handleSubmit = async () => {
  handleChange();
  if (!enableSubmit) return;

  try {
    const res = await api.register.post({ ...data }, true);
    console.log(res);
    store.dispatch("setUser", res);
    if (store.getters.isDoctor) router.push("/doctor");
    else router.push("/");
  } catch (err) {
    console.log(err.response);
    if (err.response.data.status === 400) {
      err.response.data.errors.forEach((e) => {
        error.value[e.param].message = e.msg;
        error.value[e.param].show = true;
      });
    }
  }
};

const handleChange = () => {
  error.value.email.show = data.email.includes("@") ? false : true;
  error.value.password.show = data.password === "" ? true : false;
  error.value.gender.show = data.gender === "" ? true : false;
  error.value.mobileNumber.show = /^((\+2)|2)?01[0125]\d{8}$/.test(
    data.mobileNumber
  )
    ? false
    : true;
  error.value.dateOfBirth.show = data.dateOfBirth === "" ? true : false;
  error.value.name.show = data.name === "" ? true : false;
  if (
    !(
      error.value.name.show ||
      error.value.dateOfBirth.show ||
      error.value.mobileNumber.show ||
      error.value.gender.show ||
      error.value.password.show ||
      error.value.email.show
    )
  ) {
    enableSubmit = true;
  }
};
</script>

<style scoped>
</style>

