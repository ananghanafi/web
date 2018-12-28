import axios from 'axios'
import { API } from '../../const';
const M_API = API + '/mcurrency'

const store = {
    namespaced: true,
    state: {
    },
    getters: {
    },
    mutations: {
    },
    actions: {
        get(){
            return axios.get(M_API)
            .then(res=>{
                return res.data
            })
        }
    },
}

export default store;
