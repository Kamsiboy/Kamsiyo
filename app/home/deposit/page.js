'use client'
import React from 'react'

import { useRouter } from 'next/navigation';
import { BsBank2 } from "react-icons/bs";

const page = () => {
    const router = useRouter();

  return (
    <div className='w-[90%] md:w-[70%] m-auto mb-2 mt-3'>
        <p className='font-semibold text-[1.1rem] mb-3'>Deposit</p>
        <p >payment Method</p>
        <div className='flex justify-between w-[100%] bg-[#dbd9d9] border-[#8f8f8f] border-2 p-2 rounded-lg'>
            <div className='flex'>
                <BsBank2 className='my-auto'/>
                <p className='ml-2'>Online bank transfer</p>
            </div>
            <p >NGN</p>
        </div>

        <br />
        <p >Amount</p>
        <input type='text' placeholder='amount' value={'3500'} className='bg-[#dbd9d9] border-[#8f8f8f] border-2 p-2 rounded-lg w-[100%] outline-none'/>
        <br />

        <div className='bg-[#dbd9d9] border-[#8f8f8f] border-2 p-2 rounded-lg mt-[20%]'>
            <p >to be deposited</p>
            <p className='font-bold'>3,500 NGN</p>
        </div>

        <button type='submit' className='block mt-9 bg-[#4a4af1] hover:bg-white border-2 border-[#4a4af1] hover:text-black text-white transition w-[50%]  m-auto rounded-lg py-3 mb-3' onClick={() => router.push('/home/deposit/pay')}>Confirm</button>
    </div>
  )
}

export default page