import { lazy } from 'react';
import Layout from '@/layout/layout'
const routersMap = [
  {
    path: '/login',
    name: 'Login',
    element: lazy(() => import('@/views/login/login')),
    props: {
      hidden: true
    }
  },
  // {
  //   path: '/404',
  //   component: lazy(() => import('@/views/error/404.vue')),
  //   props: {
  //     hidden: true
  //   }
  // },
  {
    path: '/',
    element: Layout,
    name: 'Layout',
    children: []
  }
]
export default routersMap