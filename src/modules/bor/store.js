// import axios from 'axios'
// import { API } from '../../const';
// const M_API = API + '/bor'

import perencanaan from './rencana/store'
import implementasi from './implementasi/store'

const store = {
    namespaced: true,
    state: {
    },
    getters: {
    },
    mutations: {
    },
    actions: {
    },
    modules : {
        perencanaan,
        implementasi
    }
}

export default store;
