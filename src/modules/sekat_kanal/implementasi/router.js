const mod_name = 'skanal'
const rootp = `/${mod_name}`

const router = [
    {
        path: `${rootp}/implementasi`,
        name: `${mod_name}_implementasi`,
        meta: {
            auth : true,
        },
        component: () => import('./pages/Implementasi.vue'),
    },
    {
        path: `${rootp}/implementasi/:id`,
        name: `${mod_name}_implementasi_detail`,
        meta: {
            auth : true,
        },
        component: () => import('./pages/Detail.vue'),
    },
    {
        path: `${rootp}/implementasi/:id/prog`,
        name: `${mod_name}_implementasi_progress`,
        meta: {
            auth : true,
        },
        component: () => import('./pages/Progress'),
    },

]

export default router;