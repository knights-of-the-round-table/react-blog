import { lazy } from 'react'

export default [
    {
        path: '/dashboard',
        component: lazy(() => import('@/pages/Dashboard'))
    }
]
