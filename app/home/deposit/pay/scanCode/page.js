'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import QRCode from 'qrcode'

const page = () => {
    const [src, setSrc] = useState('');
    const [qrCodeSize, setQRCodeSize] = useState({ width: 200, height: 200 }); 

    useEffect(() => {
        const accountDetails = 'Bank Name: United bank of Africa, Account number: 2206914918, Account name: FLUTTERPAY';
        // const makeAndModelText = `https://google.com`;
        QRCode.toDataURL(accountDetails).then(setSrc);
    },[] );

  return (
    <div className='w-[90%] md:w-[70%] m-auto mb-2 mt-3 text-[.9rem] md:text-[1rem]'>
        <p className='text-center text-[#4a4af1] font-bold text-[1.3rem] mt-5'>SCAN CODE</p>
        {/* QR CODE GOES HERE */}
        <div >
            <Image src={src} alt='qrcode' width={qrCodeSize.width} height={qrCodeSize.height}  className='block m-auto'/>
        </div>

        <p className='text-center text-[#4a4af1] font-bold text-[1.3rem]'>United bank of Africa</p>
        <p className='text-center text-[#4a4af1] font-bold text-[1.3rem]'>2206914918</p>
        <br />

        <button type='submit' className='block mt-5 bg-[#4a4af1] hover:bg-white border-2 border-[#4a4af1] hover:text-black text-white transition w-[100%]  m-auto rounded-lg py-2 mb-3' onClick={(() => print())}>Print Page</button>
    </div>
  )
}

export default page