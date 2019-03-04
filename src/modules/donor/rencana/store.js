import axios from 'axios'
import { API, STATUS_APPROVE, STATUS_REJECT } from '../../../const';
// const M_API = API + '/donoractivities'
const M_API = API + '/donordash'
const M_APII = API + '/organisasi'


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
        getOrg({ }) {
            return axios.get(`${API}/organization?qf_org_type=7`)
                .then(res => {
                    return res.data.data
                })
                .catch(err => Promise.reject(err))
            },
            
        // eslint-disable-next-line
        get({},par) {
            return axios.get(`${M_API}${normParam(par)}`)
            .then(res => {
                return res.data
            })
            .catch(err => Promise.reject(err))          
        },
        gett({},par) {
            return axios.get(`${M_APII}${normParam(par)}`)
            .then(res => {
                return res.data
            })
            .catch(err => Promise.reject(err))          
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
        create({}, obj){
            return axios.post(`${M_API}`, obj)
            .then(res => {
                return res.data
            })
            .catch(err => Promise.reject(err))          
        },
        createorg({}, obj){
            return axios.post(`${M_APII}`,obj)
            .then(res => {
                return res.data
            })       
        },
        // eslint-disable-next-line
        update({}, obj){
            return axios.put(`${M_API}/${obj.id}`, obj)
            .then(res => {
                return res.data
            })
            .catch(err => Promise.reject(err))          
        },
        // eslint-disable-next-line
        updateItems({ }, { id, cost, funding_source, remark, status }) {
            return axios.patch(`${M_API}/${id}/cost`, { cost: cost, fundingSource: funding_source, remark: remark, status: status })
                .then(res => {
                    return res.data
                })
                .catch(err => Promise.reject(err))
        },
       
        // eslint-disable-next-line
        approveReject({},{id,is_approve}){
            return axios.put(`${M_API}/${id}/status`, {status : { id :is_approve ? STATUS_APPROVE : STATUS_REJECT}})
            .then(res => {
                return res.data
            })
            .catch(err => Promise.reject(err))      
        }

    }
}

export default store;
