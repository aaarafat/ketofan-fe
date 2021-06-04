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

      <div class="choose-from">
        <ChooseFrom :data="specialties" type="specialties" />
        <ChooseFrom :data="cities" type="cities" />
      </div>

      <div class="details-wrapper">
        <div class="details">
          <div class="detail">
            <span class="material-icons"> volunteer_activism </span>
            <div>
              <h2>All your healthcare needs</h2>
              <span>
                Search and book a clinic visit, home visit, or a
                teleconsultation. Order your medicine and book a service or
                operation.
              </span>
            </div>
          </div>
          <div class="detail">
            <span class="material-icons"> how_to_reg </span>
            <div>
              <h2>Verified patient reviews</h2>
              <span>
                Doctor ratings are from patients who booked and visited the
                doctor through Vezeeta.
              </span>
            </div>
          </div>
          <div class="detail">
            <span class="material-icons"> event_available </span>
            <div>
              <h2>Your booking is confirmed</h2>
              <span>
                Your booking is automatically confirmed, as the doctor specifies
                his working hours and is notified of the booking details.
              </span>
            </div>
          </div>
          <div class="detail">
            <span class="material-icons"> gpp_good </span>
            <div>
              <h2>Book for free, and pay in the clinic</h2>
              <span>
                The consultation fees stated on Vezeeta are the actual doctor's
                fees with no extra charges.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { computed, inject, onMounted, ref } from "vue";
import { useStore } from "vuex";
import HomeHeader from "../modules/Home/HomeHeader.vue";
import ChooseTopSpecialties from "../modules/Home/ChooseTopSpecialties.vue";
import ChooseFrom from "../modules/Home/ChooseFrom.vue";

const api = inject("api");
const store = useStore();
const specialties = ref(null);
const cities = ref(null);
onMounted(() => {
  console.log(import.meta.env.MODE, import.meta.env.VITE_ROOT_API);
  var data = { email: "admin1@gmail.com", password: "12341234" };
  const token = "";
  axios
    .post("http://localhost:9876/api/v1/auth/signin", data)
    .then((res) => {
      console.log(res.data.token);

      return axios.get(
        `http://localhost:9876/api/v1/contactUs?limit=3&offset=0`,
        config
      );
    })
    .then((res2) => {
      console.log(res2.data);
    })
    .catch((err) => {
      console.log(err.response);
    });
  store.dispatch("fetchSpecialties").then(() => {
    specialties.value = store.getters.allSpecialties.slice(0, 9);
  });
  store.dispatch("fetchCities").then(() => {
    cities.value = store.getters.allCities.slice(0, 9);
  });
});
</script>
