import AuthRepo from '../repo/auth';
import * as R from 'ramda';
import router from '../router';

export default {
  namespaced: true,
  state: {},
  mutations: {
    signin(_, payload) {
      sessionStorage.setItem('token', payload);
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
        .then(() => router.push('/app/intellistester'))
        .catch(console.log);
    },
  },
};
