import useSWRMutation from 'swr/mutation'
import useSWR from 'swr'
import { sendRequest } from '@/helpers/sendRequest'
import { useUser } from '../useUser/useUser'
import { Preference } from './preference.mode'
import { fetcher } from '@/helpers/fetcher'

export const usePreference = () => {
  const { user, isLoggedIn } = useUser()
  const uuid = user.email
  const { data, isLoading } = useSWR<Preference[]>(`/api/getPreference/${uuid}`, fetcher)
  const { trigger, isMutating } = useSWRMutation('/api/createPreference', sendRequest)
  return {
    isLoggedIn,
    isMutating,
    trigger,
    user,
    isLoading,
    data
  }
}
