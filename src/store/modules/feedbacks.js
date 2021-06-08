const state = {
  feedbacks: [],
  hasFeedbacks: false,
};

const mutations = {
  REMOVE_FEEDBACK(state, id) {
    state.feedbacks = state.feedbacks.filter((f) => f.id !== id);
  },
  SET_FEEDBACKS(state, feedbacks) {
    state.feedbacks = feedbacks;
    state.hasFeedbacks = true;
  },
};

const actions = {
  addSpecialty(context, s) {
    context.commit("ADD_SPECIALTY", s);
  },
  async fetchFeedbacks({ commit }) {
    if (state.hasFeedbacks) {
      return;
    } else {
      let feedbacks = await this.$api.contactUs.fetch();
      feedbacks = feedbacks.contactUs;
      state.feedbacks = feedbacks;
      commit("SET_FEEDBACKS", feedbacks);
    }
  },
  async removeFeedback({ commit }, id) {
    this.$api.contactUs.delete(id).then(() => {
      commit("REMOVE_FEEDBACK", id);
    });
  },
};

const getters = {
  allFeedbacks(state) {
    return state.feedbacks;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
