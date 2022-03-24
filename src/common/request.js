import axios from 'axios'
import { ElMessage } from 'element-plus'
import { tokenIsTimeout } from './token_timeout'
import store from '@/store'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

service.interceptors.request.use(
  (request) => {
    if (localStorage.getItem('x-token') && tokenIsTimeout()) {
      store.commit('app/loginOut')
      return Promise.reject(new Error('token已过期，请重新登陆'))
    }
    request.headers.Authorization = localStorage.getItem('x-token') || ''
    return request
  },
  (error) => {
    return Promise.reject(new Error(error))
  }
)

service.interceptors.response.use(
  (response) => {
    // console.log(response)
    const { status } = response
    if (status !== 200 && status !== 201) {
      ElMessage.error('请求失败')
      return Promise.reject(new Error('请求失败'))
    }
    const { data, meta = {} } = response.data
    if (meta.status === 200 || meta.status === 201) {
      return data
    }
    if (meta.status === 400) {
      store.commit('app/loginOut')
      ElMessage.error(meta.msg)
      return Promise.reject(new Error('token无效'))
    }
    ElMessage.error(meta.msg)
    return Promise.reject(new Error(meta.msg))
  },
  (error) => {
    error.response && ElMessage.error(error.response.data)
    return Promise.reject(new Error(error.response && error.response.data))
  }
)

export default service
