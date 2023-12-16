import { client, type MutationRes } from '.'

export interface PostLoginProps {
  login_id: string
  password: string
}

export const postLogin = async (props: PostLoginProps) =>
  await client.post<MutationRes>('/login', props, {
    headers: {
      'Content-Type': 'application/json',
    },
  })

export const postLogout = async () => await client.post<MutationRes>('/logout')
