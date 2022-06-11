import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import About from '../About/About';
import Footer from '../Footer/Footer';
import GetInTouch from '../GetInTouch/GetInTouch';
import Home from '../Home/Home';
import Projects from '../Projects/Projects';
import logo from '../../Images/epbg.png'

const Navbar = () => {
    return (
        <div class="drawer">
            <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col">
                {/* <!-- Navbar --> */}
                <div class="w-full navbar sticky top-0 z-50 bg-neutral text-secondary font-semibold">

                    <div class="flex-1 px-2 mx-2"><img src={logo} className='w-40' alt="" /></div>
                    <div class="flex-none hidden lg:block">
                        <ul class="menu menu-horizontal">
                            {/* <!-- Navbar menu content here --> */}
                            <li><NavLink to="/home">Home</NavLink></li>
                            <li><NavLink to="/blogs">Blogs</NavLink></li>
                            <li><NavLink to="/about">About Me</NavLink></li>
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
                <Home></Home>
                <About></About>
                <Projects></Projects>
                <GetInTouch></GetInTouch>
                <Footer></Footer>
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