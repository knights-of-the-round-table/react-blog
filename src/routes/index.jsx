import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import NotFound from '@/pages/NotFound'

import dashboard from './dashboard'
import press from './press'
import setting from './setting'
import user from './user'

export default [
    {
        path: '/login',
        exact: true,
        component: Login
    },
    {
        path: '/register',
        exact: true,
        component: Register
    },
    {
        path: '/',
        component: Home,
        routes: [
            ...dashboard,
            press,
            setting,
            ...user
        ]
    },
    {
        path: '/*',
        component: NotFound
    },
]
