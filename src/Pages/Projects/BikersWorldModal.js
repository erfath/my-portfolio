import React from 'react';

const BikersWorldModal = () => {
    return (
        <div>
            <input type="checkbox" id="BikersWorldModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box bg-slate-700 relative px-2">
                    <label htmlFor="BikersWorldModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-2xl font-bold lg:mb-6 mb-3 text-yellow-500">Biker's World</h3>
                    <div className='text-start text-lg text-white'>
                        <ul className='list-disc'>
                            <p className='text-xl font-bold text-yellow-200'>Features:</p>
                            <li className='ml-8'>Login system with Email/Password or direct by Google.</li>
                            <li className='ml-8'>User can cancel orders.</li>
                            <li className='ml-8'>Admin can add or remove any products.</li>
                        </ul>
                    </div>
                    <p className='mt-2 lg:text-start text-lg text-gray-300'><i><b className='text-xl font-bold text-yellow-200'>Technologies:</b> React.js , Firebase, Heroku, React Bootstrap.</i></p>
                    <div className='grid lg:grid-cols-3 grid-cols-2 lg:gap-5 gap-2 mt-5'>
                        <a href='https://bikers-world-43bda.web.app/' target='_blank' class="btn btn-outline btn-primary  btn-sm">LIVE SITE <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                        </svg>
                        </a>
                        <a href='https://github.com/erfath/biker-s-world-client' target='_blank' class="btn btn-outline btn-accent btn-sm">CLIENT CODE <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                        </svg>
                        </a>
                        <a href='https://github.com/erfath/biker-s-world-server' target='_blank' class="btn btn-outline btn-info btn-sm px-2">SERVER CODE<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                        </svg></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BikersWorldModal;