import axios from 'axios'

export const client = axios.create({
  baseURL: '/api/v1',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
})

export interface MutationRes {
  message: string
}
export interface ServerErrorRes {
  status: string
  code: string
  message: string
}
