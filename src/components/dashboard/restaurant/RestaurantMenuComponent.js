import { InputComponent } from '@/components/shared/InputComponent'
import { IconCircleCheckFilled, IconCircleXFilled } from '@tabler/icons-react';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { TreeTable } from 'primereact/treetable'
import React from 'react'

export const RestaurantMenuComponent = ({ search, setSearch, searchedCategories, amount }) => {

  const statusBodyTemplate = ({is_active}) => {
    if(is_active) {
        return <IconCircleCheckFilled size={24} className='text-green-500' />
    } else {
        return <IconCircleXFilled size={24} className='text-red-500' />
    }
  };

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
      <div className='mt-5 card'>
        <DataTable value={searchedCategories} tableStyle={{ minWidth: '50rem' }}>
          <Column field="name" header="Name" expander></Column>
          <Column field="description" header="Description"></Column>
          <Column field="is_active" header="Status"></Column>
        </DataTable>
      </div>
    </div>
  )
}
