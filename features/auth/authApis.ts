import { client } from '@/features/common/apis/client'

interface GetLoginProps {
  login_id: string
  password: string
}

export const getLogin = async ({ login_id, password }: GetLoginProps) =>
  await client.post<GetLoginProps>('/login', { login_id, password })
