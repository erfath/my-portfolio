import React from 'react';
import img1 from '../../Images/banner.jpg'
import img2 from '../../Images/banner3.jpg'
import img3 from '../../Images/four.jpg'
import img4 from '../../Images/first_banner (1).jpg'
import './Projects.css'
import LensKingModal from './LensKingModal';
import BikersWorldModal from './BikersWorldModal';
import AutoPartsModal from './AutoPartsModal';
import PerformCampModal from './PerformCampModal';

const Projects = () => {
    return (
        <div className='lg:p-20'>
            <h2 className='text-4xl px-2 text-white py-10 font-serif font-semibold'>My Recent Projects</h2>
            <div className='grid lg:grid-cols-3 grid-cols-1 lg:px-0 px-3  gap-20'>
                <div class="card lg:w-96 bg-slate-800 text-secondary shadow-xl mb-10 zoomIn">
                    <figure class="">
                        <img src={img4} alt="Shoes" class="rounded-t-lg" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-yellow-500">PerformCamp</h2>
                        <p class="text-white">A full stack project on A Company employee’s performance based evaluation. It was a team project. There are two live sites. One for companies own, another is demo for clients.</p>
                        <div class="card-actions">
                            <label htmlFor="PerformCampModal" target="_blank" class="btn px-10 bg-yellow-500 text-black hover:bg-slate-900 hover:text-white hover:border-purple-700 ">Explore Now</label>
                        </div>
                        
                    </div>
                </div>
                <div class="card lg:w-96 bg-slate-800 text-secondary shadow-xl mb-10 zoomIn">
                    <figure class="">
                        <img src={img3} alt="Shoes" class="rounded-t-lg" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-yellow-500">Bro's Auto Parts</h2>
                        <p class="text-white">A website for Car parts manufacturer. Customer's can easily make orders.</p>
                        <div class="card-actions">
                            <label htmlFor="AutoPartsModal" target="_blank" class="btn px-10 bg-yellow-500 text-black hover:bg-slate-900 hover:text-white hover:border-purple-700">Explore Now</label>
                        </div>
                        
                    </div>
                </div>
                <div class="card lg:w-96 bg-slate-800 text-secondary shadow-xl mb-10 zoomIn">
                    <figure class="">
                        <img src={img1} alt="Shoes" class="rounded-t-lg" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-yellow-500">Biker's World</h2>
                        <p class="text-white">It's a web application for warehouses. Dealer can manage his warehouse easily.</p>
                        <div class="card-actions">
                            <label htmlFor="BikersWorldModal" target="_blank" class="btn px-10 bg-yellow-500 text-black hover:bg-slate-900 hover:text-white hover:border-purple-700 ">Explore Now</label>
                        </div>
                       
                    </div>
                </div>
                <div class="card lg:w-96 bg-slate-800 text-secondary shadow-xl mb-10 zoomIn">
                    <figure class="">
                        <img src={img2} alt="Shoes" class="rounded-t-lg" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-yellow-500">The Lens King</h2>
                        <p class="text-white">A Photographer's professional website. Clients can make reservation for photoshoot.</p>
                        <div class="card-actions">
                            <label htmlFor="my-modal-3" class="btn px-10 bg-yellow-500 text-black hover:bg-slate-900 hover:text-white hover:border-purple-700">Explore Now</label>
                        </div>
                       
                    </div>                   
                </div>
            </div>
        </div>
    );
};

export default Projects;