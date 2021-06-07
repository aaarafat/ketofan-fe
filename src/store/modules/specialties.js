const state = {
  specialties: [],
  hasSpecialties: false,
};

const mutations = {
  ADD_SPECIALTY(state, payload) {
    state.specialties.push(payload);
  },
  SET_SPECIALTIES(state, specialties) {
    state.specialties = specialties;
    state.hasSpecialties = true;
  },
};

const actions = {
  addSpecialty(context, s) {
    context.commit("ADD_SPECIALTY", s);
  },
  async fetchSpecialties({ commit }) {
    if (state.hasSpecialties) {
      return;
    } else {
      let specialties = await this.$api.specialties.fetch();
      specialties = specialties.specializations;
      specialties = specialties.map((s) => s.name);
      state.specialties = specialties;
      commit("SET_SPECIALTIES", specialties);
    }
  },
};

const getters = {
  allSpecialties(state) {
    return state.specialties;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
