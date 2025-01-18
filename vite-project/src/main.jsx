import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter } from 'react-router-dom'
import CreateTrip from './create-trip/CreateTrip'
import App from './App.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/create-trip',
    element:<CreateTrip />

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router ={router} />
  </StrictMode>,
)
