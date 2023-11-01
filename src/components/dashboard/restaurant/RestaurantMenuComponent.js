import { InputComponent } from '@/components/shared/InputComponent'
import { IconCircleCheckFilled, IconCircleXFilled, IconPencilBolt, IconPlus, IconTrash } from '@tabler/icons-react';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { TreeTable } from 'primereact/treetable'
import React from 'react'

export const RestaurantMenuComponent = ({ search, setSearch, nodes, amount, expandedKeys, setExpandedKeys }) => {

  const statusBodyTemplate = ({ is_active }) => {
    if(is_active) {
        return <IconCircleCheckFilled size={24} className='text-green-500' />
    } else {
        return <IconCircleXFilled size={24} className='text-red-500' />
    }
  };

  const actionsBodyTemplate = ({ type }) => {
    if(type != 'option') {
      return (
        <div className='flex items-center'>
          <IconPlus size={30} className='text-green-500 cursor-pointer' />
          <IconPencilBolt size={30} className=' text-yellow-500 ml-5 cursor-pointer' />
          <IconTrash size={30} className='text-red-500 ml-5 cursor-pointer' />
        </div>
      )
    }
  }

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
        <TreeTable value={nodes} expandedKeys={expandedKeys} onToggle={(e) => setExpandedKeys(e.value)} className="mt-4" tableStyle={{ minWidth: '50rem' }}>
          <Column field="name" header="Name" expander></Column>
          <Column field="description" header="Description"></Column>
          <Column field="is_active" body={statusBodyTemplate} header="Status"></Column>
          <Column field="type" body={actionsBodyTemplate} header="Actions"></Column>
        </TreeTable>
      </div>
    </div>
  )
}
