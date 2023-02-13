import { fetcher } from '@/helpers/fetcher'
import { useSession } from 'next-auth/react'
import { useEffect, useMemo } from 'react'
import useSWR from 'swr'
import { User } from './user.mode'
import useSWRMutation from 'swr/mutation'
import { sendRequest } from '@/helpers/sendRequest'

const useUser = () => {
  const { data: session, status } = useSession()
  const uuid = session?.user?.email ?? 'not-logged'
  const { data, isLoading } = useSWR<User>(`/api/getUser/${uuid}`, fetcher)

  const { trigger, isMutating } = useSWRMutation('/api/createUser', sendRequest)

  const newUser = useMemo(
    () => ({
      id: session?.user?.email,
      name: session?.user?.name,
      email: session?.user?.email,
      image: session?.user?.image,
      preferences: ''
    }),
    [session]
  )

  useEffect(() => {
    const createUser = async () => await trigger(newUser)
    if (!data?.length && status === 'authenticated' && !isLoading) createUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading])

  return {
    user: data?.length ? data.at(0) : newUser,
    isLoading,
    isMutating,
    isLoggedIn: status === 'authenticated'
  }
}

export { useUser }
