<template>
  <div class="bookings">
      <div class="head">
          <div class="column">
              Doctor Name
          </div>
          <div class="column">
              Address
          </div>
          <div class="column">
              Reservation Date
          </div>
            <div class="column">
                Cancel
            </div> 
      </div>
      <div v-for="(app, index) in data">
          <Appointment 
            @cancelApp="handelCancel"
            :idx="index"
            :key="index"
            :name="app.name"
            :place="app.place"
            :date="app.date"
        ></Appointment>
      </div>
      
  </div>
</template>

<script setup>
    import Appointment from '../modules/Appointments/Appointment.vue'
    import { inject, reactive, ref, onMounted } from "vue";
    import { useRouter } from "vue-router";
    import { useStore } from "vuex";
    const api = inject("api");
    const store = useStore();
    const router = useRouter();

    const data = ref(null)
     const handelCancel=(idx)=>{
        console.log(idx)
        let id = data[idx].id;
        api.appointments.delete(id).then(()=>{
            api.appointments.get().then((res)=>{
                data.value = res.data
            })
        })
    }
    onMounted(() => {
        api.appointments.get().then((res)=>{
            data.value = res.data
        })
    })

    // const data = [{
    //     name : "Ahmed",
    //     place:"Ahmed fdgfdgr dghedrtg dergergt ergter",
    //     date:"20/6/2021",
    //     status:"confirmed"
    //     },
    //     {
    //     name:"Ahmed",
    //     place:"Ahmed fdgfdgr dghedrtg dergergt ergter",
    //     date:"12/6/2021",
    //     status:"cancelled",
    //     },
    //     {
    //     name:"Ahmed",
    //     place:"Ahmed fdgfdgr dghedrtg dergergt ergter",
    //     date:"23/6/2022",
    //     status:"confirmed",
    //     },
    //     {
    //     name:"Ahmed",
    //     place:"Ahmed fdgfdgr dghedrtg dergergt ergter",
    //     date:"12/6/2021",
    //     status:"cancelled",
    //     },
    //     {
    //     name:"Ahmed",
    //     place:"Ahmed fdgfdgr dghedrtg dergergt ergter",
    //     date:"23/6/2022",
    //     status:"confirmed",
    //     },
    //     {
    //     name:"Ahmed",
    //     place:"Ahmed fdgfdgr dghedrtg dergergt ergter",
    //     date:"12/6/2021",
    //     status:"cancelled",
    //     },
    //     {
    //     name:"Ahmed",
    //     place:"Ahmed fdgfdgr dghedrtg dergergt ergter",
    //     date:"23/6/2022",
    //     status:"confirmed",
    //     },{
    //     name:"Ahmed",
    //     place:"Ahmed fdgfdgr dghedrtg dergergt ergter",
    //     date:"12/6/2021",
    //     status:"cancelled",
    //     },
    //     {
    //     name:"Ahmed",
    //     place:"Ahmed fdgfdgr dghedrtg dergergt ergter",
    //     date:"23/6/2022",
    //     status:"confirmed",
    //     }]
   
</script>

<style>

</style>