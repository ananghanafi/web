const mod_name = 'perencanaan'
const rootp = `/${mod_name}`

const router = [
    {
        path: rootp,
        name: mod_name,
        meta: {
            auth : true,
            menu : [

            ]
        },
        components: {
            default : () => import('./pages/Perencanaan'),
            // toolbar : () => import('./components/Toolbar'),
            minitoolbar : () => import('./components/MiniToolbar'),
        }
    },

]

export default router;