'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { FaCheck } from "react-icons/fa";

const page = () => {
    const router = useRouter();
    const [success, setSuccess] = useState(false);
    const checkIfSuccess = () => {
        if (success) {
            setTimeout(() => {
                router.push('/home');
            }, 1000);
        }
    }
    useEffect(() => {
        checkIfSuccess();
    }, [success])
  return (
    <div className='w-[90%] md:w-[70%] m-auto mb-2 mt-3'>
        {
            success ? 
            <div >
                <br />
                <br />
                <FaCheck className='block m-auto text-[7rem] border-4 bg-green-400 text-white border-[#315d3c] rounded-full p-2'/>
                <p className='text-center text-[#4a4af1] font-bold text-[2rem]'>Success</p>
                <p className='text-center text-[#4a4af1] font-bold text-[1rem]'>NGN 3,500</p>
                <p className='mt-3 text-center text-[#4a4af1] text-[.9rem]'>To <br /> Caleb Enterprise 09</p>
            </div>
             :
            <div >
                <br />
                <br />
                <p className='text-center my-4'>Input amount to transfer</p>
                <input placeholder='amount to transfer eg: 3000' type='string' required value={'3500'} className='bg-[#dbd9d9] border-[#8f8f8f] border-2 rounded-lg block m-auto w-[80%] p-3'/>
                <br />
                <p className='text-center'>NGN 3,500</p>
            </div>
        }

        <button type='submit' className='block bg-[#4a4af1] hover:bg-white border-2 border-[#4a4af1] hover:text-black text-white transition w-[100%]  m-auto rounded-lg py-2 mb-3 mt-[10%]' onClick={() => setSuccess(!success)}>Pay</button>
    </div>
  )
}

export default page
