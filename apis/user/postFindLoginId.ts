import { type MutationRes, userClient } from '../client'

interface PostFindLoginIdProps {
  email: string
}

export const postFindLoginId = async (props: PostFindLoginIdProps) =>
  await userClient.post<MutationRes, PostFindLoginIdProps>('/loginId', props)
