const mod_name = 'donor'
const rootp = `/${mod_name}`

const router = [
    {
        path: `${rootp}/perencanaan`,
        name: `${mod_name}_rencana`,
        meta: {
            auth : true,
        },
        component: () => import('./pages/Perencanaan'),
    },
    {
        path: `${rootp}/perencanaan/:id`,
        name: `${mod_name}_rencana_detail`,
        meta: {
            auth : true,
        },
        component: () => import('./pages/DetailRencana'),
    },
    {
        path: `${rootp}/form`,
        name: `${mod_name}_rencana_baru`,
        meta: {
            auth : true,
        },
        component: () => import('./pages/Form'),
    },
    {
        path: `${rootp}/daftar`,
        name: `${mod_name}_rencana_daftar`,
        meta: {
            auth : true,
        },
        component: () => import('./pages/Daftar'),
    },
]

export default router;