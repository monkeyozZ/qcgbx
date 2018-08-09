import request from '@/utils/request'

const getdata = async () => {
  return request({
    url: '/claims/findAll',
    method: 'post'
  })
}
export default { getdata }
