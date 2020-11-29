import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/', // the same with parent route
    name: 'ReportGeneration',
    component: () => import(/* webpackChunkName: "about" */ '../views/ReportGeneration.vue'),
  },
  {
    path: '/indexing',
    name: 'ProfileIndexing',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProfileIndexing.vue'),
  },
  {
    path: '/about',
    name: 'AboutUs',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutUs.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
// component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
