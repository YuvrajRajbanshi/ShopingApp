import React from 'react'
import { Link, NavLink } from "react-router-dom"
const Navbar = () => {
    return (
        <>
            <div>
                <nav className=' flex items-center justify-center  gap-10'>
                    <Link to="/" >Home</Link>
                    <Link to="/men">Men</Link>
                    <Link to="/women" >women</Link>
                    {/* <Link></Link> */}
                </nav>
            </div>

        </>
    )
}

export default Navbar


