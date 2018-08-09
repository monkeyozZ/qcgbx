import * as types from './mutation-type'
import authapi from '@/api/auth'

export const setLoginstatus = ({commit}, params) => {
  commit(types.SETLOGINSTATUS, params)
}
export const setcode = ({ commit }, params) => {
  authapi.sendCode(params).then((result) => {
    commit(types.SETINFO, result.data.data)
    // console.log(result)
  }).catch((err) => {
    console.log(err)
  })
}

export const inituserinfo = ({ commit }, obj) => {
  commit(types.SETINFO, obj)
}
