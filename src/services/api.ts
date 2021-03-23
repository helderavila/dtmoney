import axios from 'axios'

const api = axios.create({
  baseURL: 'https://dtmoney-demo.vercel.app/api'
})

export default api