import AuthRepo from '../repo/auth';
import * as R from 'ramda';

export default {
  namespaced: true,
  state: {},
  mutations: {
    signin(_, payload) {
      sessionStorage.setItem('token', payload);
    },
  },
  actions: {
    signin({ commit, dispatch }, payload) {
      AuthRepo.signin(payload)
        .then(
          R.ifElse(
            R.isNil,
            () => null,
            ({ token }) => commit('signin', token)
          )
        )
        .then(() => dispatch('user/set_current_user', null, { root: true }))
        .catch(console.log);
    },
  },
};
