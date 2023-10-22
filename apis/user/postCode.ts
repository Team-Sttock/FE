import { userClient } from '../client'

export interface PostCodeProps {
  email: string
}

export const postCode = async (props: PostCodeProps) =>
  await userClient.post('/verification-code', props)
