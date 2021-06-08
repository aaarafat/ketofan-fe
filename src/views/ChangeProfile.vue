<template>
  <div class="profile">
      <div class="title">Change Profile</div>
    <div class="formBody">
        
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
                label="Date of Birth"
                type="date"
                name="date"
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
import { inject, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const schema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().email().required().label("Email Address"),
  mobile: Yup.string()
    .matches(/^((\+2)|2)?01[0125]\d{8}$/, "Mobile Number is invalid")
    .required()
    .label("Mobile Number"),
    date:Yup.date().required().label("Birthdate")
});
const api = inject("api");
const store = useStore();
const router = useRouter();
const handleCancel = ()=>{
    router.push("/");
}
const onSubmit = async(values)=>{
// alert(JSON.stringify(values, null, 2));
let data = {
    name:values.name,
    gender:'M',
    dateOfBirth : values.date,
    mobileNumber : values.mobile 
}
console.log(data)
  const res = await api.profile.put({ ...data });
  if (res) {
    store.dispatch("setUser", res);
  }
}

</script>

<style></style>
