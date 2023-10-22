import { type MutationRes, userClient } from '.'

export interface GetCheckLoginIdProps {
  login_id: string
}

export const getCheckLoginId = async ({ login_id }: GetCheckLoginIdProps) =>
  await userClient(`/check?login_id=${login_id}`)

export const getMe = userClient.get<null>('/me')

export interface GetUserRes {
  login_id: string
  name: string
  gender_cd: number
  email: string
  family_num: number
  birthday: string
}

export const getUser = userClient.get<GetUserRes>('')

export interface PostCodeProps {
  email: string
}

export const postCode = async (props: PostCodeProps) =>
  await userClient.post('/verification-code', props)

export interface PostEmailProps {
  email: string
  auth_number: string
}

export const postEmail = async (props: PostEmailProps) =>
  await userClient.post('/email', props)

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
  gender_cd: '1' | '2'
  email: string
  family_num: number
  birthday: string
}

export const postSignup = async (props: PostSignupProps) =>
  await userClient.post<MutationRes, PostSignupProps>('/signup', props)
