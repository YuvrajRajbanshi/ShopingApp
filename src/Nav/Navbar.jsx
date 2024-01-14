import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx"
import { ImCross } from "react-icons/im";


const Navbar = () => {


    const [humburger, setHumburger] = useState(false)
    return (


        <>
            <div className="bg-gray-400 overflow-hidden  z-10" >
                <RxHamburgerMenu onClick={() => setHumburger(!humburger)} className={` fixed top-5 right-8 text-2xl lg:hidden cursor-pointer`} />

                <div className=" lg:flex lg:justify-between lg:items-center z-10 m-9 ">
                    <img
                        src="../../images/logo.png"
                        alt="logo is just logo"
                        className=" w-[80px] h-[80px]"
                    />

                    <nav className={`lg:flex lg:items-center lg:justify-center  lg:space-x-10  lg:space-y-0 space-y-5
                   ${humburger ? "translate-x-0 && bg-gray-400 py-2 " : `translate-x-[110%] h-0  lg:translate-x-0 transition duration-500 ease-in-out `} transition duration-500 ease-in-out
                            
                    
                      `}>
                        <li className=" list-none font-semibold ">
                            <NavLink
                                className={({ isActive }) =>
                                    `${isActive ? "text-red-400" : "text-white"
                                    } transition duration-500 ease-in-out hover:text-red-400`
                                }
                                to="/home"
                            >
                                Home
                            </NavLink>{" "}
                        </li>

                        <li className=" list-none font-semibold ">
                            <NavLink
                                className={({ isActive }) =>
                                    `${isActive ? "text-red-400" : "text-white"
                                    } transition duration-500 ease-in-out hover:text-red-400`
                                }
                                to="/men"
                            >
                                Men's
                            </NavLink>{" "}
                        </li>

                        <li className=" list-none font-semibold ">
                            <NavLink
                                className={({ isActive }) =>
                                    `${isActive ? "text-red-400" : "text-white"
                                    } transition duration-500 ease-in-out hover:text-red-400`
                                }
                                to="/women"
                            >
                                Women's
                            </NavLink>{" "}
                        </li>

                        <li className=" list-none font-semibold ">
                            <NavLink
                                className={({ isActive }) =>
                                    `${isActive ? "text-red-400" : "text-white"
                                    }  transition duration-500 ease-in-out hover:text-red-400`
                                }
                                to="/kid"
                            >
                                Kid's
                            </NavLink>{" "}
                        </li>

                        <li className=" list-none font-semibold ">
                            <NavLink
                                className={({ isActive }) =>
                                    `${isActive ? "text-red-400" : "text-white"
                                    } transition duration-500 ease-in-out hover:text-red-400`
                                }
                                to="/about"
                            >
                                About Us
                            </NavLink>{" "}
                        </li>

                        <li className=" list-none font-semibold ">
                            <NavLink
                                className={({ isActive }) =>
                                    `${isActive ? "text-red-400" : "text-white"
                                    } transition duration-500 ease-in-out hover:text-red-400 `
                                }
                                to="/contact"
                            >
                                Contact
                            </NavLink>{" "}
                        </li>

                        <div className=" relative">
                            <IoSearchOutline className=" px-1 absolute top-1 text-gray-100 text-2xl " />
                            <input
                                type="text"
                                placeholder="search here"
                                className=" text-black bg-gray-400 focus:outline-none  pl-7 border-2 border-color-gray-100
                   py-1 px-3 rounded-md
                      
                        "
                            />
                        </div>
                    </nav>
                </div >
            </div >
        </>
    );
};

export default Navbar;
