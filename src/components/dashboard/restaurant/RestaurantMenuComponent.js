import { InputComponent } from '@/components/shared/InputComponent'
import React from 'react'

export const RestaurantMenuComponent = ({ search, setSearch }) => {
  return (
    <div className='flex flex-col p-5 h-screen overflow-y-scroll bg-gray-50 dark:bg-slate-500'>
      <div className='w-full flex flex-wrap justify-between items-center'>
        <div className='w-full md:w-1/3'>
          <InputComponent 
            value={search}
            onChange={setSearch}
            placeholderText='Search'
          />
        </div>
      </div>
      <div className='mt-5'>
      </div>
    </div>
  )
}
