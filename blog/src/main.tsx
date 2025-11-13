import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter, Navigate  } from 'react-router-dom'

import './index.css'

import App from './App.tsx'
import PageNotFound from './pages/PageNotFound/'

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
      element: <Home />
    },
    {
      path: 'users',
      element: <Users />

    },
    {
      path: 'posts',
      element: <Posts />
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
