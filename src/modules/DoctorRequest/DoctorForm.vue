
<template>
  <div class="title-container">
    <h2 class="title">Enter your personal info</h2>
    <span class="details">
      This is your personal account information, you will be prompted next for
      your clinic/hospital information.
    </span>
  </div>
  <Form class="form-container" @submit="onSubmit" :validation-schema="schema">
    <div class="flex-container">
      <!-- <div style="display: flex; justify-content: center">
        <UploadPhoto name="doctor-picture" />
      </div> -->
      <div class="fields-container">
        <div class="name-field">
          <FormGroup
            required="true"
            label="First Name"
            type="text"
            name="first-name"
            value=""
            placeholder="First Name"
            icon="person_outline"
          />
          <FormGroup
            required="true"
            label="Last Name"
            type="text"
            name="last-name"
            value=""
            placeholder="Last Name"
          />
        </div>
        <FormGroup
          required="true"
          label="Mobile Number"
          type="phone"
          name="mobile"
          value=""
          placeholder="Mobile Number"
          icon="phone"
        />
        <!-- Specialty drop down -->
        <DropDown
          required="true"
          name="specialty"
          label="Specialty"
          icon="biotech"
          placeholder="Specialty"
          :options="store.getters.allSpecialties"
        />
        <FormGroup
          required="true"
          label="Email Address"
          type="email"
          name="email"
          value=""
          placeholder="Email Address"
          icon="email"
        ></FormGroup>
        <FormGroup
          required="true"
          label="Passowrd"
          type="password"
          name="password"
          value=""
          placeholder="Password"
          icon="lock_open"
        ></FormGroup>
        <UploadPhoto
          name="doctor-picture"
          label="Doctor's Picture"
          required="true"
        />
        <UploadPhoto
          name="practice-license"
          label="Practice License ID"
          required="true"
        />
      </div>
    </div>
    <div class="btn-container">
      <button type="submit" class="btn-submit">Send</button>
    </div>
  </Form>
</template>

<script setup>
import FormGroup from "./FormGroup.vue";
import UploadPhoto from "./UploadPhoto.vue";
import DropDown from "./DropDown.vue";
import { useStore } from "vuex";
import { Form } from "vee-validate";
import * as Yup from "yup";

const SUPPORTED_FILE = ["image/jpeg", "image/jpg", "image/png"];
const store = useStore();

function onSubmit(values) {
  alert(JSON.stringify(values, null, 2));
}

const schema = Yup.object().shape({
  "first-name": Yup.string().required().label("First Name"),
  "last-name": Yup.string().required().label("Last Name"),
  email: Yup.string().email().required().label("Email Address"),
  mobile: Yup.string()
    .matches(/^((\+2)|2)?01[0125]\d{8}$/, "Mobile Number is invalid")
    .required()
    .label("Mobile Number"),
  specialty: Yup.string()
    .required()
    .oneOf(store.getters.allSpecialties, "Select a speciality"),
  password: Yup.string().required().min(8).label("Password"),
  "doctor-picture": Yup.mixed().required("Photo required")
    .test(
      "SupportedFile",
      "Only files with these extensions are allowed: jpg, jpeg, png",
      (value) => {
        if (!value || !value.length) return true; // attachment is optional
        return SUPPORTED_FILE.includes(value[0].type);
      }
    )
    .test("fileSize", "The file is too large", (value) => {
      if (!value || !value.length) return true; // attachment is optional
      return value[0].size <= 2097152; //2 mb
    }),
  "practice-license": Yup.mixed().required("Practice license required")
    .test(
      "SupportedFile",
      "Only files with these extensions are allowed: jpg, jpeg, png",
      (value) => {
        if (!value || !value.length) return true; // attachment is optional
        return SUPPORTED_FILE.includes(value[0].type);
      }
    )
    .test("fileSize", "The file is too large", (value) => {
      if (!value || !value.length) return true; // attachment is optional
      return value[0].size <= 2097152; //2 mb
    }),
});
</script>