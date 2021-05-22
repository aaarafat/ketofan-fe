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
          name="mobile"
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

<script>
import FormGroup from "./FormGroup.vue";
import { Form } from "vee-validate";
import * as Yup from "yup";
export default {
  name: "ContactForm",
  components: {
    FormGroup,
    Form,
  },
  setup() {
    function onSubmit(values) {
      alert(JSON.stringify(values, null, 2));
    }

    const schema = Yup.object().shape({
      name: Yup.string().required().label("Name"),
      email: Yup.string().email().required().label("Email Address"),
      mobile: Yup.string()
        .matches(/^((\+2)|2)?01[0125]\d{8}$/, "Mobile Number is invalid")
        .required()
        .label("Mobile Number"),
      comments: Yup.string().min(20).required().label("Comment"),
    });

    return {
      onSubmit,
      schema,
    };
  },
};
</script>

<style></style>
