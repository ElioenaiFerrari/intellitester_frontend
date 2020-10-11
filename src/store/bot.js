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
  },
};
