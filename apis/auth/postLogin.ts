import { client } from '../client'

export interface PostLoginProps {
  login_id: string
  password: string
}

export interface PostLoginRes {
  message: string
}

export const postLogin = async (props: PostLoginProps) =>
  await client.post<PostLoginRes, PostLoginProps>('/login', props)
