import request from '@/utils/request'

const getdata = async () => {
  return request({
    url: '/personalCenter/query',
    method: 'post'
  })
}
export default { getdata }
