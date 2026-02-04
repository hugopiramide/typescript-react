import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@fontsource/poppins/700.css"
import "@fontsource/poppins/500.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Home from './routes/Home.tsx'
import Root from './routes/Root.tsx'
import Articles from './routes/Articles.tsx'
import ArticleDetails from './routes/ArticleDetails.tsx'
import ShopingCart from './routes/ShopingCart.tsx'
import ErrorPage from './pages/ErrorPage/ErrorPage.tsx'
import PageNotFound from './pages/PageNotFound/PageNotFound.tsx'
import AuthPage from './routes/AuthPage.tsx'

const router = createBrowserRouter ([
{
  path: '/',
  element: <Root />,
  errorElement: <ErrorPage />,
  children: [
      {
        index: true,
        element: <Navigate to={"/home"}  replace />
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'articles',
        children: [
          {
            index: true,
            element: <Articles />,
            loader: Articles.loader,
          },{
            path: ':articleId',
            element: <ArticleDetails />,
            loader: ArticleDetails.loader,
          }
        ]
      },
    ]
},
{
  path: 'cart',
  element: <ShopingCart  userId={1}/>,
},
{
  path: 'auth',
  element: <AuthPage />,
},
{
  path: '*',
  element: <PageNotFound />,
}
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
