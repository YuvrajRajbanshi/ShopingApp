

import Navbar from './Nav/Navbar'
import Home from './components/Pages/Home'
import { Outlet } from "react-router-dom"
import Women from './components/Pages/Women'
import Men from './components/Pages/Men'
import Footer from './footer/Footer'

function App() {

  return (
    <>


      <Navbar />
      <Outlet >
        <Home />
        <Women />
        <Men />
      </Outlet>
      <Footer />




    </>
  )
}

export default App
