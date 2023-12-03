import { useQuery } from '@tanstack/react-query'

import { getUser } from '@/apis/user'

export const useUser = () => useQuery({ queryKey: ['user'], queryFn: getUser })
