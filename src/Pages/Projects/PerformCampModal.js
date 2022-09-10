import React from 'react';
import { Icon } from '@iconify/react';

const PerformCampModal = () => {
    return (
        <div>
            <input type="checkbox" id="PerformCampModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box bg-slate-700 relative  px-2">
                    <label htmlFor="PerformCampModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-2xl font-bold lg:mb-6 mb-3 text-yellow-500">PerformCamp</h3>
                    <div className='text-start text-lg text-white'>
                        <ul className='list-disc'>
                            <p className='text-xl font-bold text-yellow-200'>Features of home site:</p>
                            <li className='ml-8'>Visitor can contact directly via live chat, contact form is connected by EmailJS.</li>
                            <li className='ml-8'>Any client can buy services from home site and can pay with stripe payment gateway.</li>
                        </ul>
                        <ul className='list-disc'>
                            <p className='text-xl font-bold text-yellow-200 mt-2'>Features of Client demo site:</p>
                            <li className='ml-8'>Manager can give task to any employee, edit or delete any task and can review, feedback, and
                                ratings to employee’s task and manager can also add new member in his team.</li>
                            <li className='ml-8'>Employee can see all tasks with a deadline in a calendar and all details of assigned tasks.</li>
                            <li className='ml-8'>After completing task employee can send it to the manager with a proof.</li>
                            <li className='ml-8'>Employee can see all reviews, feedbacks, and ratings given by the manager.</li>
                        </ul>
                    </div>
                    <p className='mt-2 lg:text-start text-lg text-gray-300'><i><b className='text-xl font-bold text-yellow-200'>Technologies:</b> React.js, Express.js, TypeScript, MongoDB , Tailwind CSS, daisyUI, Headless UI, EmailJS, Stripe, Firebase.</i></p>
                    <div className='grid lg:grid-cols-3 grid-cols-2 lg:gap-5 gap-2 mt-5'>
                        <a href='https://performcamp-home.web.app/' target='_blank' class="btn btn-outline btn-primary  btn-sm">LIVE SITE <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                        </svg>
                        </a>
                        <a href='https://performcamp-8967f.web.app/' target='_blank' class="btn btn-outline btn-secondary btn-sm">DEMO SITE <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                        </svg>
                        </a>
                        <a href='https://github.com/saklain71/performcamp' target='_blank' class="btn btn-outline btn-accent btn-sm">CLIENT CODE <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                        </svg>
                        </a>
                        <a href='https://github.com/rashedsabbir/PerformCamp-Service' target='_blank' class="btn btn-outline btn-secondary btn-sm">DEMO CODE <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                        </svg></a>
                        <a href='https://github.com/rashedsabbir/PerformCamp-Service-Server' target='_blank' class="btn btn-outline btn-info btn-sm px-2">SERVER CODE<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                        </svg></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PerformCampModal;