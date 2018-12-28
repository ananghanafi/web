import rencana from './rencana/router'
import implementasi from './implementasi/router'

const mod_name = 'donor'
const rootp = `/${mod_name}`

const router = [
    {
        path: rootp,
        name: mod_name,
        // meta: {},
        // component: () => import('./pages/Bo'),
        redirect : {name:'donor_implementasi'}
    },
    ...rencana,
    ...implementasi
]

export default router;