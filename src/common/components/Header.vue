<template>
  <div class="header">
    <div class="content">
      <div class="bg">
        <img src="../../assets/img/headerbg.png" />
      </div>
      <div class="body">
        <h2 class="title">Book with The best Doctor</h2>
        <div class="paragraph">
          Book online or call<span class="material-icons call"> call </span>
          <strong>16676</strong>
        </div>
        <p class="paragraph">
          15000 Doctors - 9000 Professors and Consultants <br />
          More than 40 Specialties
        </p>
      </div>
      <HeaderSearchBar />
    </div>
  </div>
</template>

<script setup>
import HeaderSearchBar from "../../modules/Header/HeaderSearchBar.vue";
</script>
