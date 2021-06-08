<template>
  <div class="form">
    <h2 class="title">Contact Us</h2>
    <p class="subtitle">
      We will be happy to receive your inquiries and suggestions.
    </p>
    <Form @submit="onSubmit" :validation-schema="schema">
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
      ></FormGroup>
      <FormGroup
        required="true"
        label="Comments"
        type="text"
        name="comments"
        value=""
        input="textarea"
      ></FormGroup>
      <div class="wrapper">
        <button class="submit" type="submit">Send</button>
      </div>
    </Form>
  </div>
</template>

<script setup>
import FormGroup from "./FormGroup.vue";
import { Form } from "vee-validate";
import { flashMessage } from "@smartweb/vue-flash-message";
import { inject } from "vue";
import * as Yup from "yup";

const api = inject("api");

async function onSubmit(values, { resetForm, setErrors }) {
  try {
    const response = await api.contactUs.post(values, "", true);
    flashMessage.show({
      type: "success",
      title: "Feedback Sent Successfully",
      text: "Thank you for your time.",
    });
    resetForm(); //success
  } catch (err) {
    console.log(err.response.data);
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
}

const schema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().email().required().label("Email Address"),
  mobileNumber: Yup.string()
    .matches(/^((\+2)|2)?01[0125]\d{8}$/, "Mobile Number is invalid")
    .required()
    .label("Mobile Number"),
  comments: Yup.string().min(20).required().label("Comment"),
});
</script>

<style></style>
