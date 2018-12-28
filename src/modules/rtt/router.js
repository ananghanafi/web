const mod_name = 'rtt'
const rootp = `/${mod_name}`
const router = [
    {
        path: rootp,
        name: mod_name,
        meta: {
            auth : true
        },
        component: () => import('./pages/PetaRTT'),
        // redirect : {name:'bor_tim'}
    },
]

export default router;