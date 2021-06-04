<template>
  <div class="home-header">
    <div class="content">
      <div class="bg">
        <img src="../../assets/img/homebg.jpg" />
      </div>
      <div class="body">
        <h1 class="title">Better Healthcare for a Better Life</h1>
        <div class="paragraph">
          Book online or call<span class="material-icons call"> call </span>
          <strong>16676</strong>
        </div>
      </div>
      <div class="search-box">
        <div class="head">
          <span class="material-icons"> event_available </span>
          <div class="title">
            <h3>Book a doctor</h3>
            <span>Examination or procedure</span>
          </div>
        </div>
        <div class="search-wrapper">
          <HeaderSearchBar />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import HeaderSearchBar from "../Header/HeaderSearchBar.vue";
</script>

<style></style>
