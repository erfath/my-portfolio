import React from 'react';
import cover from '../../Images/Cover Photo.png'

const About = () => {
    return (
        <div className=' lg:p-20 p-10 '>
            <div class="card lg:card-side bg-slate-800 shadow-xl">
                <figure><img src={cover} class=" lg:w-96 rounded-lg lg:shadow-2xl" alt="Movie" /></figure>
                <div class="card-body ">
                    <h2 class="font-serif font-semibold text-4xl text-yellow-500">About Me</h2>
                    <p className='text-left text-white text-xl'>I am Erfath Parvez. I am a Junior Front-end web developer. Now, I am working on frontend technologies and also working on backend technologies. I have completed some simple projects using react.js. I'm highly passionate about MERN Stack (MongoDB, Express.js, React JS, Node.js). I love to do Coding. I count myself as a hardworking person. </p>
                    <div class="card-actions justify-end">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;