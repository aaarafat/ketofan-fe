import { createStore } from "vuex";
//import about from "./modules/about";
import specialties from "./modules/specialties";
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
  modules: { specialties },
  plugins: [storePlugins],
});
