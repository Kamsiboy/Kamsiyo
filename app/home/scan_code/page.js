'use client'
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
const QrScanner = dynamic(() => import('react-qr-scanner'), { ssr: false });

const QRCodeScanner = () => {
    const router = useRouter();
  const [result, setResult] = useState('');
  const handleScan = (data) => {
    if (data) {
      setResult(data.text); // Adjusted to get the text property
    }
  };
  const handleError = (err) => {
    console.error(err);
  };
  const previewStyle = {
    height: 240,
    width: 1000,
  };

  return (
    <div  className='w-[90%] md:w-[70%] m-auto mb-2 mt-3 text-[.9rem] md:text-[1rem]'>
      <h1 className='text-center my-2'>Scan QR Code</h1>
      <div className='m-auto block'>
        <QrScanner
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={previewStyle}
        />
      </div>
      
      <p className='text-center'>Scanned Result: {result}</p>



      <button type='submit' className='block mt-5 bg-[#4a4af1] hover:bg-white border-2 border-[#4a4af1] hover:text-black text-white transition w-[100%]  m-auto rounded-lg py-2 mb-3' onClick={() => router.push('/home/scan_code/amount')}>Confirm</button>
    </div>
  );
};

export default QRCodeScanner;
