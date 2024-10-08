import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import Github, { githubInfoLoader } from './components/Github/Github'
// import Health from './components/Health/Health'
// import { Route } from 'react-router-dom'

// const router = createBrowserRouter([
//   {path: "/", element: <Layout/>,
//   children:[
//     {path: "", element: <Home/>},
//     {path: "about", element: <About/>},
//     {path: "contact", element: <Contact/>}
//  ]}
// ])  //1 style, but 2nd way of writng routers is better

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>} >
       <Route path="" element={<Home/>} />
       <Route path="about" element={<About/>} />
       <Route path="contact" element={<Contact/>} />
       <Route path="user/:userid" element={<User/>} />
       <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />}
       />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)



{/* <Header/>
      <Footer/>
      <Home/> */}