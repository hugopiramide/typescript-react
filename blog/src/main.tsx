import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter, Navigate  } from 'react-router-dom'

import PageNotFound from './pages/PageNotFound/'
import ErrorPage from './pages/ErrorPage'
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
  errorElement: <ErrorPage />, 
  children: [
    {
      index: true,
      element: <Navigate to='/home' />
    },
    {
      path: 'home',
      element: <Home />,
      loader: Home.loader
    },
    {
      path: 'users',
        children: [
          {
            index: true,
            element: <Users />,
            loader: Users.loader
          },
          {
            path: ':userId',
            element: <UsersDetails />,
            loader: UsersDetails.loader
          },
        ]
    },
    {
      path: 'posts',
      children: [
        {
          index: true,
          element: <Posts />,
          loader: Posts.loader
        },
        {
          path:':postId',
          element: <PostDetails />,
          loader: PostDetails.loader
        },
      ]
    },
    {
      path: 'register',
      element: <Register />,
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
