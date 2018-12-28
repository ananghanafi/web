const mod_name = 'revitalisasi'
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
]

export default router;