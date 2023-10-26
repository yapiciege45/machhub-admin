"use client"
import { SidebarComponent } from '@/components/shared/SidebarComponent'
import React, { cloneElement, useState } from 'react'

export const SidebarContainer = ({ children }) => {

    const [navIsOpen, setNavIsOpen] = useState(true)

  return (
    <div className='flex w-full'>
        <SidebarComponent navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
        {children}
    </div>
  )
}
