import request from '@/utils/request'

const getData = async (obj) => {
  return request({
    url: '/index_h/app_main',
    method: 'post',
    data: obj
  })
}
export default { getData }
