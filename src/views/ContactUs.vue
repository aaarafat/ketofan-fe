<template>
  <div class="contact-us">
    <ContactForm></ContactForm>
    <Info></Info>
  </div>
</template>

<script>
import ContactForm from "../modules/ContactUs/ContactForm.vue";
import Info from "../modules/ContactUs/Info.vue";
export default {
  components: {
    ContactForm,
    Info
  },
};
</script>
