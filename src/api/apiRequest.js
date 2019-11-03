import axios from 'axios'
export default axios.create(
  { baseURL: 'https://api.sandbox.voice123.com/providers' }
)