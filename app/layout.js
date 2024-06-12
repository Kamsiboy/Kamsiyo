import './globals.css'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import { Providers } from './redux/Providers'

export const metadata = {
  title: 'QR PAY',
  description: 'BUILT BY KAMSIBOY',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers >
      <body>
      <Navbar />
        {children}
      <Footer />
      </body>
      </Providers>
    </html>
  )
}
