import { useMutation } from '@tanstack/react-query'

import { postCheckLoginId, type PostCheckLoginIdProps } from '@/apis/user'

export const useCheckLoginId = () =>
  useMutation({
    mutationFn: async (props: PostCheckLoginIdProps) =>
      await postCheckLoginId(props),
  })
