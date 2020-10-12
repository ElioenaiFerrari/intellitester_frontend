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
    index({ commit }, { bot_id }) {
      TestsRepo.index(bot_id)
        .then((data) => commit('index', data))
        .catch(console.log);
    },

    update(_, { bot_id, test_id, asks }) {
      TestsRepo.update(bot_id, { test_id, asks })
        .then(() => window.location.reload())
        .catch(console.log);
    },
  },
};
