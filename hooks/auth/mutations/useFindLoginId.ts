import { useMutation } from '@tanstack/react-query'

import { postFindLoginId, type PostFindLoginIdProps } from '@/apis/user'

export const useFindLoginId = () =>
  useMutation({
    mutationFn: async (props: PostFindLoginIdProps) =>
      await postFindLoginId(props),
  })
