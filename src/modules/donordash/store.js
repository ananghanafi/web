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
        getAnggaran({ }){
            return axios.get(`${M_API}/anggaran`)
            .then(res => {
                return res.data
            })
        },
        provinces({ }) {
            return axios.get(`${M_API}/provinces`)
                .then(res => {
                    return res.data
                })
        },
        getPlanningAnggaran({ }) {
            return axios.get(`${M_API}/peatlandrewetting`)
                .then(res => {
                    return res.data
                })
                
        },
        getPlanningrevegetasi({ }) {
            return axios.get(`${M_API}/revegetation`)
                .then(res => {
                    return res.data
                })
                
        },
        getPlanningrevitalization({ }) {
            return axios.get(`${M_API}/revitalization`)
                .then(res => {
                    return res.data
                })
                
        },
        
        getPlanningStabilization({ }) {
            return axios.get(`${M_API}/baseStabilization`)
                .then(res => {
                    return res.data
                })
                
        },
        getPlanninginstSrengthening({ }) {
            return axios.get(`${M_API}/instSrengthening`)
                .then(res => {
                    return res.data
                })
                
        },
        getPlanningcoopImprove({ }) {
            return axios.get(`${M_API}/coopImprove`)
                .then(res => {
                    return res.data
                })
                
        },
        getPlanningactifRoles({ }) {
            return axios.get(`${M_API}/actifRoles`)
                .then(res => {
                    return res.data
                })
                
        },
        getPlanningpeatlandRestoration({ }) {
            return axios.get(`${M_API}/peatlandRestoration`)
                .then(res => {
                    return res.data
                })
                
        },
        getPlanningadministrationManagement({ }) {
            return axios.get(`${M_API}/administrationManagement`)
                .then(res => {
                    return res.data
                })
                
        },
        // eslint-disable-next-line
        getPlanningCost({ }) {
            return axios.get(`${M_API}/totalcost`)
                .then(res => {
                    return res.data
                })
                .catch(err => Promise.reject(err))
        },
        // eslint-disable-next-line
        getPlanningCostByProvince({ }) {
            return axios.get(`${M_API}/costByProvince`)
                .then(res => {
                    return res.data
                })
                .catch(err => Promise.reject(err))
        },
        // eslint-disable-next-line
        getPlanningCostByKegiatan({ }) {
            return axios.get(`${M_API}/costByActivity`)
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
