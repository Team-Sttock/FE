import { useMutation } from '@tanstack/react-query'

import { postTempPassword, type PostTempPasswordProps } from '@/apis/user'

export const useTempPassword = () =>
  useMutation({
    mutationFn: async (props: PostTempPasswordProps) =>
      await postTempPassword(props),
  })
