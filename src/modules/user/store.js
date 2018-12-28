import axios from 'axios'
import { API } from '../../const';
const M_API = API + '/user'
const lc = window.localStorage
const TOKEN = 'prims'

const store = {
    namespaced: true,
    state: {
        user: null,
        token: lc.getItem(TOKEN),
    },
    getters: {
        user(state) {
            return state.user
        },
        check(state) {
            return state.token // state.user != null
        },
        token(state) {
            return state.token
        },
    },
    mutations: {
        login(state, { user, token }) {
            state.user = user
            state.token = token
            lc.setItem(TOKEN, token)
        },
        logout(state) {
            state.user = null
            state.token = null
            lc.removeItem(TOKEN)
        }
    },
    actions: {
        // eslint-disable-next-line
        login({ commit }, { email, password }) {
            return axios.post(`${API}/login`, { username:email, password })
                .then(res => {
                    let {email, name } = res.data
                    commit('login', { user: {email, name}, token: res.data.apiToken })
                })
                .catch(err => Promise.reject(err))
            // commit('login', { user: {email:'fulan@fulan.com',firstname:'Fulan', lastname:'bin Fulan'}, token: 'tokentoken' })
            // return new Promise((resolve)=>{
            //     setTimeout(()=>{
            //         resolve()
            //     },100)
            // })
        },
        logout({ commit }) {
            return new Promise((resolve)=>{
                commit('logout')
                resolve()
            })
            // return axios.post(`${M_API}/logout`)
            //     .then(() => {
            //         commit('logout')
            //     })
        },
        fetch({ state }) {
            if (!state.token)
                return Promise.reject(null)
            else
                return axios.get(`${API}/me`)
                    .then(res => {
                        if (res.data && res.data.email) {
                            state.user = res.data
                        }
                    })
                // return Promise.resolve({
                //     email : 'fulan@fulan.com',
                //     firstname : 'FUlan',
                //     lastname : 'bin Fulan'
                // })
        },
        // eslint-disable-next-line
        register({ commit }, { email, firstname, lastname, password, confirm_password }) {

            return axios.post(M_API + '/register', {
                firstname, lastname,
                email,
                password,
                confirm_password
            })
                .then(res => {
                    // commit('login', { user: res.data.user, token: res.data.token })
                    return Promise.resolve(res.data)
                })
                .catch(err => Promise.reject(err))
        },
    }
}

export default store;
