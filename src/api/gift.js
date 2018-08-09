import request from '@/utils/request'

const getdata = async () => {
  return request({
    url: '/welfare/all',
    method: 'post'
  })
}
export default { getdata }
