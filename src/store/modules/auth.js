const state = {
  isLogined: true,
  isAdmin: false,
  isDoctor: false,
  isUser: false,
  user: {},
};

const mutations = {
  SET_USER(state, user) {
    state.user = user;
    state.isLogined = true;
    state.isAdmin = user.role === "admin";
    state.isDoctor = user.role === "doctor";
    state.isUser = user.role === "patient";
  },
  REMOVE_USER(state) {
    state.user = {};
    state.isLogined = false;
    state.isAdmin = false;
    state.isDoctor = false;
    state.isUser = false;
  },
};

const actions = {
  setUser({ commit }, payload) {
    this.$auth.setUser(payload);
    const user = this.$auth.getUser();
    commit("SET_USER", user);
  },
  fetchUser({ commit }) {
    const user = this.$auth.getUser();
    if (user) commit("SET_USER", user);
  },
  removeUser({ commit }) {
    this.$auth.removeUser();
    commit("REMOVE_USER");
  },
};

const getters = {
  getUser(state) {
    return state.user;
  },
  isAdmin(state) {
    return state.isAdmin;
  },
  isDoctor(state) {
    return state.isDoctor;
  },
  isUser(state) {
    return state.isUser;
  },
  isLogined(state) {
    return state.isLogined;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
