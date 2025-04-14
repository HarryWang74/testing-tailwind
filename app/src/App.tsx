import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout  from './Layout' 
import { Landing, Colors, Spacing } from './pages'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'colors/',
        element: <Colors />,
      },
      {
        path: 'spacing/',
        element: <Spacing />,
      },
    ],
  },
])
function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>

  )
}

export default App
