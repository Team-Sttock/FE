import { userClient } from '../client'

export const getMe = userClient.get<null>('/me')
