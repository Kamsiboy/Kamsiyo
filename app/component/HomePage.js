'use client'
import Image from "next/image"
import QRCodeImage from '../../public/homepageQRcode.jpeg'
import { useRouter } from "next/navigation"

const HomePage = () => {
  const router = useRouter();

  return (
    <div>
      <div className="md:flex block w-[100%] justify-between mt-10">
        <div className="md:w-[50%]">
          <Image src={QRCodeImage} alt="QR code image" className="w-[80%] md:w-[100%] block m-auto md:ml-0"/>
        </div>
        <div className="md:w-[50%] md:mt-0 mt-10">
          <button className="block m-auto p-5 bg-[#4a4af1]  hover:bg-white hover:text-black hover:border-2 transition border-[#4a4af1] text-white md:text-[1rem] text-[1rem] w-[50%] rounded-lg" onClick={() => router.push('/register_customer')}>
            Register as a customer
          </button>

          <button className="block m-auto mt-5 p-5 bg-white border-2 border-[#4a4af1] text-black hover:text-white hover:bg-[#4a4af1] transition md:text-[1rem] text-[1rem] w-[50%] rounded-lg" onClick={() => router.push('/register_merchant')}>
            Register as a merchant
          </button>
      </div>
      </div>
      <br /> <br />

      <div className="p-2 text-[1rem] md:text-[1.1rem] mb-4">
        <p className="font-bold  text-center text-[2rem]">About Our QR Code Payment App</p> <br />
        <p >Welcome to our cutting-edge QR Code Payment App! Simplifying transactions, our app allows you to make payments swiftly and securely using just your smartphone. With our intuitive interface, you can generate and scan QR codes for instant payments, eliminating the need for cash or cards.</p>
        <br />
        <div className="ml-10">
        <p className="font-semibold text-[1.3rem]">Features:</p>
        <p className="my-1">i. Quick and Easy Payments: Scan and pay within seconds.</p>
        <p className="my-1">ii. Secure Transactions: Advanced encryption ensures your financial data is protected.</p>
        <p className="my-1">iii. Wide Acceptance: Use it at numerous participating merchants and services.</p>
        <p className="my-1">iv. Real-Time Tracking: Monitor your transactions in real-time with detailed receipts.</p>
        <p className="my-1">v. User-Friendly Interface: Designed for simplicity and ease of use.</p>
        <p className="my-1">vi. Experience the future of payments today. Download our app and join the cashless revolution!</p>
        </div>
      </div>
      
    </div>
  )
}

export default HomePage
