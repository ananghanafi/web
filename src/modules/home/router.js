const router = [
    {
        path: '/home',
        name: 'home',
        meta: {
            auth : true,
        },
        // component: () => import('./pages/Home'),
        redirect : {name : 'perencanaan'}
    }
]

export default router;