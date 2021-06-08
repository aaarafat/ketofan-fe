const state = {
  doctorsRequests: [],
  hasDoctorsRequests: false,
};

const mutations = {
  REMOVE_DOCTOR_REQUEST(state, id) {
    state.doctorsRequests = state.doctorsRequests.filter((f) => f.id !== id);
  },
  SET_DOCTORS_REQUESTS(state, doctorsRequests) {
    state.doctorsRequests = doctorsRequests;
    state.hasDoctorsRequests = true;
  },
};

const actions = {
  async fetchDoctorsRequests({ commit }) {
    if (state.hasDoctorsRequests) {
      return;
    } else {
      let doctorsRequests = await this.$api.doctorsRequests.fetch(
        this.$auth.getToken()
      );
      doctorsRequests = doctorsRequests.doctorRequests;
      state.doctorsRequests = doctorsRequests;
      commit("SET_DOCTORS_REQUESTS", doctorsRequests);
    }
  },
  async removeFeedback({ commit }, id) {
    this.$api.contactUs.delete(id, this.$auth.getToken()).then(() => {
      commit("REMOVE_DOCTOR_REQUEST", id);
    });
  },
};

const getters = {
  allDoctorsRequests(state) {
    return state.doctorsRequests;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
