import React from 'react';
import img1 from '../../Images/banner.jpg'
import img2 from '../../Images/banner3.jpg'
import img3 from '../../Images/four.jpg'
import img4 from '../../Images/Cover Photo.png'

const Projects = () => {
    return (
        <div className='lg:p-20'>
            <h2 className=' text-4xl text-white py-10 font-serif font-semibold'>My Recent Projects</h2>
            <div className='lg:grid grid-cols-3'>
                <div class="card w-96 bg-accent text-secondary shadow-xl">
                    <figure class="">
                        <img src={img3} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-white">Bro's Auto Parts</h2>
                        <p>A website for Car parts manufacturer. Customer's can easily make orders.</p>
                        <div class="card-actions">
                            <button class="btn px-10 rounded-full btn-nuetral border-info ">Explore Now</button>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-accent text-secondary shadow-xl">
                    <figure class="">
                        <img src={img2} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-white">The Lens King</h2>
                        <p>A Photographer's professional website. Clients can make reservation for photoshoot.</p>
                        <div class="card-actions">
                            <button class="btn px-10 rounded-full btn-nuetral border-info">Explore Now</button>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-accent text-secondary shadow-xl">
                    <figure class="">
                        <img src={img1} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-white">Biker's World</h2>
                        <p>It’s a web application for warehouses. Dealer can manage his warehouse easily.</p>
                        <div class="card-actions">
                            <button class="btn px-10 rounded-full btn-nuetral border-info ">Explore Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;