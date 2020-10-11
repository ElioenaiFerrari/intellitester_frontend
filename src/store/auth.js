import AuthRepo from '../repo/auth';
import * as R from 'ramda';

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
        .then(
          R.ifElse(
            R.isNil,
            () => null,
            ({ data }) => commit('signin', data.token)
          )
        )
        .catch(console.log);
    },
  },
};
