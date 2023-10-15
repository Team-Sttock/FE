import { type MutationRes, userClient } from '../client'

interface PostPasswordProps {
  password: string
}

export const postPassword = async (props: PostPasswordProps) =>
  await userClient.post<MutationRes, PostPasswordProps>('/password', props)
