import { type MutationRes, userClient } from '../client'

interface PostRecoverPassword {
  login_id: string
  email: string
}

export const postRecoverPassword = async (props: PostRecoverPassword) =>
  await userClient.post<MutationRes, PostRecoverPassword>(
    '/password/recover',
    props
  )
