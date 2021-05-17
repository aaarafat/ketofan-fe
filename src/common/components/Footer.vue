<template>
  <div class="footer">
    <div class="footerSub">

      <div class="footerElement">
        <!-- صورة عرفات يعملها -->
        <p id="footerTitle">Ketofan</p>
        <router-link to="about"><div>About Us</div></router-link>
        <router-link to="our-team">Our Team</router-link>
        <router-link to="press">Press</router-link>
      </div>

      <div class="footerElement">
        <p class="footerTitles">Search By</p>
        <router-link to="speciality">Speciality</router-link>
        <router-link to="area">Area</router-link>
        <router-link to="insurance">Insurance</router-link>
        <router-link to="hospital">Hospital</router-link>
        <router-link to="center">Center</router-link>
      </div>

    </div>
    <div class="footerSub">

      <div class="footerElement">
        <p class="footerTitles">Are You A Doctor</p>
        <router-link to="join-us">Join Vezeeta Doctors</router-link>
      </div>

      <div class="footerElement">
        <p class="footerTitles">Need Help?</p>
        <router-link to="contact-us">Contact US</router-link>
        <router-link to="terms">Terms of Use</router-link>
        <router-link to="privacy-policy">Privacy Policy</router-link>
        <router-link to="doctors-privacy-policy">Doctors Privacy Policy</router-link>
      </div>
      
    </div>
  </div>
</template>

<script setup>
//to-do
//rerouting to login using token
</script>
