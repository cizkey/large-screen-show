// 接口请求地址
const apiUrl = 'http://192.168.1.108:8484/api';
// const apiUrl = '/';

/**
 * 封装axios，实现发送/响应接口的拦截，来实现统一提示等效果
 */
const error = (err) => {
  console.log('数据加载失败:', err);
}

const request = axios.create({
  // baseURL: 'https://cnodejs.org/api/v1',
  baseURL: apiUrl,
  timeout: 5000 // 请求超时时间限制
})

// 请求拦截器
request.interceptors.request.use(
  config => {
    return config
  },
  err => {
    error(err)
    Promise.reject(err)
  }
)

// 响应拦截器
request.interceptors.response.use(
  response => {
    return response.data
  },
  err => {
    error()
    return Promise.reject(err)
  }
)

// export default request
