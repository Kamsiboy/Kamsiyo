'use client'
import { useRouter } from 'next/navigation'
import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { selectCustomer } from '../redux/customerSlice'
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { FaAmazonPay } from "react-icons/fa";
import { GoHistory } from "react-icons/go";
import { BsQrCode } from "react-icons/bs";

const page = () => {
    const router = useRouter();
    const customer = useSelector(selectCustomer);
    const [businessName, setBusinessName] = useState(customer.businessName);
    // const [mobileNo, setMobileNo] = useState(customer.mobileNo);
    // const [password, setPassword] = useState(customer.password);
    console.log(customer)
    // manual auth
    const auth = () => {
        if (!businessName) {
            router.push('/register_customer')
        }
    }
    useEffect(() => {
        auth();
    }, [businessName]);
    const date = new Date();
  return (
    <div >
        <p className='w-[90%] md:w-[70%] m-auto mb-2 mt-3'>hello, {businessName}</p>

        <div className='bg-[#4a4af1] text-white p-3 w-[90%] md:w-[70%] m-auto rounded-lg'>
            <p >Account balance</p>
            <p >N5,000</p>

            <div className='flex justify-between mt-6'>
                <p >{date.toDateString()}</p>
                <p >{date.getHours()}:{date.getMinutes()} {date.getHours >= 12 ? 'am' : 'pm'}</p>
            </div>
        </div>

        <div className='w-[90%] md:w-[70%] border-2 m-auto flex justify-between my-5 rounded-lg p-3 text-white'>
            <button className='p-2 bg-[#57da7f] w-[40%] rounded-lg hover:bg-white border-2 border-[#57da7f] hover:text-black' onClick={() => router.push('/home/deposit')}>Deposit</button>
            <button className='p-2 bg-[#e9e952] w-[40%] rounded-lg border-2 border-[#e9e952] hover:text-black hover:bg-white' onClick={() => router.push('/home/scan_code')}>Transfer</button>
        </div>

        {/* QUICK FEATURES */}
        <div className='w-[90%] md:w-[70%] m-auto bg-[#dbd9d9] border-[#8f8f8f] border-2 rounded-lg text-[.9rem] md:text-[1rem] mb-4'>
            <p className='my-2 text-[1.2rem] p-3'>Quick Features</p>
            <div className='flex justify-between p-5 border-t-2 border-[#8f8f8f]'>
                <div className='bg-white p-1 rounded-lg cursor-pointer w-[30%]'>
                    <MdOutlineQrCodeScanner className='text-[2rem] bg-white block m-auto rounded-lg'/>
                    <p className='text-center'>Scan code</p>
                </div>
                <div  className='bg-white p-1 rounded-lg cursor-pointer w-[30%]'>
                    <FaAmazonPay className='text-[2rem] bg-white block m-auto  rounded-lg'/>
                    <p className='text-center'>Pay</p>
                </div>
                <div  className='bg-white p-1 rounded-lg cursor-pointer w-[30%]'>
                    <GoHistory className='text-[2rem] bg-white block m-auto  rounded-lg'/>
                    <p className='text-center'>History</p>
                </div>

            </div>
            <div className='bg-white p-1 rounded-lg cursor-pointer w-[30%] text-center m-auto mb-3'>
                <BsQrCode className='text-[2rem] bg-white block m-auto  rounded-lg'/>
                <p >Generate QR code</p>
            </div>
            
        </div>
    </div>
  )
}

export default page