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
          v-model="data.phone"
        />
        <p v-if="error.phone.show" class="error">{{ error.phone.message }}</p>
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
          v-model="data.birthdate"
        />
        <p v-if="error.birthdate.show" class="error">
          {{ error.birthdate.message }}
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
  phone: "",
  birthdate: "",
  name: "",
});
let enableSubmit = false;
const emptyFieldError = "Plaease Enter Your ";
const error = reactive({
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
  phone: {
    show: false,
    message: "Please Enter A Valid Phone",
  },
  birthdate: {
    show: false,
    message: emptyFieldError + "Birthdate",
  },
  name: {
    show: false,
    message: emptyFieldError + "Name",
  },
});
const BACK_TO_FRONT_MAP = {
  password: "password",
  email: "email",
  name: "name",
  gender: "gender",
  dateOfBirth: "birthdate",
  mobileNumber: "phone",
};
const handleSubmit = async () => {
  handleChange();
  console.log(data);
  if (!enableSubmit) {
    return;
  }
  api.register
    .post({ ...data }, "", true)
    .then((res) => {
      if (res) {
        store.dispatch("setUser", res);

        if (store.getters.isDoctor) router.push("/doctor");
        else router.push("/");
      }
    })
    .catch((err) => {
      if (err.response.data.status === 400) {
        const errors = err.response.data.errors.reduce(
          (errs, currentError) => ({
            [BACK_TO_FRONT_MAP[currentError.param]]: currentError.msg,
            ...errs,
          }),
          {}
        );
        for (const key in errors) {
          error[key].messege = errors[key];
          error[key].show = true;
        }
        console.log(error);
      }
    });
};

const handleChange = () => {
  error.email.show = data.email.includes("@") ? false : true;
  error.password.show = data.password === "" ? true : false;
  error.gender.show = data.gender === "" ? true : false;
  error.phone.show = /^((\+2)|2)?01[0125]\d{8}$/.test(data.phone)
    ? false
    : true;
  error.birthdate.show = data.birthdate === "" ? true : false;
  error.name.show = data.name === "" ? true : false;
  if (
    !(
      error.name.show ||
      error.birthdate.show ||
      error.phone.show ||
      error.gender.show ||
      error.password.show ||
      error.email.show
    )
  ) {
    enableSubmit = true;
  }
};
</script>

<style scoped>
</style>

