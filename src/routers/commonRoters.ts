import { lazy } from 'react';

export const commonRoters = [
  {
    path: '/login',
    name: 'Login',
    element: lazy(() => import('@/views/login/login'))
  },
  {
    path: '/404',
    name: 'NotFound',
    element: lazy(() => import('@/views/notFound/notFound')),
    hide: true
  }
]

