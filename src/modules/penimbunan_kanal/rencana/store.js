import axios from 'axios'
import { API, STATUS_APPROVE, STATUS_REJECT } from '../../../const';
const M_API = API + '/canalhoardingplan'
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
        provinces({ }) {
            return axios.get(`${M_API}/provinces`)
                .then(res => {
                    return res.data
                })
        },
        // eslint-disable-next-line
        get({},par) {
            return axios.get(`${M_API}${normParam(par)}`)
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
        update({}, obj){
            return axios.put(`${M_API}/${obj.generalActivity.id}`, obj)
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
