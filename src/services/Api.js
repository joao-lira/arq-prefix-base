import axios from 'axios'
import { BASE_URL_API } from '~/constants/Constants'

const api = axios.create({
  baseURL: BASE_URL_API
})

export default api
