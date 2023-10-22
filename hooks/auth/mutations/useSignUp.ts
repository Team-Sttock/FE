import { useMutation } from '@tanstack/react-query'

import { postSignup, type PostSignupProps } from '@/apis/user/postSignup'

export const useSignUp = () =>
  useMutation({
    mutationFn: async (props: PostSignupProps) => await postSignup(props),
  })
