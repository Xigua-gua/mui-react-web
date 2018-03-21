
import * as TYPES from '../types'
import { HEADERS } from '../../config'
import { request } from './request'

// 提交建议
export function sendForms(opt = {}) {
  return (dispatch) => {
    const route = '/forms'
    const method = 'POST'
    const headers = {
      ...HEADERS,
    }
    const body = JSON.stringify(opt.body)
    const success = (data) => {
      console.log('form- data->',data)
      opt.success && opt.success(data)
    }
    request(route,{},dispatch, success, { method, headers, body })
  }
}
