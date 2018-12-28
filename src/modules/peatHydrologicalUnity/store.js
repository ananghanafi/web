import axios from 'axios'
import { API } from '../../const';
const M_API = API + '/mphu'

const store = {
    namespaced: true,
    state: {
    },
    getters: {
    },
    mutations: {
    },
    actions: {
        getAll(){
            return axios.get(M_API)
            .then(res=>{
                return res.data
            })
        },
        get(){
            return axios.get(M_API+'?qf_year=2018')
            .then(res=>{
                return res.data
            })
        }
    },
}

export default store;
