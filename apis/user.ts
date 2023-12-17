import { client, type MutationRes } from '.'

export interface PostCheckLoginIdProps {
  login_id: string
}

export const postCheckLoginId = async ({ login_id }: PostCheckLoginIdProps) => {
  return await client.post(`/user/check?login_id=${login_id}`, {})
}

export interface GetUserRes {
  login_id: string
  name: string
  gender_cd: number
  email: string
  family_num: number
  birthday: string
}

export const getUser = async () => await client.get<GetUserRes>('/user')

export interface PostCodeProps {
  email: string
}

export const postCode = async (props: PostCodeProps) =>
  await client.post('/user/email/verification-code', props)

export interface PostCheckCodeProps {
  email: string
  auth_number: string
}

export const postCheckCode = async (props: PostCheckCodeProps) =>
  await client.post('/user/email/check-verification-code', props)

export interface PostFindLoginIdProps {
  email: string
}

export interface PostFindLoginIdRes {
  loginId: string
}

export const postFindLoginId = async (props: PostFindLoginIdProps) =>
  await client.post<PostFindLoginIdRes>('/user/loginId', props)

export interface PostTempPasswordProps {
  login_id: string
  email: string
}

export const postTempPassword = async (props: PostTempPasswordProps) =>
  await client.post<MutationRes>('/user/temp-password', props)

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
  await client.post<MutationRes>('/user/signup', props, {
    headers: {
      'Content-Type': 'application/json',
    },
  })

export interface PatchUserProps {
  login_id: string
  name: string
  gender_cd: number
  email: string
  family_num: number
  birthday: string
}

export const patchUser = async (props: PatchUserProps) =>
  await client.patch<MutationRes>('/user', props, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
