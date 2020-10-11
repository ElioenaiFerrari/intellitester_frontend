import Vue from 'vue';
import VueRouter from 'vue-router';
import Auth from '../views/Auth.vue';
import Intellitester from '../views/Intellitester.vue';
import AuthUtil from '../utils/auth';

Vue.use(VueRouter);

const routes = [
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
    props: {
      icon: 'mdi-account',
      visible: false,
    },
  },
  {
    path: '/app/intellitester',
    name: 'Intellitester',
    component: Intellitester,
    props: {
      icon: 'mdi-robot',
      visible: true,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name !== 'Auth' && !AuthUtil.get_token()) {
    return next({ name: 'Auth' });
  } else next();
});

export default router;
