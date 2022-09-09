import React from 'react';
import erfath from '../../Images/DSC_2761-removebg-preview.png'
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div>
        <div class="hero lg:h-screen bg-slate-800">
            <div class="hero-content flex-col lg:justify-between lg:flex-row-reverse">
                <img src={erfath} class="lg:max-w-lg max-w-xs rounded-lg lg:shadow-2xl" />
                <div className='text-left'>
                    <h1 class="lg:text-6xl text-3xl font-serif text-left  text-white">Hello! I'm</h1>
                    <h1 class="lg:text-6xl text-3xl text-left  font-serif text-white">Erfath Parvez</h1>
                    <h1 class="lg:text-3xl text-2xl my-10 text-left text-gray-400">Jr. Web Developer</h1>                        
                    <a class="btn px-10 rounded-full bg-yellow-500 text-black hover:bg-slate-900 hover:text-white hover:border-purple-700 font-bold" href="https://drive.google.com/file/d/1kiuJWt_Zb_E2iQoae27EvO9D_7_tWXew/view?usp=sharing" target="blank">Get Resume</a>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Banner;