import TestsRepo from '../repo/tests';

export default {
  namespaced: true,
  state: {
    tests: [],
    store_loading: false,
    update_loading: false,
  },

  getters: {
    tests: (state) => state.tests,
    store_loading: (state) => state.store_loading,
    update_loading: (state) => state.update_loading,
  },

  mutations: {
    store_loading(state, value) {
      state.store_loading = value;
    },

    update_loading(state, value) {
      state.update_loading = value;
    },

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

    update({ dispatch, commit }, { bot_id, test_id, asks }) {
      commit('update_loading', true);

      TestsRepo.update(bot_id, { test_id, asks })
        .then(() => {
          commit('update_loading', false);
          dispatch('index', { bot_id });
        })
        .catch(console.log);
    },

    store({ dispatch, commit }, { bot_id, expected_node }) {
      commit('store_loading', true);

      TestsRepo.store(bot_id, { expected_node })
        .then(() => {
          commit('store_loading', false);
          dispatch('index', { bot_id });
        })
        .catch(console.log);
    },

    destroy({ dispatch }, { bot_id, test_id }) {
      TestsRepo.destroy(bot_id, { test_id })
        .then(() => dispatch('index', { bot_id }))
        .catch(console.log);
    },
  },
};
