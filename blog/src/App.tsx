import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'

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
}
])

function App() {
  return (
    <>
      <Header />
        
      <Footer />
    </>
  )
}

export default App
