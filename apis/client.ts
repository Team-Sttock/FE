import axios from 'axios'

export const client = axios.create({
  baseURL: 'https://api.sttock.co.kr',
})

export const userClient = axios.create({
  baseURL: 'https://api.sttock.co.kr/api/v1/user',
})

export interface MutationRes {
  message: string
}
export interface ServerErrorRes {
  code: string
  message: string
}
