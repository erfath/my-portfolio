import { Icon } from '@iconify/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../Images/epbg.png'

const Footer = () => {
    return (
        <footer class="footer p-10 bg-neutral text-white">
            <div className='flex flex-col text-justify lg:items-start items-center'>
                <p className='text-xl'>Address</p>
                <p>Narayanhat, Fatickchari, Chittagong, Bangladesh</p>
                <p>Email:- erfathparvez1@gmail.com</p>
                <p>Cell No:- (+880) 1873-844252</p>
            </div>
            <div className='flex flex-col lg:items-start items-center'>
                <span class="footer-title">Social</span>
                <NavLink to="/blogs">Blogs</NavLink>
                <NavLink to="/contact">Contact Me</NavLink>
                <div class="grid grid-flow-col items-center gap-4 my-5">
                    <a href='https://www.linkedin.com/in/erfath-parvez-06660b241/' target="_blank"><Icon className='w-8 h-8' icon="brandico:linkedin-rect" /></a>
                    <a href='https://github.com/erfath' target="_blank"><Icon className='w-8 h-8' icon="akar-icons:github-fill" /></a>
                    <a href='https://facebook.com/erfath.envt' target="_blank" ><Icon className='w-8 h-8' icon="brandico:facebook-rect" /></a>

                </div>
                <div>
                    <p>Copyright © 2022 - All right reserved by Erfath Parvez</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;