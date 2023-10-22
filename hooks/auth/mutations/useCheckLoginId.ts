import { useMutation } from '@tanstack/react-query'

import { getCheckLoginId, type GetCheckLoginIdProps } from '@/apis/user'

export const useCheckLoginId = () =>
  useMutation({
    mutationFn: async (props: GetCheckLoginIdProps) =>
      await getCheckLoginId(props),
  })
