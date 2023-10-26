import { Inter } from 'next/font/google'
import './globals.css'
import './flags.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Context, ContextProvider } from '@/context/context';

import 'primereact/resources/themes/tailwind-light/theme.css';   // theme
import { PrimeReactProvider } from 'primereact/api';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body className={`${inter.className}`}>
          <ContextProvider>
              <PrimeReactProvider>
                {children}
              </PrimeReactProvider>
            <ToastContainer />
          </ContextProvider>
        </body>
      </html>
  )
}
