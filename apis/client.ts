import axios from 'axios'

export const client = axios.create({
  baseURL: 'https://api.sttock.co.kr',
})

export interface ServerErrorRes {
  code: string
  message: string
}
