import { userClient } from '../client'

export interface GetCheckLoginIdProps {
  login_id: string
}

export const getCheckLoginId = async ({ login_id }: GetCheckLoginIdProps) =>
  await userClient(`/check?login_id=${login_id}`)
