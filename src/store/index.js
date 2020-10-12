import Vue from 'vue';
import Vuex from 'vuex';
import auth from './auth';
import user from './user';
import bot from './bot';
import tests from './tests';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    user,
    bot,
    tests,
  },
});
