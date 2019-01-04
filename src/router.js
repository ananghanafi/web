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
import r_revitalisasir3 from './modules/revitalisasir3/router'
import r_inputdatartt from './modules/inputdatartt/router'
import r_R1danR2 from './modules/R1danR2/router'
import r_summaryR1danR2 from './modules/summaryR1danR2/router'
import r_R3 from './modules/R3/router'
import r_SummaryR3 from './modules/SummaryR3/router'
import sumurbor from './modules/sumurbor/router'
import summarysumurbor from './modules/summarysumurbor/router' 
import sekatkanal from './modules/sekatkanal/router' 
import penimbunankanal from './modules/penimbunankanal/router' 
import revegetasiiR2 from './modules/revegetasiiR2/router' 
import revitalisasiiR3 from './modules/revitalisasiiR3/router' 
import summaryrevitalisasiiR3 from './modules/summaryrevitalisasiiR3/router' 

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
    ...r_revitalisasir3,
    ...r_inputdatartt,
    ...r_R1danR2,
    ...r_summaryR1danR2,
    ...r_R3,
    ...r_SummaryR3,
    ...sumurbor,
    ...summarysumurbor,
    ...sekatkanal,
    ...penimbunankanal,
    ...revegetasiiR2,
    ...revitalisasiiR3,
    ...summaryrevitalisasiiR3,
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