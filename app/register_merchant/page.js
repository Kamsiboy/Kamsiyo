'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { setMerchantData } from '../redux/merchantSlice';

const Page = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [bankName, setBankName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setMerchantData({ username, mobileNumber, accountNumber, bankName, password }));

        router.push('home')
    };

    return (
        <form onSubmit={handleSubmit} className='w-[80%] md:w-[50%] m-auto mt-10 mb-10'>
            <p className='text-center font-semibold text-[1.3rem]'>Create a merchant account</p>
            <p className='mt-3 mb-2'>username:</p>
            <input 
                type='text' 
                required 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className=' rounded-lg bg-[#e2e2e2] border-[#878888] border-2 p-3 w-[100%] outline-none focus:scale-105 transition focus:border-[#4a4af1]'
            />
            <p className='mt-3 mb-2'>mobile number:</p>
            <input 
                type='text' 
                required 
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                className=' rounded-lg bg-[#e2e2e2] border-[#878888] border-2 p-3 w-[100%] outline-none focus:scale-105 transition focus:border-[#4a4af1]'
            />
            <br />
            <p className='mb-2 mt-2 font-semibold'>Account Details:</p>
            <p className='mb-2'>Account number:</p>
            <input 
                type='text' 
                required 
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                className=' rounded-lg bg-[#e2e2e2] border-[#878888] border-2 p-3 w-[100%] outline-none focus:scale-105 transition focus:border-[#4a4af1]'
            />
            <p className='mt-3 mb-2'>Bank Name:</p>
            <input 
                type='text' 
                required 
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
                className=' rounded-lg bg-[#e2e2e2] border-[#878888] border-2 p-3 w-[100%] outline-none focus:scale-105 transition focus:border-[#4a4af1]'
            />
            <p className='mt-3 mb-2'>password:</p>
            <input 
                type='text' 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className=' rounded-lg bg-[#e2e2e2] border-[#878888] border-2 p-3 w-[100%] outline-none focus:scale-105 transition focus:border-[#4a4af1]'
            />
            <button type='submit' className='block mt-6 bg-[#4a4af1] hover:bg-white hover:border-2 border-[#4a4af1] hover:text-black text-white transition w-[50%]  m-auto rounded-lg py-3 mb-3'>register</button>
            <p className='text-center my-1'>want to create a customer account ? <span className='text-[#4a4af1] cursor-pointer' onClick={() => router.push('/register_customer')}>go ahead</span></p>
        </form>
    );
};

export default Page;
