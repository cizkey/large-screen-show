import axios from 'axios'
import { message } from 'antd'

// 接口请求地址
const apiUrl = 'http://192.168.1.101:8181/api/v1';

/**
 * 封装axios，实现发送/响应接口的拦截，来实现统一提示等效果
 */

const error = () => {
  message.error('数据加载失败！', 1)
}

const service = axios.create({
  // baseURL: 'https://cnodejs.org/api/v1',
  baseURL: apiUrl,
  timeout: 5000 // 请求超时时间限制
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    return config
  },
  err => {
    error()
    Promise.reject(err)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    return response.data
  },
  err => {
    error()
    return Promise.reject(err)
  }
)

// export default service
