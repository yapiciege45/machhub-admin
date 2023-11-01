"use client"
import { Context } from '@/context/context'
import { IconLogout, IconMenu2, IconMoon, IconSun } from '@tabler/icons-react'
import { useRouter } from 'next/navigation'
import React from 'react'

export const TopbarComponent = () => {

  const router = useRouter()

  return (
    <Context.Consumer>
      {({ mobileNavIsOpen, setMobileNavIsOpen, darkMode, setDarkMode }) => (
        <>
          <div className='w-full h-16 border-b drop-shadow-xl bg-white dark:bg-slate-700 flex p-3 px-8 justify-between items-center fixed top-0 md:relative'>
            <div className='flex items-center'>
              <IconMenu2 size={24} className='block md:hidden text-black dark:text-white' onClick={() => setMobileNavIsOpen(!mobileNavIsOpen)} />
            </div>
            <div className='flex items-center'>
              {
                darkMode ? (
                  <IconSun size={24} color='yellow' className='mr-3 cursor-pointer' onClick={() => setDarkMode(false)} />
                ) : (
                  <IconMoon size={24} color='black' className='mr-3 cursor-pointer' onClick={() => setDarkMode(true)} />
                )
              }
              <IconLogout className='cursor-pointer text-red-500 dark:text-white' onClick={() => router.push('/auth/login')} />
            </div>
          </div>
          <div className='h-16 w-full block md:hidden'></div>
        </>
      )}
    </Context.Consumer>
  )
}
