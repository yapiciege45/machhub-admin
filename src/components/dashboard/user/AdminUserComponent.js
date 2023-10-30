"use client"
import React from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ButtonComponent } from '@/components/shared/ButtonComponent';
import { Box, Button, Modal, Typography } from '@mui/material';
import { IconCircleCheckFilled, IconCircleXFilled, IconPencil, IconTrash, IconX } from '@tabler/icons-react';
import { InputComponent } from '@/components/shared/InputComponent';
import { CheckboxComponent } from '@/components/shared/CheckboxComponent';

import { SelectComponent } from '@/components/shared/SelectComponent';
import { Paginator } from 'primereact/paginator';
import Link from 'next/link';

export const AdminUserComponent = ({
  showDeleteUserModal,
  handleDeleteModalClose,
  deleteModalOpen,
  name,
  setName,
  email,
  setEmail,
  handleOpen,
  handleClose,
  open,
  updateModalOpen,
  handleUpdateModalClose,
  handleUpdateModalOpen,
  first,
  rows,
  onPageChange,
  search,
  setSearch,
  deleteUser,
  createUser,
  users,
  setUsers,
  updateUser,
  setSurname,
  surname,
  setPhone,
  phone,
  setPassword,
  password,
  deleteUserId,
  userAmount,
  
  setIsActive,
  isActive,

}) => {

  const actionsBodyTemplate = (rowData) => {
    return (
      <div className='flex items-center'>
        <div className='p-3 rounded-lg bg-red-500 cursor-pointer' onClick={() => showDeleteUserModal(rowData.id)}>
          <IconTrash size={24} className='text-white' />
        </div>
        <div className='p-3 rounded-lg bg-amber-500 ml-5 cursor-pointer' onClick={() => handleUpdateModalOpen(rowData)}>
          <IconPencil size={24} className='text-white' />
        </div>
      </div>
    )
  };

  const statusBodyTemplate = (is_active) => {
    if (is_active) {
      return <IconCircleCheckFilled size={24} className='text-green-500' />
    } else {
      return <IconCircleXFilled size={24} className='text-red-500' />
    }
  };

  const idBodyTemplate = ({ id }) => {
    return (
      <Link href={`/dashboard/users/admin/${id}`} className='text-lg text-purple-400 hover:text-purple-800 transition-all'>#{id}</Link>
    )
  };


  return (
    <div className='flex flex-col p-5 bg-gray-50 dark:bg-slate-500 h-screen overflow-y-scroll'>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className='w-11/12 md:w-3/4 lg:w-1/2 h-screen overflow-y-scroll absolute top-0 right-0 bg-white dark:bg-slate-900 p-5 drop-shadow-2xl transition-all'>
          <div className='w-full flex items-center justify-between'>
            <h1 className='text-lg text-black'>Add Admin User</h1>
            <IconX size={24} className='cursor-pointer' color='black' onClick={handleClose} />
          </div>
          <div className='mt-5'>
            <div className='w-full flex justify-between flex-wrap mt-3'>
              <div className='w-full md:w-[49%]'>
                <InputComponent
                  onChange={setName}
                  value={name}
                  labelText='Name'
                  placeholderText='Name'
                  isRequired={true}
                />
              </div>
              <div className='w-full md:w-[49%] mt-3 md:mt-0'>
                <InputComponent
                  onChange={setSurname}
                  value={surname}
                  labelText='Surname'
                  placeholderText='Surname'
                  isRequired={true}
                />
              </div>
              <div className='w-full flex justify-between flex-wrap mt-3'>
                <div className='w-full md:w-[49%] mt-3 md:mt-0'>
                  <InputComponent
                    onChange={setEmail}
                    value={email}
                    labelText='Email'
                    placeholderText='Email'
                    isRequired={true}
                  />
                </div>
                <div className='w-full md:w-[49%] mt-3 md:mt-0'>
                  <InputComponent
                    onChange={setPhone}
                    value={phone}
                    labelText='Phone'
                    placeholderText='Phone'
                    isRequired={true}
                  />
                </div>
              </div>
              <div className='w-full flex justify-between flex-wrap mt-3'>
                <div className='w-full md:w-[49%] mt-3 md:mt-0'>
                  <InputComponent
                    onChange={setPassword}
                    value={password}
                    labelText='Password'
                    placeholderText='Password'
                    isRequired={true}
                  />
                </div>
                <div className='w-full md:w-[49%]'>
                  <CheckboxComponent
                    onChange={setIsActive}
                    value={isActive}
                    labelText='Is Active'
                  />
                </div>
              </div>

            </div>
          </div>

          <div className='w-full mt-8'>
            <ButtonComponent
              onClick={createUser}
              buttonText='Create User'
            />
          </div>

        </div>
      </Modal>
      <Modal
        open={updateModalOpen}
        onClose={handleUpdateModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className='w-11/12 md:w-3/4 lg:w-1/2 h-screen overflow-y-scroll absolute top-0 right-0 bg-white dark:bg-slate-900 p-5 drop-shadow-2xl transition-all'>
          <div className='w-full flex items-center justify-between'>
            <h1 className='text-lg text-black'>Edit User</h1>
            <IconX size={24} className='cursor-pointer' color='black' onClick={handleUpdateModalClose} />
          </div>
          <div className='mt-5'>
          <div className='w-full flex justify-between flex-wrap mt-3'>
              <div className='w-full md:w-[49%]'>
                <InputComponent
                  onChange={setName}
                  value={name}
                  labelText='Name'
                  placeholderText='Name'
                  isRequired={true}
                />
              </div>
              <div className='w-full md:w-[49%] mt-3 md:mt-0'>
                <InputComponent
                  onChange={setSurname}
                  value={surname}
                  labelText='Surname'
                  placeholderText='Surname'
                  isRequired={true}
                />
              </div>
              <div className='w-full flex justify-between flex-wrap mt-3'>
                <div className='w-full md:w-[49%] mt-3 md:mt-0'>
                  <InputComponent
                    onChange={setEmail}
                    value={email}
                    labelText='Email'
                    placeholderText='Email'
                    isRequired={true}
                  />
                </div>
                <div className='w-full md:w-[49%] mt-3 md:mt-0'>
                  <InputComponent
                    onChange={setPhone}
                    value={phone}
                    labelText='Phone'
                    placeholderText='Phone'
                    isRequired={true}
                  />
                </div>
              </div>
              <div className='w-full flex justify-between flex-wrap mt-3'>
                <div className='w-full md:w-[49%] mt-3 md:mt-0'>
                  <InputComponent
                    onChange={setPassword}
                    value={password}
                    labelText='Password'
                    placeholderText='Password'
                    isRequired={true}
                  />
                </div>
                <div className='w-full md:w-[49%]'>
                  <CheckboxComponent
                    onChange={setIsActive}
                    value={isActive}
                    labelText='Is Active'
                  />
                </div>
              </div>

            </div>
          </div>
          <div className='w-full mt-8'>
            <ButtonComponent
              onClick={updateUser}
              buttonText='Update User'
            />
          </div>
        </div>
      </Modal>
      <Modal
        open={deleteModalOpen}
        onClose={handleDeleteModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className='w-[350px] absolute top-1/2 left-1/2 bg-white dark:bg-slate-900 p-5 rounded-xl border border-blue-500 drop-shadow-2xl' style={{ transform: 'translate(-50%,-50%)' }}>
          <div className='w-full flex items-center justify-between'>
            <p className='text-lg text-black'>Are you sure?</p>
            <IconX size={24} color='black' onClick={handleDeleteModalClose} />
          </div>
          <p className='mt-3 text-xs text-black'>Are you sure about <span className='font-bold'>deleting</span> User?</p>
          <div className='w-full flex justify-end mt-5'>
            <ButtonComponent
              buttonText='Delete'
              className='h-8 text-xs w-1/2'
              onClick={() => deleteUser(deleteUserId)}
            />
          </div>
        </div>
      </Modal>
      <div className='w-full flex justify-between flex-wrap items-center mt-5'>
        <div className='w-full md:w-1/3'>
          <InputComponent
            onChange={setSearch}
            value={search}
            placeholderText='Search'
          />
        </div>
        <div className='w-full md:w-1/3 mt-3 md:mt-0'>
          <ButtonComponent
            onClick={handleOpen}
            buttonText='+ Add New User'
          />
        </div>
      </div>
      <div className="card mt-5">
        <DataTable value={users} sortField="id" sortOrder={1} tableStyle={{ minWidth: '50rem' }}>
          <Column field="id" header="ID" body={idBodyTemplate} sortable style={{ width: '5%' }}></Column>
          <Column field="name" header="Name" style={{ width: '20%' }}></Column>
          <Column field="surname" header="Surname" style={{ width: '20%' }}></Column>
          <Column field="email" header="Email" style={{ width: '20%' }}></Column>
          <Column field="phone" header="Phone" style={{ width: '20%' }}></Column>
          <Column field="is_active" header="Status" body={statusBodyTemplate} sortable style={{ width: '10%' }}></Column>
          <Column field="created_at" header="Created At" style={{ width: '20%' }}></Column>
          <Column field="updated_at" header="Updated At" style={{ width: '20%' }}></Column>
          <Column field="actions" header="Actions" body={actionsBodyTemplate} style={{ width: '20%' }}></Column>
        </DataTable>
        <Paginator first={first} rows={rows} totalRecords={userAmount} rowsPerPageOptions={[1, 5, 10, 20, 50]} onPageChange={onPageChange} />
      </div>
    </div>
  );
}
