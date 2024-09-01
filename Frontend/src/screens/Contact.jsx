import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { LuLinkedin } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Contact = () => {
    const [names, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = () => {
        if (names == "" || email == "" || message == "") {
            return toast.error("All fields are required")
        }
        return toast.success("Request sent successfully")
    }
    return (
        <div className='flex flex-col justify-center items-center'>
            <Navbar />
            <div className='max-sm:min-w-[95%] lg:min-w-[60%] bg-gray-400 rounded-md shadow-xl my-28'>
                <div className='flex justify-center items-center text-3xl font-bold text-cyan-900 py-5'>
                    <h1>Contact us</h1>
                </div>
                <div className='flex flex-col gap-6 px-10 lg:px-20'>

                    <input type='text' value={names} onChange={(e) => setName(e.target.value)} placeholder='Enter your name...' className='py-3 lg:py-2 px-3 rounded-sm' />

                    <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email...' className='py-3 lg:py-2 px-3 rounded-sm' />

                    <input type='textarea' value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Enter your message...' className='py-3 lg:py-2 px-3 rounded-sm' />

                    <button className='bg-cyan-500 hover:bg-cyan-700 duration-200 rounded-sm py-1 text-slate-900 text-xl ' onClick={handleSubmit}>Submit</button>
                </div>
                <div className="flex flex-col justify-center items-center my-8 gap-5">
                    <p className='text-2xl font-bold text-cyan-900'>- - - OR - - -</p>
                    <div className='flex gap-16 justify-center items-baseline'>
                        <a href='https://www.facebook.com/' target='_blank'><FaFacebook size={40} className='text-blue-600' /></a>
                        <a href='' target='_blank'><FaInstagramSquare size={40} className='text-red-600' /></a>
                        <a href='' target='_blank'><LuLinkedin size={40} className='text-blue-600' /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact