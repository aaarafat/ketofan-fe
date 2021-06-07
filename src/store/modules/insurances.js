const state = {
  insurances: [],
  hasInsurances: false,
};

const mutations = {
  ADD_INSURANCE(state, payload) {
    state.insurances.push(payload);
  },
  SET_INSURANCES(state, insurances) {
    state.insurances = insurances;
    state.hasInsurances = true;
  },
};

const actions = {
  addInsurances(context, s) {
    context.commit("ADD_INSURANCE", s);
  },
  async fetchInsurances({ commit }) {
    if (state.hasInsurances) {
      return;
    } else {
      let insurances = await this.$api.insurances.fetch();
      insurances = insurances.insurances;
      insurances = insurances.map((s) => s.name);
      state.insurances = insurances;
      commit("SET_INSURANCES", insurances);
    }
  },
};

const getters = {
  allInsurances(state) {
    return state.insurances;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
