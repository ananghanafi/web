// import store from '../../store'
const router = [
    {
        path: '/login',
        name: 'login',
        meta: {},
        component: () => import('./pages/Login'),
        beforeEnter: (to, from, next) => {
            // // jika sudah login, maka redirect ke home
            // if (to.name == 'login' && store.getters['user/token'])
            //     next({ name: 'home' })
            // else
                next()
        }

    }
]

export default router;