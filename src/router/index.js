import Vue from 'vue';
import VueRouter from 'vue-router';
import Signin from '../views/auth/Signin.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/auth/signin',
    name: 'Login',
    component: Signin,
    props: {
      icon: 'mdi-account',
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
