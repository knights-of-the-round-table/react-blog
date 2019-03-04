import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Setting from '@/pages/Setting'
import Press from '@/pages/Press'
import Register from '@/pages/Register'
// import NotFound from '@/pages/NotFound'

export default [
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },
    // {
    //     path: '/*',
    //     component: NotFound
    // },
    {
        path: '/',
        component: Home,
        routes: [
            {
                path: '/setting',
                component: Setting
            },
            {
                path: '/press',
                component: Press
            }
        ]
    },
]
