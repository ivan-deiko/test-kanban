import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');

  if (!token && to.name !== 'autorization') {
    if (to.name === 'signup') {
      next();
    } else next('/autorization/');
  } else if (token&& to.path.includes('autorization')) {
      next('/');
  } else {
      next();
  } 
})

export default router;
