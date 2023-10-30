"use client"
import { GeneralUserComponent } from '@/components/dashboard/user/GeneralUserComponent'
import { redirect } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export const GeneralUserContainer = ({ children, url }) => {
    const [userType, setUserType] = useState(url)
    const [firstUserType, setFirstUserType] = useState(url)
    const options = [
        {
            label: 'Admin',
            value: 'admin'
        },
        {
            label: 'Company',
            value: 'company'
        },
        {
            label: 'Restaurant',
            value: 'restaurant'
        },
        {
            label: 'Website',
            value: 'website'
        }
    ]

    useEffect(() => {
        if(firstUserType != userType) {
            setFirstUserType(userType)
            redirect(`/dashboard/users/${userType}`)
        }
    }, [userType])
    

  return (
    <div className='flex flex-col h-screen overflow-y-scroll p-5'>
        <GeneralUserComponent 
            options={options}
            userType={userType}
            setUserType={setUserType}
        />
        { children }
    </div>
  )
}
