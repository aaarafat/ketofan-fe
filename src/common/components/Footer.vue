<template>
  <div class="footer">
    <div class="footerSub">
      <div class="footerElement">
        <p id="footerTitle">Ketofan</p>
        <router-link to="/about"><div>About Us</div></router-link>
        <router-link to="/our-team">Our Team</router-link>
      </div>

      <div class="footerElement">
        <p class="footerTitles">Search By</p>
        <router-link to="/speciality">Speciality</router-link>
        <router-link to="/area">Area</router-link>
        <router-link to="/insurance">Insurance</router-link>
      </div>
    </div>
    <div class="footerSub">
      <div class="footerElement">
        <p class="footerTitles">Are You A Doctor</p>
        <router-link to="">Join Vezeeta Doctors</router-link>
      </div>

      <div class="footerElement">
        <p class="footerTitles">Need Help?</p>
        <router-link to="">Contact US</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
//to-do
//rerouting to login using token
</script>
