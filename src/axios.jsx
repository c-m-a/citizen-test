import axios from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_HOST,
})

export default instance
