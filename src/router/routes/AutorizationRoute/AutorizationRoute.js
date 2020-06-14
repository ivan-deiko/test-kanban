import Autorization from '@/views/Autorization/Autorization';

export default {
  path: '/autorization',
  component: Autorization,
  children: [
    { 
      name: 'autorization',
      path: '',
      component: () => import('../../../views/Autorization/NestedViews/LoginView.vue')
    },
    {
      name: 'signup',
      path: 'signup',
      component: () => import('../../../views/Autorization/NestedViews/RegistrationView.vue')
    },
  ]
};
