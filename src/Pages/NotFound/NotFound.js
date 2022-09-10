import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../Images/404-error.webp'

const NotFound = () => {
    return (
        <div className='flex lg:flex-row flex-col-reverse justify-center items-center  bg-slate-800'>
            <div className='px-3'>
                <h2 className='text-4xl text-error'>Oppppps!</h2>
                <h2 className='lg:text-4xl text-2xl text-error mt-5'>The Page You Are Looking For Is Not Here</h2>
                <Link to='/home' class="btn px-10 lg:my-10 my-5 rounded-full bg-yellow-500 text-black hover:bg-slate-900 hover:text-white hover:border-purple-700 font-bold">Go Back To Home</Link>
            </div>
            <div>
                <img src={error} alt="" />
            </div>
            
        </div>
    );
};

export default NotFound;