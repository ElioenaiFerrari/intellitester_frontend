import UserRepo from '../repo/user';

export default {
  namespaced: true,
  state: {
    current_user: null,
  },
  mutations: {
    set_current_user(state, payload) {
      state.current_user = payload;
    },
  },
  actions: {
    set_current_user({ commit }) {
      UserRepo.current()
        .then((user) => commit('set_current_user', user))
        .catch(console.log);
    },
  },
};
