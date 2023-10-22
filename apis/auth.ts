import { client, type MutationRes } from '.'

export interface PostLoginProps {
  login_id: string
  password: string
}

export const postLogin = async (props: PostLoginProps) =>
  await client.post<MutationRes, PostLoginProps>('/login', props)
