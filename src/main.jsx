import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'  
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import LoginForm from './components/Login/LoginForm.jsx'
import Profile from './components/Profile/Profile.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home/>
      },
      {
        path: 'about',
        element: <About/>
      },
      {
        path: 'login',
        element: <LoginForm/>
      },
      {
        path: 'profile',
        element: <Profile/>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
