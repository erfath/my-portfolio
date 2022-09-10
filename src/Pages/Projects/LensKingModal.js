import React from 'react';

const LensKingModal = () => {
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box bg-slate-700 relative px-2">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-2xl font-bold lg:mb-6 mb-3 text-yellow-500">The Lens King</h3>
                    <div className='text-start text-lg text-white'>
                        <ul className='list-disc'>
                            <p className='text-xl font-bold text-yellow-200'>Features:</p>
                            <li className='ml-8'>A professional website for Photographer.</li>
                            <li className='ml-8'>Any visitor can browse this site.</li>
                            <li className='ml-8'>Visitor must need to login before booking any services</li>
                        </ul>
                    </div>
                    <p className='mt-2 text-start text-lg text-gray-300'><i><b className='text-xl font-bold text-yellow-200'>Technologies:</b> React.js, Netlify, React Bootstrap.</i></p>
                    <div className='grid grid-cols-2 lg:gap-5 gap-2 mt-5'>
                        <a href='https://the-lens-king.web.app/' target='_blank' class="btn btn-outline btn-primary  btn-sm">LIVE SITE <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                        </svg>
                        </a>
                        <a href='https://github.com/erfath/the-lens-king' target='_blank' class="btn btn-outline btn-accent btn-sm">CLIENT CODE <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                        </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LensKingModal;