import request from '@/utils/request'

const getcode = async (phone) => {
  return request({
    url: '/personal/sendMsg',
    method: 'post',
    data: {mobile: phone}
  })
}
const savedata = async (obj) => {
  return request({
    url: '/personal/save',
    method: 'post',
    data: obj
  })
}

const getinfo = async (openid) => {
  return request({
    url: '/personal/getUser',
    method: 'post',
    data: {openId: openid}
  })
}
export default { getcode, savedata, getinfo }
