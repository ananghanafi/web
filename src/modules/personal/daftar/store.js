import axios from 'axios'
import { API, STATUS_IMPL_OPENED, STATUS_IMPL_PENDING } from '../../../const';
const M_API = API + '/personal'
const lc = window.localStorage
const TOKEN = 'prims'

const store = {
    namespaced: true,
    state: {
        user: null,
        token: lc.getItem(TOKEN),
    },
    getters: {
        user(state){
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
        register({ commit }, { email, nama, jenis, tanggal, admin, password
        
        }) {

            return axios.post(M_API + '/personal', {
               email,nama,jenis,tanggal,admin,password,password2
                
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
