import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

import App from './App.tsx'
import Home from './pages/Home.tsx'
import Projects from './pages/Projects.tsx'
import Math from './pages/Math.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    // TO DO: create a not found page
    <Route element={<App />}>
      <Route path='/' element={<Home />} /> 
      <Route path='/projects' element={<Projects />} />
      <Route path='/teaching' element={<Math />} /> 
    </Route>
  )
)

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} /> 
)
