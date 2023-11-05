import { authClient, type MutationRes } from '.'

export interface PostLoginProps {
  login_id: string
  password: string
}

export const postLogin = async (props: PostLoginProps) =>
  await authClient.post<MutationRes, PostLoginProps>('/login', props, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
