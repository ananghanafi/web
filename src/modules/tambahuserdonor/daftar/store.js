import axios from 'axios'
import { API, STATUS_IMPL_OPENED, STATUS_IMPL_PENDING } from '../../../const';
const M_API = API + '/jenis'
const M_APIII = API + '/admin'
const M_APII = API + '/personal'
import {normParam} from '../../../tools'


const store = {
    namespaced: true,
    state: {
        
    },
    getters: {
        
    },
    mutations: {
        
    },
    actions: {
        // eslint-disable-next-line
        get({},par) {
            return axios.get(M_API)
            .then(res=>{
                return res.data
            })         
        },
        gett({},par) {
            return axios.get(M_APIII)
            .then(res=>{
                return res.data
            })            
        },
        // eslint-disable-next-line
        show({},id) {
            return axios.get(`${M_API}/${id}`)
            .then(res => {
                return res.data
            })
            .catch(err => Promise.reject(err))          
        },
        // eslint-disable-next-line
        update({}, obj){
            return axios.put(`${M_API}/${obj.generalActivity.id}`, obj)
            .then(res => {
                return res.data
            })
            .catch(err => Promise.reject(err))          
        },
        // eslint-disable-next-line
        approveReject({},{id,is_approve}){
            return axios.put(`${M_API}/${id}/status`, {status : { id :is_approve ? STATUS_IMPL_OPENED : STATUS_IMPL_PENDING}})
            .then(res => {
                return res.data
            })
            .catch(err => Promise.reject(err))      
        },
        // eslint-disable-next-line
        uploadImage({ }, { id, collection, file }) {
            let fd = new FormData()
            fd.append('collection', collection)
            fd.append('file', file)
            return axios.post(`${M_API}/${id}/image`, fd, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(res => {
                    return res.data
                })
                .catch(err => Promise.reject(err))
        },
        // eslint-disable-next-line
        uploadGallery({ }, { id, description, category, file }) {
            let fd = new FormData()
            fd.append('category', category)
            fd.append('description', description)
            fd.append('file', file)
            return axios.post(`${M_API}/${id}/galery`, fd, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(res => {
                    return res.data
                })
                .catch(err => Promise.reject(err))
        },
        // eslint-disable-next-line
        uploadDocument({ }, { id, description, category, file }) {
            let fd = new FormData()
            fd.append('description', description)
            fd.append('file', file)
            return axios.post(`${M_API}/${id}/document`, fd, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(res => {
                    return res.data
                })
                .catch(err => Promise.reject(err))
        },
        // eslint-disable-next-line
        implProgress({ }, obj) {
            return axios.post(`${M_API}/${obj.implId}/implprogress`, obj)
            .then(res => {
                return res.data
            })
            .catch(err => Promise.reject(err))
        },    
        register({ commit }, {id, name, email, jenis, tanggal, jmlanggota ,admin, password}) {

            return axios.post(`${M_APII}` , {id, name, email, jenis, tanggal, jmlanggota ,admin, password})
                .then(res => {
                    // commit('login', { user: res.data.user, token: res.data.token })
                    return Promise.resolve(res.data)
                })
                .catch(err => Promise.reject(err))
        },    
    }
}

export default store;
