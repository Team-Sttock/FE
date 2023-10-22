import { type MutationRes, userClient } from '../client'

export interface PostSignupProps {
  login_id: string
  password: string
  name: string
  gender_cd: '1' | '2'
  email: string
  family_num: number
  birthday: string
}

export const postSignup = async (props: PostSignupProps) =>
  await userClient.post<MutationRes, PostSignupProps>('/signup', props)
