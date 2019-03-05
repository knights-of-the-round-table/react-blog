import { lazy } from 'react'

export default [
    {
        path: '/user/list',
        component: lazy(() => import('@/pages/User/List'))
    },
    {
        path: '/user/create',
        component: lazy(() => import('@/pages/User/Create'))

    },
    {
        path: '/user/edit',
        component: lazy(() => import('@/pages/User/Edit'))

    },
    {
        path: '/user/:id',
        component: lazy(() => import('@/pages/User/Detail'))

    }
]