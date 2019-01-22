const mod_name = 'personal'
const rootp = `/${mod_name}`

const router = [
    {
        path: `${rootp}/daftar`,
        name: `${mod_name}_daftar`,
        meta: {
            auth : true,
        },
        component: () => import('./pages/Daftar.vue'),
    }

]

export default router;