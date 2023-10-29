"use client"
import { SidebarComponent } from '@/components/shared/SidebarComponent'
import { Context } from '@/context/context'
import { IconArrowBackUpDouble, IconRewindBackward10, IconToolsKitchen2 } from '@tabler/icons-react'
import { IconBuilding, IconCategory, IconHome, IconSettings, IconToolsKitchen } from '@tabler/icons-react'
import React, { cloneElement, useState } from 'react'

export const SidebarRestaurantDetailContainer = ({ children, id }) => {

  return (
    <Context.Consumer>
      {({ darkMode }) => (
        <div className={`flex w-full ${darkMode ? 'dark' : ''}`}>
          <SidebarComponent links={[
            {
                title: 'Restaurant Home',
                icon: <IconToolsKitchen2 size={24} className='text-black group-hover:text-white transition-all dark:text-white' />,
                link: `/dashboard/restaurants/${id}`
            },
            {
                title: 'Categories',
                icon: <IconCategory size={24} className='text-black group-hover:text-white transition-all dark:text-white' />,
                link: `/dashboard/restaurants/${id}/categories`
            },
            {
                title: 'Turn Admin',
                icon: <IconArrowBackUpDouble size={24} className='text-black group-hover:text-white transition-all dark:text-white' />,
                link: `/dashboard/restaurants`
            },
          ]} />
          {children}
        </div>
      )}
    </Context.Consumer>
  )
}
