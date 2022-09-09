import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import InputField from '../Contact/InputField';
import TextareaField from '../Contact/TextareaField';


const GetInTouch = () => {

    const [values, setValues] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send('service_ut423sk', 'template_qo66hmk', values, '6no55W0itL0QlAXQu')
            .then(response => {
                console.log('SUCCESS!', response);
                setValues({
                    fullName: '',
                    email: '',
                    phoneNumber: '',
                    message: ''
                });
                setStatus('SUCCESS');
            }, error => {
                console.log('FAILED...', error);
            });
    }

    useEffect(() => {
        if (status === 'SUCCESS') {
            setTimeout(() => {
                setStatus('');
            }, 3000);
        }
    }, [status]);

    const handleChange = (e) => {
        setValues(values => ({
            ...values,
            [e.target.name]: e.target.value
        }))
    }
    return (
        <div>
            <div className="lg:grid lg:grid-cols-2 lg:gap-6 py-5  bg-slate-800">
                <div className="flex flex-col justify-center text-center lg:p-40 md:text-left">
                    <h2 className="uppercase lg:text-3xl md:text-4xl pb-5 text-teal-200 text-2xl">DON'T BE SHY</h2>
                    <p className=" lg:font-semibold lg:text-xl text-gray-400">Feel free to get in touch with me. I am always open to discuss new projects, cretive ideas or oppottunities to be part of your visions.</p>
                    <div className='flex gap-20 mt-10 lg:p-0 p-5'>
                        <div className='flex flex-col justify-start items-start'>
                            <p className='text-white'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                                Mail Me</p>
                            <p className='text-white'>erfathparvez1@gmail</p>
                        </div>
                        <div className='flex flex-col justify-start items-start'>
                            <p className='text-white'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                                Call Me</p>
                            <p className='text-white'>+8801873844252</p>
                        </div>
                    </div>
                </div>
                <div className=" w-full pt-6 pb-8  shadow-xl rounded p-5">
                    {status && renderAlert()}
                    <form onSubmit={handleSubmit}>
                        <h1 className="uppercase text-yellow-500 text-center mb-7 lg:text-5xl text-3xl font-semibold">Get in Touch</h1>
                        <InputField value={values.fullName} handleChange={handleChange} label="Full Name" name="fullName" type="text" placeholder="John Doe" />
                        <InputField value={values.email} handleChange={handleChange} label="Email" name="email" type="email" placeholder="jphn@example.com" />
                        <InputField value={values.phoneNumber} handleChange={handleChange} name="phoneNumber" label="Phone Number" />
                        <TextareaField value={values.message} handleChange={handleChange} label="Your message here" name="message" />
                        <div className="flex justify-center">
                            <button type="submit"
                                className="btn mt-4 w-80 font-bold rounded-lg bg-yellow-500 text-black hover:bg-slate-900 hover:text-white hover:border-purple-700 px-4 py-2"
                            >Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};
const renderAlert = () => (
    <div className="px-4 py-3 leading-normal text-blue-700 bg-blue-100 rounded mb-5 text-center">
        <p>your message submitted successfully</p>
    </div>
)
export default GetInTouch;