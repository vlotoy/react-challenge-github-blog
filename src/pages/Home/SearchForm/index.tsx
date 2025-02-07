import { ChangeEvent, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { debounce } from 'lodash'

import { Container } from './styles'
import { useContextSelector } from 'use-context-selector'
import { PostContext } from '../../../context'

const newSearchFormValidationSchema = z.object({
  query: z.string(),
})

type SearchData = z.infer<typeof newSearchFormValidationSchema>

export function SearchForm() {
  const fetchPosts = useContextSelector(
    PostContext,
    (context) => context.fetchPosts
  )

  const {
    register,
    setValue,
    formState: { errors },
  } = useForm<SearchData>({
    resolver: zodResolver(newSearchFormValidationSchema),
  })

  const debouncedFetchPostsRef = useRef(
    debounce((value: string) => {
      fetchPosts(value)
    }, 1000)
  )

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target
    setValue('query', value, { shouldValidate: true })
    debouncedFetchPostsRef.current(value)
  }

  return (
    <Container>
      <input
        type="text"
        placeholder="Buscar conteúdo"
        {...register('query', {
          onChange: handleChange,
        })}
      />
      {errors.query && <p>{errors.query.message}</p>}
    </Container>
  )
}
