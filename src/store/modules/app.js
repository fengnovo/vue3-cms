import { login as loginApi } from '@/api'
import router from '@/router'
import { tokenTimeStart } from '@/common/token_timeout'

export default {
  namespaced: true,
  state: () => ({
    token: localStorage.getItem('x-token') || '',
    menuCollapse: false
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      localStorage.setItem('x-token', token)
    },
    loginOut(state) {
      state.token = ''
      localStorage.clear()
      router.replace('/login')
    },
    toggleMenuCollapse(state) {
      state.menuCollapse = !state.menuCollapse
    }
  },
  actions: {
    login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        loginApi(userInfo)
          .then((data) => {
            console.log(data)
            tokenTimeStart()
            commit('setToken', data.token)
            router.replace('/')
            resolve()
          })
          .catch((e) => reject(e))
      })
    }
  }
}
