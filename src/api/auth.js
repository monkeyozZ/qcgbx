import request from '@/utils/request'

const sendCode = async (code) => {
  return request({
    url: '/weChat/login',
    method: 'post',
    data: { 'code': code }
  })
}

const getuserinfo = async (code) => {
  return request({
    url: '/weChat/userInfo',
    method: 'post'
  })
}
export default { sendCode, getuserinfo }
