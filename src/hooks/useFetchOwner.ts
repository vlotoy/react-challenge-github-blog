import { useCallback, useEffect, useState } from 'react'
import { api } from '../lib/api'

export function useFetchOwner() {
  interface Owner {
    name: string
    htmlUrl: string
    avatarUrl: string
    bio?: string
    login: string
    company?: string
    followers: number
  }

  const [ownerInfo, setOwnerInfo] = useState<Owner>()

  const fetchOwner = useCallback(async () => {
    const { data } = await api.get('/users/vlotoy')

    setOwnerInfo({
      name: data.name,
      avatarUrl: data.avatar_url,
      followers: data.followers,
      htmlUrl: data.html_url,
      login: data.login,
      bio: data?.bio,
      company: data?.company,
    })
  }, [])

  useEffect(() => {
    fetchOwner()
  }, [fetchOwner])

  return ownerInfo
}
