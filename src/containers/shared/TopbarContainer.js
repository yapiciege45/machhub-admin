import { TopbarComponent } from '@/components/shared/TopbarComponent'
import React from 'react'

export const TopbarContainer = ({ children }) => {
  return (
    <div className='h-screen overflow-y-scroll w-full flex flex-col'>
        <TopbarComponent />
        {children}
    </div>
  )
}
