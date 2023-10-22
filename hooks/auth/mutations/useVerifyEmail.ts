import { useMutation } from '@tanstack/react-query'

import { postEmail, type PostEmailProps } from '@/apis/user'

export const useVerifyEmail = () =>
  useMutation({
    mutationFn: async (props: PostEmailProps) => await postEmail(props),
  })
