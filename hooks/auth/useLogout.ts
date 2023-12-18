import { useMutation } from '@tanstack/react-query'

import { postLogout } from '@/apis/auth'

export const useLogout = () =>
  useMutation({
    mutationFn: async () => await postLogout(),
  })
