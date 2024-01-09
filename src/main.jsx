import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from "react-router-dom"
import Home from './components/Pages/Home.jsx'
import Men from './components/Pages/Men.jsx'
import Women from './components/Pages/Women.jsx'

// const router = createBrowserRouter([{

//   path: "/",
//   element: <App />,
//   children: [
//     {
//       path: "/",
//       element: <Home />

//     },
//     {
//       path: "women",
//       element: <Women />

//     },
//     {
//       path: "men",
//       element: <Men />

//     },

//   ]


// }])

const router = createBrowserRouter(

  createRoutesFromElements(
    <Route path='/' element={<App />} >

      <Route path='home' element={<Home />} />
      <Route path='women' element={<Women />} />
      <Route path='men' element={<Men />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
