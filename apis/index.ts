import axios from 'axios'

export const authClient = axios.create({
  baseURL: '/api/v1/auth',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
})

export const userClient = axios.create({
  baseURL: '/api/v1/user',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
})

export interface MutationRes {
  message: string
}
export interface ServerErrorRes {
  code: string
  message: string
}
