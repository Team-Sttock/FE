import { useMutation } from '@tanstack/react-query'

import { patchUser, type PatchUserProps } from '@/apis/user'

export const usePatchUser = () =>
  useMutation({
    mutationFn: async (props: PatchUserProps) => await patchUser(props),
  })
