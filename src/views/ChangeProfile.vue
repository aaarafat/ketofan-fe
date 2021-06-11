<template>
  <div class="profile">
    <div class="title">Change Profile</div>
    <div class="formBody">
      <Form
        @submit="onSubmit"
        :validation-schema="schema"
        ref="formRef"
        :initial-values="user.user"
      >
        <FormGroup
          required="true"
          label="Your Name"
          type="text"
          name="name"
          value=""
          placeholder="First name and Last name"
        ></FormGroup>
        <FormGroup
          required="true"
          label="Mobile Number"
          type="phone"
          name="mobileNumber"
          value=""
          placeholder="Mobile Number"
        ></FormGroup>
        <FormGroup
          required="true"
          label="Email Address"
          type="email"
          name="email"
          value=""
          placeholder="example@domain.com"
          disabled="true"
        ></FormGroup>
        <FormGroup
          required="true"
          label="Date of Birth"
          type="date"
          name="dateOfBirth"
          value=""
        ></FormGroup>
        <div class="wrapper">
          <button class="submit" type="submit">Send</button>
          <button class="caancel" @click.prevent="handleCancel">Cancel</button>
        </div>
      </Form>
    </div>
  </div>
</template>

<script setup>
import FormGroup from "../modules/ChangeProfile/FormGroup.vue";
import { Form } from "vee-validate";
import * as Yup from "yup";
import { inject, reactive, ref, onMounted } from "vue";
import { flashMessage } from "@smartweb/vue-flash-message";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const schema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().email().required().label("Email Address"),
  mobileNumber: Yup.string()
    .matches(/^((\+2)|2)?01[0125]\d{8}$/, "Mobile Number is invalid")
    .required()
    .label("Mobile Number"),
  dateOfBirth: Yup.date().required().label("Birthdate"),
});

const api = inject("api");
const store = useStore();
const router = useRouter();
const user = ref({});

onMounted(async () => {
  user.value = await api.profile.get();
});

const handleCancel = () => {
  router.push("/");
};

const onSubmit = async (values, { setErrors }) => {
  const data = {
    name: values.name,
    gender: "M",
    dateOfBirth: values.dateOfBirth,
    mobileNumber: values.mobileNumber,
  };
  console.log(data);
  try {
    const options = {
      throwError: true,
      isLoading: true
    };
    const res = await api.profile.put(user.id, { ...data }, "", options);
    store.dispatch("setUser", res);
    console.log(res);
    if (res) {
      store.dispatch("setUser", res);
    }
    flashMessage.show({
      type: "success",
      title: "Updated Successfully",
    });
  } catch (err) {
    console.log(err);
    if (err.response.data.status === 400) {
      const errors = err.response.data.errors.reduce(
        (errs, currentError) => ({
          [currentError.param]: currentError.msg,
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
};
</script>

<style></style>
