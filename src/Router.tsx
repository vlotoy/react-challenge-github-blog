import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { DefaultLayout } from './layouts/default'
import { Post } from './pages/Post'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:id" element={<Post />} />
      </Route>
    </Routes>
  )
}
