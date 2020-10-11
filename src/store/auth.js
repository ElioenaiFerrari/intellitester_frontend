import AuthRepo from '../repo/auth';

export default {
  namespaced: true,
  state: {},
  mutations: {
    signin(_, payload) {
      localStorage.setItem('token', payload);
    },
  },
  actions: {
    signin({ commit }, payload) {
      AuthRepo.signin(payload)
        .then((payload) => commit('signin', payload))
        .catch(console.log);
    },
  },
};
