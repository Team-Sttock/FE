import axios from 'axios'
import { memoize } from 'lodash-es'

export const client = memoize(
  axios.create({
    baseURL: 'https://api.sttock.co.kr',
  })
)

export const userClient = memoize(
  axios.create({
    baseURL: 'https://api.sttock.co.kr/api/v1/user',
  })
)

export interface MutationRes {
  message: string
}
export interface ServerErrorRes {
  code: string
  message: string
}
