import request from '@/utils/request'

const savedata = async (obj) => {
  return request({
    url: '/car/save',
    method: 'post',
    data: obj
  })
}
export default { savedata }
