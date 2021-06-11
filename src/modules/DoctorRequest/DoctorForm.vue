
<template>
  <div class="title-container">
    <h2 class="title">Enter your personal info</h2>
    <span class="details">
      This is your personal account information, We will review your request.<br />
      In case of acceptance we are going to send your password by email.
    </span>
  </div>
  <Form class="form-container" @submit="onSubmit" :validation-schema="schema" ref="formRef">
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
        <DropDown
          required="true"
          name="specialty"
          label="Specialty"
          icon="biotech"
          placeholder="Specialty"
          :options="specialities"
          valueProp="id"
          labelProp="name"
        />
        <DropDown
          required="true"
          name="area"
          label="Area"
          icon="place"
          placeholder="City"
          :options="cities"
          valueProp="id"
          labelProp="name"
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
import { inject, ref, onMounted } from "vue";
import FormGroup from "./FormGroup.vue";
import UploadPhoto from "./UploadPhoto.vue";
import DropDown from "./DropDown.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { Form } from "vee-validate";
import { flashMessage } from "@smartweb/vue-flash-message";
import * as Yup from "yup";

const formRef = ref(null);

const api = inject("api");
const SUPPORTED_FILE = ["image/jpeg", "image/jpg", "image/png"];
const BACK_TO_FRONT_MAP = {
  profileImage: "doctor-picture",
  document: "practice-license",
  name: "first-name",
  email: "email",
  bio: "bio",
  specializationId: "specialty",
  areaId: "area",
  mobileNumber: "mobile",
};
const store = useStore();
const router = useRouter();

async function onSubmit(values, { resetForm, setErrors }) {
  let formData = new FormData();
  formData.append("profileImage", values["doctor-picture"][0]);
  formData.append("document", values["practice-license"][0]);
  formData.append("name", values["first-name"] + " " + values["last-name"]);
  formData.append("email", values.email);
  formData.append("gender", "M");
  formData.append("dateOfBirth", "1999-10-19");
  formData.append("bio", values.bio);
  formData.append("specializationId", values.specialty.id);
  formData.append("areaId", values.area.id);
  formData.append("mobileNumber", values.mobile);
  try {
    const options = {
      throwError: true,
      isLoading: true,
    };
    const response = await api.doctorsRequests.post(formData, options);
    router.push("/");
    flashMessage.show({
      type: "success",
      title: "Request Sent Successfully",
      text: "Your request is being reviewed, Thanks",
    });
    resetForm(); //success
  } catch (err) {
    console.log(err);
    console.log(err.response.data);
    if (err.response.data.status === 400) {
      const errors = err.response.data.errors.reduce(
        (errs, currentError) => ({
          [BACK_TO_FRONT_MAP[currentError.param]]: currentError.msg,
          ...errs,
        }),
        {}
      );
      console.log(errors);
      setErrors(errors);
    } else {
      flashMessage.show({
        type: "error",
        title: "Something Wrong Happened.",
        text: "Please try again later.",
      });
    }
  }
}

const specialities = ref([]);
const cities = ref([]);
onMounted(() => {
  store.dispatch("fetchSpecialties").then(() => {
    specialities.value = store.getters.allSpecialties;
    console.log(store.getters.allSpecialties);
  });
  store.dispatch("fetchCities").then(() => {
    cities.value = store.getters.allCities;
  });
});

const schema = Yup.object().shape({
  "first-name": Yup.string().required().label("First Name"),
  "last-name": Yup.string().required().label("Last Name"),
  email: Yup.string().email().required().label("Email Address"),
  bio: Yup.string().required().label("Bio"),
  mobile: Yup.string()
    .matches(/^((\+2)|2)?01[0125]\d{8}$/, "Mobile Number is invalid")
    .required()
    .label("Mobile Number"),
  specialty: Yup.object()
    .shape({
      id: Yup.number(),
      name: Yup.string(),
    })
    .nullable()
    .test(
      "SelectedSpecialty",
      "Select a speciality",
      (value) =>
        value && store.getters.allSpecialties.find((d) => value.id === d.id)
    ),
  area: Yup.object()
    .shape({
      id: Yup.number(),
      name: Yup.string(),
    })
    .nullable()
    .test(
      "SelectedArea",
      "Select area",
      (value) => value && store.getters.allCities.find((d) => value.id === d.id)
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