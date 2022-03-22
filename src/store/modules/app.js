import { login as loginApi } from '@/api'
import router from '@/router'

export default {
  namespaced: true,
  state: () => ({
    token: localStorage.getItem('x-token') || ''
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      localStorage.setItem('x-token', token)
    }
  },
  actions: {
    login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        loginApi(userInfo)
          .then((data) => {
            console.log(data)
            commit('setToken', data.token)
            router.replace('/')
            resolve()
          })
          .catch((e) => reject(e))
      })
    }
  }
}
