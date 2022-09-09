import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../Images/epbg.png'

const Navbar = ({children}) => {
    return (
        <div class="drawer">
            <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col">
                {/* <!-- Navbar --> */}
                <div class="w-full navbar lg:h-16 sticky top-0 z-50 bg-neutral text-secondary font-semibold">

                    <div class="flex-1 px-2 mx-2"><img src={logo} className='w-40' alt="" /></div>
                    <div class="flex-none hidden lg:block">
                        <ul class="menu menu-horizontal text-white">
                            {/* <!-- Navbar menu content here --> */}
                            <li><NavLink to="/home">Home</NavLink></li>
                            <li><NavLink to="/blogs">Blogs</NavLink></li>
                            <li><NavLink to="/contact">Contact Me</NavLink></li>
                        </ul>
                    </div>
                    <div class="flex-none lg:hidden">
                        <label for="my-drawer-3" class="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                </div>
                {/* <!-- Page content here --> */}      
                {children}          
            </div>
            <div class="drawer-side">
                <label for="my-drawer-3" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
                    {/* <!-- Sidebar content here --> */}
                    <li><NavLink to="/home">Home</NavLink></li>
                    <li><NavLink to="/blogs">Blogs</NavLink></li>
                    <li><NavLink to="/about">About Me</NavLink></li>
                    <li><NavLink to="/contact">Contact Me</NavLink></li>

                </ul>

            </div>
        </div>
    );
};

export default Navbar;