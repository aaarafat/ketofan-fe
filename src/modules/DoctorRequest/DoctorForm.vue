
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
        <DropDown
          required="true"
          name="area"
          label="Area"
          icon="place"
          placeholder="City"
          :options="store.getters.allCities"
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
          label="Bio"
          input="textarea"
          type="text"
          name="bio"
          value=""
          placeholder="Bio"
          icon="article"
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
import { inject } from "vue";
import FormGroup from "./FormGroup.vue";
import UploadPhoto from "./UploadPhoto.vue";
import DropDown from "./DropDown.vue";
import { useStore } from "vuex";
import { Form } from "vee-validate";
import * as Yup from "yup";

const api = inject("api");
const SUPPORTED_FILE = ["image/jpeg", "image/jpg", "image/png"];
const store = useStore();

function onSubmit(values) {
  let formData = new FormData();
  formData.append("profileImage", values["doctor-picture"][0]);
  formData.append("document", values["practice-license"][0]);
  formData.append("name", values["first-name"] + " " + values["last-name"]);
  formData.append("email", values.email);
  formData.append("gender", "M");
  formData.append("dateOfBirth", "1999-10-19");
  formData.append("bio", values.bio);
  formData.append("specializationId", values.specialty);
  formData.append("areaId", "1");
  formData.append("mobileNumber", values.mobile);

  api.post(formData);
}

const schema = Yup.object().shape({
  "first-name": Yup.string().required().label("First Name"),
  "last-name": Yup.string().required().label("Last Name"),
  email: Yup.string().email().required().label("Email Address"),
  bio: Yup.string().required().label("Bio"),
  mobile: Yup.string()
    .matches(/^((\+2)|2)?01[0125]\d{8}$/, "Mobile Number is invalid")
    .required()
    .label("Mobile Number"),
  specialty: Yup.string()
    .required()
    .test("SelectedSpecialty", "Select a speciality", (value) =>
      store.getters.allSpecialties.find((d) => value === d)
    ),
  area: Yup.string()
    .required()
    .test("SelectedArea", "Select area", (value) =>
      store.getters.allCities.find((d) => value === d)
    ),
  "doctor-picture": Yup.mixed()
    .required("Photo required")
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
  "practice-license": Yup.mixed()
    .required("Practice license required")
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