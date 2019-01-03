import Vue from 'vue'
import Router from 'vue-router'

import { router as r_user } from './modules/user'
import { router as r_home } from './modules/home'
// import { router as r_skanal } from './modules/sekat_kanal'
// import { router as r_rkanal } from './modules/ruas_kanal'
// import { router as r_pkanal } from './modules/penimbunan_kanal'

import { router as r_rencana } from './modules/perencanaan'

import r_bor from './modules/bor/router'
import r_skanal from './modules/sekat_kanal/router'
import r_pkanal from './modules/penimbunan_kanal/router'
import r_rtt from './modules/rtt/router'
import r_revegetasi from './modules/revegetasi/router'
import r_embung from './modules/embung/router'
import r_revitalisasi from './modules/revitalisasi/router'
import r_donor from './modules/donor/router'
import r_personal from './modules/personal/router'
import r_inputrtt from './modules/inputrtt/router'


import store from './store'
import {isCan} from './tools'

Vue.use(Router)

const other = [
    {
        path: '/',
        redirect: { name: 'home' }
    },
    {
        path: '*',
        name: '404',
        component: () => import('./modules/404/pages/404')
    }
]

const routers = [
    ...r_user, ...r_home,
    ...r_bor,
    ...r_skanal,
    ...r_pkanal,
    ...r_revegetasi,
    ...r_embung,
    ...r_revitalisasi,

    ...r_rencana,
    ...r_rtt,
    ...r_donor,
    ...r_personal,
    ...r_inputrtt,

    ...other
]

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routers
})

router.beforeResolve((to, from, next) => {
    if (to.name) {
        store.commit('main/pStart')
    }
    next()
})

router.beforeEach((to, from, next) => {
    //cek apakah perlu login
    store.commit('main/403',false)
    if (to.meta && to.meta.auth) {
        // cek apakah sudah login
        if (store.getters['user/check']) {
            //load permission
            store.dispatch('user/fetch')
            .then(()=>{
                // cek apakah dapat mengakses route
                store.commit('main/403',!isCan(to.meta.auth))
                next()
            })
            .catch(()=>{
                // cek apakah dapat mengakses route
                store.commit('main/403',!isCan(to.meta.auth))
                next()
            })
        
        } else {
            next({
                name: 'login'
            })
        }
    } else {
        next();
    }
});

router.afterEach(() => {
    store.commit('main/pEnd')
    window.scrollTo(0, 0);
});

export default router