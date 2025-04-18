import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout  from './Layout' 
import {
  Landing,
  Colors,
  Spacing,
  Typography,
  Sizing,
  PositionDisplayZindex,
  DropShadow,
  Border,
  Interactive,
  BreakPoints,
  Flex,
} from './pages'


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
      {
        path: 'typography/',
        element: <Typography />,
      },
      {
        path: 'sizing/',
        element: <Sizing />,
      },
      {
        path: 'position/',
        element: <PositionDisplayZindex />,
      },
      {
        path: 'dropshadow/',
        element: <DropShadow />,
      },
      {
        path: 'border/',
        element: <Border />,
      },
      {
        path: 'interactive/',
        element: <Interactive />,
      },
      {
        path: 'breakpoints/',
        element: <BreakPoints />,
      },
      {
        path: 'flex/',
        element: <Flex />,
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
