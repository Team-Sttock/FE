import { useMutation } from '@tanstack/react-query'

import { postCheckCode, type PostCheckCodeProps } from '@/apis/user'

export const useCheckCode = () =>
  useMutation({
    mutationFn: async (props: PostCheckCodeProps) => await postCheckCode(props),
  })
