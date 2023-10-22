import { useMutation } from '@tanstack/react-query'

import { postCode, type PostCodeProps } from '@/apis/user/postCode'

export const useEmailCode = () =>
  useMutation({
    mutationFn: async (props: PostCodeProps) => await postCode(props),
  })
