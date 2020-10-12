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

    store(_, { bot_id, expected_node }) {
      TestsRepo.store(bot_id, { expected_node })
        .then(() => window.location.reload())
        .catch(console.log);
    },

    destroy(_, { bot_id, test_id }) {
      TestsRepo.destroy(bot_id, { test_id })
        .then(() => window.location.reload())
        .catch(console.log);
    },
  },
};
