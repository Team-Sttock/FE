import { type MutationRes, userClient } from '.'

export interface PostCheckLoginIdProps {
  login_id: string
}

export const postCheckLoginId = async ({ login_id }: PostCheckLoginIdProps) => {
  return await userClient.post(`/check?login_id=${login_id}`, {})
}

export interface GetUserRes {
  login_id: string
  name: string
  gender_cd: number
  email: string
  family_num: number
  birthday: string
}

export const getUser = async () => await userClient.get<GetUserRes>('')

export interface PostCodeProps {
  email: string
}

export const postCode = async (props: PostCodeProps) =>
  await userClient.post('/email/verification-code', props)

export interface PostCheckCodeProps {
  email: string
  auth_number: string
}

export const postCheckCode = async (props: PostCheckCodeProps) =>
  await userClient.post('/email/check-verification-code', props)

export interface PostFindLoginIdProps {
  email: string
}

export interface PostFindLoginIdRes {
  loginId: string
}

export const postFindLoginId = async (props: PostFindLoginIdProps) =>
  await userClient.post<PostFindLoginIdRes>('/loginId', props)

export interface PostPasswordProps {
  password: string
}

export const postPassword = async (props: PostPasswordProps) =>
  await userClient.post<MutationRes>('/password', props)

export interface PostTempPasswordProps {
  login_id: string
  email: string
}

export const postTempPassword = async (props: PostTempPasswordProps) =>
  await userClient.post<MutationRes>('temp-password', props)

export interface PostSignupProps {
  login_id: string
  password: string
  name: string
  gender_cd: number
  email: string
  family_num: number
  birthday: string
}

export const postSignup = async (props: PostSignupProps) =>
  await userClient.post<MutationRes>('/signup', props, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
