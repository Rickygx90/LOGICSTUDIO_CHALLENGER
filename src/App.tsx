import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Echo } from './react/Echo'
import { Home } from './Home'
import { Lista } from './react/Lista'
import { Counter } from './react/Counter'
import { Stopwatch } from './react/Stopwatch'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <div>ERROR</div>,
  },
  {
    path: '/echo',
    element: <Echo />
  },
  {
    path: '/lista',
    element: <Lista />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/stopwatch',
    element: <Stopwatch />
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
