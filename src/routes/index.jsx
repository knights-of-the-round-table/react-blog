import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Signup from '@/pages/Signup'
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
        path: '/signup',
        exact: true,
        component: Signup
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
