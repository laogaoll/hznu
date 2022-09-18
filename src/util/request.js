import axios from 'axios'
import { message } from 'antd'
import jwt from './token'


export default(url, options = {}, allRes = false) => {
  let token = jwt.getToken()

  

  token
    ? axios.defaults.headers.common.authorization = `Bearer ${token}`
    : delete axios.defaults.headers.common.authorization


  // console.log(token)

  return axios({
    url,
    ...options
  })
  .then(r => {
    if (allRes) {
      return r.data
    }

    if (r && r.status === 200) {
      return r.data
    } else {
      // console.log('aaa')
      message.error('网络错误')
    }
  })
  .catch(e => {
    // console.log(e)
    if (e.response) {
      message.error(e.response.data.msg)
      return e.response.data
    }
    // console.log('bbb')
    message.error('网络错误')
  })
}