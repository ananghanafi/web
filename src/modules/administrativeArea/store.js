import axios from 'axios'
import { API } from '../../const';

const store = {
    namespaced: true,
    state: {
    },
    getters: {
    },
    mutations: {
    },
    actions: {
        getTargetedProv(){
            // eslint-disable-next-line
            return axios.get(`${API}/province/targeted`)
            .then(res=>{
                return res.data
            })
        },
        getProv(){
            // eslint-disable-next-line
            return axios.get(`${API}/mprovince`)
            .then(res=>{
                return res.data
            })
        },
        // eslint-disable-next-line
        getKota({},id_prov){
            // eslint-disable-next-line
            return axios.get(`${API}/mcity/${id_prov}`)
            .then(res=>{
                return res.data
            })
        },
        // eslint-disable-next-line
        getKec({}, id_kota){
            return axios.get(`${API}/msubdistrict/${id_kota}`)
            .then(res=>{
                return res.data
            })
        },
     
    },
}

export default store;
