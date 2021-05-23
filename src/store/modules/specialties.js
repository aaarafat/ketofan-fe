const state = {
  specialties: ["Dermatology", "Dentistry", "Psychiatry"],
};

const mutations = {
  ADD_SPECIALTY(state, payload) {
    state.specialties.push(payload);
  },
};

const actions = {
  addSpecialty(context, s) {
    context.commit("ADD_SPECIALTY", s);
  },
};

const getters = {
  getSpecialties(state) {
    return state.specialties;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
