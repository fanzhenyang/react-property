import { lazy, Suspense } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import session from '@/utils/auth'
import Layout from '@/layout/layout'
import NProgress from 'nprogress'
NProgress.configure({ showSpinner: false })
const routers = [
  {
    ptah: '/login',
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
export default routers