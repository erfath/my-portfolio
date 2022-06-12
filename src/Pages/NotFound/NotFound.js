import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../Images/404-error.webp'

const NotFound = () => {
    return (
        <div className='flex flex-row justify-center items-center'>
            <div>
                <h2 className='text-4xl text-error'>Oppppps!</h2>
                <h2 className='text-4xl text-error'>The Page You Are Looking For Is Not Here</h2>
                <Link to='/home' class="btn my-10 px-10 rounded-full btn-nuetral border-info">Go Back To Home</Link>
            </div>
            <div>
                <img src={error} alt="" />
            </div>
            
        </div>
    );
};

export default NotFound;