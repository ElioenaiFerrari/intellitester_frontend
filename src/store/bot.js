import BotRepo from '../repo/bot';

export default {
  namespaced: true,
  state: {
    bots: [],
  },

  getters: {
    bots: (state) => state.bots,
  },

  mutations: {
    index(state, payload) {
      state.bots = payload;
    },
  },

  actions: {
    index({ commit }, payload = null) {
      BotRepo.index(payload)
        .then((data) => commit('index', data))
        .catch(console.log);
    },

    store({ dispatch }, payload = null) {
      BotRepo.store(payload)
        .then(() => dispatch('index'))
        .catch(console.log);
    },

    destroy({ dispatch }, { bot_id }) {
      BotRepo.destroy(bot_id)
        .then(() => dispatch('index'))
        .catch(console.log);
    },
  },
};
