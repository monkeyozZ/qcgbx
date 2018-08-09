import request from '@/utils/request'

const getlist = async (obj) => {
  return request({
    url: '/product/insurance',
    method: 'post',
    data: obj
  })
}
export default { getlist }
