import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter  } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import PageNotFound from './Pages/PageNotFound'

interface errMessages{
  pageNotFound: string;
  resourceNotFound: string;
}

const router = createBrowserRouter([
{
  path:'/home',
  element: <Home />,
  errorElement: <div>404 not found</div>
},  
{
  path:'/users',
  element: <Users />
},
{
  path:'/posts',
  element: <Posts />
},
{
  path:'/register',
  element: <Register />
},
{
  path:'*',
  element: <PageNotFound />
}
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
