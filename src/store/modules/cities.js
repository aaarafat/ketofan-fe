const state = {
  cities: [],
  hasCities: false,
};

const mutations = {
  ADD_CITY(state, payload) {
    state.cities.push(payload);
  },
  SET_CITIES(state, cities) {
    state.cities = cities;
    state.hasCities = true;
  },
};

const actions = {
  addCity(context, s) {
    context.commit("ADD_CITY", s);
  },
  async fetchCities({ commit }) {
    if (state.hasCities) {
      return;
    } else {
      let cities = await this.$api.cities.fetch();
      cities = cities.areas;
      cities = cities.map((s) => s.name);
      state.cities = cities;
      commit("SET_CITIES", cities);
    }
  },
};

const getters = {
  allCities(state) {
    return state.cities;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
