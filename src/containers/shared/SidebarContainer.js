"use client"
import { SidebarComponent } from '@/components/shared/SidebarComponent'
import { Context } from '@/context/context'
import { IconBuilding, IconHome, IconSettings, IconToolsKitchen, IconUsersGroup } from '@tabler/icons-react'
import React, { cloneElement, useState } from 'react'

export const SidebarContainer = ({ children }) => {

  return (
    <Context.Consumer>
      {({ darkMode }) => (
        <div className={`flex w-full ${darkMode ? 'dark' : ''}`}>
          <SidebarComponent links={[
            {
                title: 'Home',
                icon: <IconHome size={24} className='text-black group-hover:text-white transition-all dark:text-white' />,
                link: '/dashboard'
            },
            {
                title: 'Companies',
                icon: <IconBuilding size={24} className='text-black group-hover:text-white transition-all dark:text-white' />,
                link: '/dashboard/companies'
            },
            {
              title: 'Restaurants',
              icon: <IconToolsKitchen size={24} className='text-black group-hover:text-white transition-all dark:text-white' />,
              link: '/dashboard/restaurants'
            },
            {
              title: 'Users',
              icon: <IconUsersGroup size={24} className='text-black group-hover:text-white transition-all dark:text-white' />,
              link: '/dashboard/users/admin'
            },
          ]} />
          {children}
        </div>
      )}
    </Context.Consumer>
  )
}
