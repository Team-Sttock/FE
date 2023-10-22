import { userClient } from '../client'

interface GetUserRes {
  login_id: string
  name: string
  gender_cd: number
  email: string
  family_num: number
  birthday: string
}

export const getUser = userClient.get<GetUserRes>('')
