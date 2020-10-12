import TestsRepo from '../repo/tests';

export default {
  namespaced: true,
  state: {
    tests: [],
  },

  getters: {
    tests: (state) => state.tests,
  },

  mutations: {
    index(state, payload) {
      state.tests = payload;
    },
  },

  actions: {
    index({ commit }, payload = null) {
      TestsRepo.index(payload.bot_id)
        .then((data) => commit('index', data))
        .catch(console.log);
    },
  },
};
