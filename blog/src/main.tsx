import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter, Navigate  } from 'react-router-dom'

import './index.css'
import PageNotFound from './pages/PageNotFound/'
import Root from './routes/Root'
import Home from './routes/Home'
import Users from './routes/Users'
import UsersDetails from './routes/UsersDetails'
import Posts from './routes/Posts'
import PostDetails from './routes/PostDetails' 
import Register from './routes/Register'

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
          element: <Posts />
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
