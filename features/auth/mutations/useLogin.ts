import { useMutation } from '@tanstack/react-query'

import { postLogin, type PostLoginProps } from '@/apis/auth/postLogin'

export const useLogin = () =>
  useMutation({
    mutationFn: async (props: PostLoginProps) => await postLogin(props),
  })
