import { createStore } from "vuex";
//import about from "./modules/about";
import specialties from "./modules/specialties";
import cities from "./modules/cities";
import insurances from "./modules/insurances";
import auth from "./modules/auth";
import storePlugins from "../plugins/storePlugins";
const state = {};

const mutations = {};

const actions = {};

const getters = {};
export default createStore({
  state,
  getters,
  actions,
  mutations,
  modules: { auth, specialties, cities, insurances },
  plugins: [storePlugins],
});
