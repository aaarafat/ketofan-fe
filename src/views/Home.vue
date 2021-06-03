<template>
  <div class="home">
    <HomeHeader />
    <div class="body">
      <div class="corona-wrapper">
        <div class="corona">
          <div class="img">
            <img src="../assets/img/moh.png" />
          </div>
          <div class="content">
            <h2>Corona Symtomps?</h2>
            <span>
              You can ask and consult an internist about corona symptoms through
              a free call, sponsored by the Ministry of Health and Population,
              from 8 am to 12 am.
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, inject, onMounted, ref } from "vue";
import { useStore } from "vuex";
import HomeHeader from "../modules/Home/HomeHeader.vue";

const api = inject("api");
const store = useStore();
const specialties = ref(null);
onMounted(() => {
  store.dispatch("fetchSpecialties").then(() => {
    specialties.value = store.getters.allSpecialties;
  });
});
</script>
