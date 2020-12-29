import axios from 'axios'

const { API_BASE_URL } = process.env

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
})

axiosInstance.interceptors.request.use(config => {
  const { token } = JSON.parse(localStorage.getItem('session'))
  config.headers.Authorization = `Bearer ${token}`

  return config
})

export default axiosInstance
