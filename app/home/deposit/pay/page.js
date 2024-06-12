'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import UBAICON from '../../../../public/UBAICON.png'

// icons
import { GiPadlock } from "react-icons/gi";
import { BsBank2 } from "react-icons/bs";
import { AiOutlineStop } from "react-icons/ai";

const page = () => {
    const router = useRouter();
  return (
    <div className='w-[90%] md:w-[70%] m-auto mb-2 mt-3 text-[.9rem] md:text-[1rem]'>
        <div className='flex justify-center mb-8' >
            <GiPadlock className='my-auto bg-green-500 text-white text-[1.2rem] rounded-lg'/>
            <p className='ml-2'>secured by <b >flutterwave</b></p>
        </div>
        <BsBank2 className='block m-auto'/>
        <p className='text-center'>Pay NGN 3,500</p>

        <div className='bg-[#928f377b] text-center m-auto mt-3 rounded-lg w-[80%] p-3'>
            <p >Transfer exactly NGN3,500 to <br/> the bank account below</p>
        </div>
        <br />
        <div className='bg-[#928f377b] text-center m-auto mt-3 rounded-lg w-[80%] pt-3 overflow-hidden'>
            <div className='h-[4rem]'>
                <Image src={UBAICON} alt='uba icon' className='h-full w-fit block m-auto'/>
            </div>
            <p >United Bank of Africa</p>
            <p >2206919418</p>
            <p >Account name: <b >FLUTTERPAY</b></p>

            <div className='flex bg-blue-300 mt-3'>
                <AiOutlineStop className='ml-6 mr-3 my-auto text-[1.2rem] text-red-600'/>
                <p className='border-l-2 border-[black] pl-2 p-[.2rem]'>Do not save or reuse this account number</p>
            </div>
        </div>
        <br />
        <p className='text-center text-[gray] cursor-pointer'>you will get a confirmation once we<br /> receive your payment</p>

        <p className='text-center text-red-600 mt-1'>cancel</p>
        <button type='submit' className='block mt-1 bg-[#4a4af1] hover:bg-white border-2 border-[#4a4af1] hover:text-black text-white transition w-[100%]  m-auto rounded-lg py-2 mb-3' onClick={() => router.push('/home/deposit/pay/scanCode')}>Confirm</button>
    </div>
  )
}

export default page