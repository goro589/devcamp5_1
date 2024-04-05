import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Root from './routes/root.jsx'
import About from './routes/about.jsx'
import Job from './routes/job.jsx'
import Portfolio from './routes/portfolio.jsx'
import Skill from './routes/skill.jsx'




const router = createBrowserRouter([
{
    path: "/",
    element:<Root />,
    children: [
      {
        path: "/About",
        element:<About />
      },
      {
        path: "/Job",
        element:<Job />
      },
      {
        path: "/Portfolio",
        element:<Portfolio />
      },
      {
        path: "/Skill",
        element:<Skill />
      },
    ]
},
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
