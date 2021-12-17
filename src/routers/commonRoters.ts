import { lazy } from 'react';
export const commonRoters = [
  {
    path: '/login',
    name: 'Login',
    element: lazy(() => import('@/views/login/login'))
  }
]

