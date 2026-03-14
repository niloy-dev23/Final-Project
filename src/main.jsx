import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import RootLayout from './RootLayout.jsx'
import Home from './Pages/Home.jsx'
import Projects from './Pages/Projects.jsx'
import Awards from './Pages/Awards.jsx'
import Testimonials from './Pages/Testimonials.jsx'
import Blog from './Pages/Blog.jsx'
import Contact from './Pages/Contact.jsx'
import Experience from './Pages/Experience.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout,
    children:[
      {index:true, Component:Home},
      {path:"projects", Component:Projects},
      {path:"awards", Component:Awards},
      {path:"testimonials", Component:Testimonials},
      {path:"blog", Component:Blog},
      {path:"contact", Component:Contact},
      {path:"experience", Component:Experience}


    ]
  }
])

createRoot(document.getElementById('root')).render(
    
      <RouterProvider router={router}/>
  
)
