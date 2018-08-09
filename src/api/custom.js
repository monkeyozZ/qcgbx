import request from '@/utils/request'

const savedata = async (obj) => {
  return request({
    url: '/custom/save',
    method: 'post',
    data: obj
  })
}
export default { savedata }
