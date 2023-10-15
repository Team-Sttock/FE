import { type MutationRes, userClient } from '../client'

export interface PostSignupProps {
  login_id: string
  password: string
  name: string
  gender_cd: number
  email: string
  family_num: string
  birthday: string
}

export const postSignup = async (props: PostSignupProps) =>
  await userClient.post<MutationRes, PostSignupProps>('/signup', props)
