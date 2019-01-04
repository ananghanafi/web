// import rencana from './rencana/router'
import daftar from './daftar/router'

const mod_name = 'BatasProvinsi'
const rootp = `/${mod_name}`

const router = [
    {
        path: rootp,
        name: mod_name,
        // meta: {},
        // component: () => import('./pages/Bo'),
        redirect : {name:'BatasProvinsi'}
    },
    // ...rencana,
    ...daftar
]

export default router;