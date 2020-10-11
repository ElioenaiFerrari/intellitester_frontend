import UserRepo from '../repo/user';
import router from '../router';

export default {
  namespaced: true,
  state: {
    current_user: {},
  },

  getters: {
    current_user: (state) => state.current_user,
  },

  mutations: {
    set_current_user(state, payload) {
      console.log(payload);
      state.current_user = payload;
    },
  },
  actions: {
    set_current_user({ commit }) {
      UserRepo.current()
        .then(({ data }) => commit('set_current_user', data))
        .then(() => router.push('/app/intellitester'))
        .catch(console.log);
    },
  },
};
