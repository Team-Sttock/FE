import { useMutation } from '@tanstack/react-query'

import { deleteUser } from '@/apis/user'

export const useDeleteUser = () =>
  useMutation({
    mutationFn: async () => await deleteUser(),
  })
