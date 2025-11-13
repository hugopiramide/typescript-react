import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter, Navigate  } from 'react-router-dom'

import './index.css'
import PageNotFound from './pages/PageNotFound/'
import Root from './routes/Root'
import Home from './routes/Home'

const router = createBrowserRouter([
{
  path:'/',
  element: <Root />,
  errorElement: <PageNotFound />, 
  children: [
    {
      index: true,
      element: <Navigate to='/home' />
    },
    {
      path: 'home',
      element: <Home />,
    },
    {
      path: 'users',
        children: [
          {
            index: true,
            element: <Users />
          },
          {
            path: ':userId',
            element: <UsersDetails />
          },
        ]
    },
    {
      path: 'posts',
      children: [
        {
          index: true,
          element: <Post />
        },
        {
          path:':postId',
          element: <PostDetails />
        },
      ]
    },
    {
      path: 'register',
      element: <Register />
    }]
  },
  {
    path: '*',
    element: <PageNotFound />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
