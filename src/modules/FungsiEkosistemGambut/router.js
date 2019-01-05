// import rencana from './rencana/router'
import daftar from './daftar/router'

const mod_name = 'FungsiEkosistemGambut'
const rootp = `/${mod_name}`

const router = [
    {
        path: rootp,
        name: mod_name,
        // meta: {},
        // component: () => import('./pages/Bo'),
        redirect : {name:'FungsiEkosistemGambut'}
    },
    // ...rencana,
    ...daftar
]

export default router;