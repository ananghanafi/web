import rencana from './rencana/router'
import implementasi from './implementasi/router'

const mod_name = 'revitalisasi'
const rootp = `/${mod_name}`

const router = [
    {
        path: rootp,
        name: mod_name,
        // meta: {},
        // component: () => import('./pages/Bo'),
        redirect : {name:'revitalisasi_implementasi'}
    },
    ...rencana,
    ...implementasi
]

export default router;