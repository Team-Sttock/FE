import { userClient } from '../client'

export interface PostEmailProps {
  email: string
  auth_number: string
}

export const postEmail = async (props: PostEmailProps) =>
  await userClient.post('/email', props)
