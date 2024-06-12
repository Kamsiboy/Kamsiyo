'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { setCustomerData } from '../redux/customerSlice';
import { selectCustomer } from '../redux/customerSlice'
const Page = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [businessName, setBusinessName] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setCustomerData({ businessName, mobileNo, password }));

        router.push('/home')
    };
    const customer = useSelector(selectCustomer);
    const [loggedIn, setloggedIn] = useState(customer.businessName);
    // manual auth: using the logged in data 
    const auth = () => {
        if (!loggedIn) {
            router.push('/register_customer')
        } else {
            router.push('/home')
        }
    }
    useEffect(() => {
        auth();
    },[loggedIn]);

    return (
        <div className='mb-5'>
            <p className='text-center mt-5 font-bold text-[1.2rem]'>Create a customer account</p>
            <form onSubmit={handleSubmit} className='w-[80%] md:w-[60%] m-auto'>
                <p className='mt-2 ml-3'>Business name</p>
                <input 
                    type='string' 
                    placeholder='business name' 
                    value={businessName}
                    required
                    onChange={(e) => setBusinessName(e.target.value)}
                    className='ml-3 rounded-lg bg-[#e2e2e2] border-[#878888] border-2 p-3 w-[90%] outline-none focus:scale-105 transition'
                />
                <br /><br />
                <p className='ml-3'>Mobile No.</p>
                <input 
                    type='string' 
                    placeholder='+234' 
                    value={mobileNo}
                    required
                    onChange={(e) => setMobileNo(e.target.value)}
                    className='ml-3 rounded-lg bg-[#e2e2e2] border-[#878888] border-2 p-3 w-[90%] outline-none focus:scale-105 transition'
                />
                <br /><br />
                <p className='ml-3'>Password</p>
                <input 
                    type='password' 
                    placeholder='password' 
                    value={password}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    className='ml-3 rounded-lg bg-[#e2e2e2] border-[#878888] border-2 p-3 w-[90%] outline-none focus:scale-105 transition'
                />
                <br /><br />
                <button type='submit' className='block mt-3 bg-[#4a4af1] hover:bg-white border-2 border-[#4a4af1] hover:text-black text-white transition w-[50%]  m-auto rounded-lg py-3 mb-3'>Confirm</button>
            </form>
            <p className='text-center my-1'>want to create a merchant account ? <span className='text-[#4a4af1] cursor-pointer' onClick={() => router.push('/register_merchant')}>go ahead</span></p>
        </div>
    );
};

export default Page;
