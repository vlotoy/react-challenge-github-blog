import { ReactNode, useCallback, useEffect, useState } from 'react'
import { PostContext } from '.'
import { api } from '../lib/api'

export interface Post {
  id: number
  title: string
  comments: number
  createdAt: string
  body: string
  htmlUrl: string
}

interface PostContextProviderProps {
  children: ReactNode
}

export interface PostContextType {
  posts: Post[]
  fetchPosts: (query?: string) => Promise<void>
}

export function PostContextProvider({ children }: PostContextProviderProps) {
  const [posts, setPosts] = useState<Post[]>([])

  const fetchPosts = useCallback(async (query?: string) => {
    const { data } = await api.get('/search/issues', {
      params: {
        q: `${query ?? ''} repo:vlotoy/react-challenge-github-blog`,
      },
    })

    interface ApiResponseItem {
      id: number
      title: string
      comments: number
      created_at: string
      html_url: string
      body: string
    }

    setPosts(
      data.items.map((item: ApiResponseItem) => {
        const newPost: Post = {
          id: item.id,
          title: item.title,
          comments: item.comments,
          createdAt: item.created_at,
          htmlUrl: item.html_url,
          body: item.body,
        }
        return newPost
      })
    )
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  return (
    <PostContext.Provider value={{ posts, fetchPosts }}>
      {children}
    </PostContext.Provider>
  )
}
