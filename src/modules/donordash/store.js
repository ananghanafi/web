import axios from 'axios'
import { API } from '../../const';
const M_API = API + '/donordash'
// import { normParam } from '../../tools'

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
        getPlanningAnggaran({ }) {
            return axios.get(`${M_API}/anggaran`)
                .then(res => {
                    return res.data
                })
                
        },
        // eslint-disable-next-line
        getPlanningCost({ }) {
            return axios.get(`${M_API}/total-cost-plan`)
                .then(res => {
                    return res.data
                })
                .catch(err => Promise.reject(err))
        },
        // eslint-disable-next-line
        getPlanningCostByProvince({ }) {
            return axios.get(`${M_API}/cost-by-province-plan`)
                .then(res => {
                    return res.data
                })
                .catch(err => Promise.reject(err))
        },
        // eslint-disable-next-line
        getPlanningArea({ }) {
            return axios.get(`${M_API}/total-area-plan`)
                .then(res => {
                    return res.data
                })
                .catch(err => Promise.reject(err))
        },
        // eslint-disable-next-line
        getPlanningAreaByProvince({ }) {
            return axios.get(`${M_API}/area-by-province-plan`)
                .then(res => {
                    return res.data
                })
                .catch(err => Promise.reject(err))
        },
        // eslint-disable-next-line
        getPlanningAction({ }) {
            return axios.get(`${M_API}/total-action-plan`)
                .then(res => {
                    return res.data
                })
                .catch(err => Promise.reject(err))
        },
        // eslint-disable-next-line
        getPlanningActionByProvince({ }) {
            return axios.get(`${M_API}/action-by-province-plan`)
                .then(res => {
                    return res.data
                })
                .catch(err => Promise.reject(err))
        },
        // eslint-disable-next-line
        getPlanningCostByFundingSource({ }) {
            return axios.get(`${M_API}/cost-by-funding-source-plan`)
                .then(res => {
                    return res.data
                })
                .catch(err => Promise.reject(err))
        },
    }
}

export default store;
