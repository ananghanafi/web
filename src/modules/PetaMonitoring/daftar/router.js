const mod_name = 'PetaMonitoring'
const rootp = `/${mod_name}`

const router = [
    {
        path: `${rootp}/daftar`,
        name: `${mod_name}_daftar`,
        meta: {
            auth : true,
        },
        component: () => import('./pages/Daftar.vue'),
    },
    {
        path: `${rootp}/daftar/:id`,
        name: `${mod_name}_daftar_detail`,
        meta: {
            auth : true,
        },
        component: () => import('./pages/Detail.vue'),
    },
    {
        path: `${rootp}/daftar/:id/prog`,
        name: `${mod_name}_daftar_progress`,
        meta: {
            auth : true,
        },
        component: () => import('./pages/Progress'),
    },

]

export default router;