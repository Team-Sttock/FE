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

export const postFindLoginId = async (props: PostFindLoginIdProps) =>
  await userClient.post<MutationRes, PostFindLoginIdProps>('/loginId', props)

export interface PostPasswordProps {
  password: string
}

export const postPassword = async (props: PostPasswordProps) =>
  await userClient.post<MutationRes, PostPasswordProps>('/password', props)

export interface PostRecoverPasswordProps {
  login_id: string
  email: string
}

export const postRecoverPassword = async (props: PostRecoverPasswordProps) =>
  await userClient.post<MutationRes, PostRecoverPasswordProps>(
    '/password/recover',
    props
  )

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
  await userClient.post<MutationRes, PostSignupProps>('/signup', props, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
