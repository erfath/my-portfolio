import React from 'react';
import erfath2 from '../../Images/DSC_3172-removebg-preview (2).png'
import erfath from '../../Images/DSC_2761-removebg-preview.png'

const Home = () => {
    return (
        <div>
            <div class="hero lg:h-screen bg-accent">
                <div class="hero-content flex-col lg:justify-between lg:flex-row-reverse">
                    <img src={erfath} class="lg:max-w-lg max-w-xs rounded-lg lg:shadow-2xl" />
                    <div className='text-left'>
                        <h1 class="lg:text-6xl text-3xl font-serif text-left  text-white">Hello! I'm</h1>
                        <h1 class="lg:text-6xl text-3xl text-left  font-serif text-white">Erfath Parvez</h1>
                        <h1 class="lg:text-3xl text-2xl my-10 text-left text-secondary">Jr. Web Developer</h1>
                        <button class="btn px-10 rounded-full btn-nuetral border-info ">Get Resume</button>
                    </div>
                </div>
            </div>
        </div>

    );
};
export default Home;