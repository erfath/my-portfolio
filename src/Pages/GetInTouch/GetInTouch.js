import React from 'react';

const GetInTouch = () => {
    return (
        <div class="hero bg-accent">

        <div class="hero-content text-center">
            <form  class="max-w-md">
                <h2 className=' text-4xl text-white p-10 font-serif font-semibold'>Get in Touch</h2>
                <div className='flex gap-10 mb-5'>
                    <div >

                        <input type="text" placeholder="First Name" name='first' class="input w-full input-ghost text-secondary max-w-xs " />
                    </div>
                    <div>

                        <input type="text" placeholder="Last Name" name='last' class="input w-full input-ghost text-secondary max-w-xs" />
                    </div>
                </div>
                <div className='flex gap-10'>
                    <div class="form-control">

                        <input type="text" placeholder="Email Address" name='email' class="input text-secondary input-ghost w-full max-w-xs" />
                    </div>
                    <div class="form-control">

                        <input type="text" placeholder="Phone Number" name='phone' class="input w-full input-ghost text-secondary max-w-xs " />
                    </div>
                </div>
                <div class="form-control">

                    <textarea type="text" placeholder="Your Message" name='message' class="input input-ghost text-secondary mt-5" />
                </div>
                <div class="form-control mb-20 mt-6">
                    <input type="submit" value="Send Message" class="btn px-10 rounded-full btn-nuetral border-info " />
                </div>
            </form>
        </div>
    </div>
    );
};

export default GetInTouch;