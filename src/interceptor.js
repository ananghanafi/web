import Vue from 'vue'
import axios from 'axios'
import store from './store'
import router from './router'

// Request interceptor
axios.interceptors.request.use(request => {
  store.commit('main/pStart')
  const token = store.getters['user/token']
  if (token) {
    request.headers.common['Authorization'] = `Bearer ${token}`
  }

  //   const locale = store.getters['lang/locale']
  //   if (locale) {
  //     request.headers.common['Accept-Language'] = locale
  //   }

  // request.headers['X-Socket-Id'] = Echo.socketId()

  return request
})

// Response interceptor
axios.interceptors.response.use(response => {
    store.commit('main/pEnd')  
    return response
  }, error => {
    const { status = 500 } = error.response ? error.response : {}
    const { message = 'Unknown error' } = error.response ? error.response.data : {}

    if (status == 401) {
      Vue.prototype.$error(message)
    }
    else if (status >= 400) {
      Vue.prototype.$error(message)
    }

    if (status === 401 && store.getters['user/check']) {
      store.commit('user/logout')
      router.push({ name: 'login' })
    }
    store.commit('main/pEnd')
    return Promise.reject(error)
  }
)