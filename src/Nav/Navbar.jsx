import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
    return (
        <>
            <div className=" flex justify-between m-9  items-center">
                <img
                    src="../../images/logo.png"
                    alt="logo is just logo"
                    className=" w-[80px] h-[80px]"
                />

                <nav className=" flex items-center justify-center  gap-7">
                    <li className=" list-none font-semibold ">
                        <NavLink
                            className={({ isActive }) =>
                                `${isActive ? "text-red-400" : "text-white"
                                } transition duration-500 ease-in-out hover:text-red-400`
                            }
                            to="/"
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
                        <IoSearchOutline className=" absolute top-1 text-gray-100 text-2xl " />
                        <input
                            type="text"
                            placeholder="search here"
                            className=" text-black bg-gray-400 focus:outline-none  pl-7
                        p-1 rounded-sm

                        "
                        />
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Navbar;
