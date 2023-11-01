'use client'
import React, { useEffect, useState } from 'react'
import { GeneralUserContainer } from './GeneralUserContainer'
import { PrimeReactTheme } from '@/containers/shared/PrimeReactTheme'
import { SidebarContainer } from '@/containers/shared/SidebarContainer'
import { TopbarContainer } from '@/containers/shared/TopbarContainer'
import { toast } from "react-toastify";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Modal } from '@mui/material';
import { GetCompanies, getAllCompanies } from '@/lib/company'
import { IconCircleCheckFilled, IconCircleXFilled, IconPencil, IconTrash, IconX } from '@tabler/icons-react';
import { InputComponent } from '@/components/shared/InputComponent';
import { CheckboxComponent } from '@/components/shared/CheckboxComponent';
import { ButtonComponent } from '@/components/shared/ButtonComponent';
import { SelectComponent } from '@/components/shared/SelectComponent';
import { Paginator } from 'primereact/paginator';
import Link from 'next/link';
import * as companyUser from "@/lib/companyUser";

export const CompanyUserContainer = () => {
  const [users, setUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [searchedUsers, setSearchedUsers] = useState([]);
  const [pagiantedUsers, setPaginatedUsers] = useState([]);


  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [updateModalOpen, setUpdateModalOpen] = useState(false)
  const [usersAmount, setUsersAmount] = useState(0)
  const [deleteUserId, setDeleteUserId] = useState(0)
  const [id, setId] = useState(0)
  const [isActive, setIsActive] = useState(true)
  const [profile, setProfile] = useState(null)
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [created_at, setCreated_at] = useState('')
  const [updated_at, setUpdated_at] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [companyId, setCompanyId] = useState(0)
  const [companies, setCompanies] = useState([])
  const [last_login_at, setLastLoginAt] = useState('')
  const [lang, setLang] = useState('en')
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);
  const [page, setPage] = useState(0)
  const [search, setSearch] = useState('')

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onPageChange = (event) => {
    setFirst(event.first);
    setRows(event.rows);
    setPage(event.page)
  };

  const clearAll = () => {
    setName('')
    setEmail('')
    setIsActive(true)
    setPhone('')
    setPassword('')
    setSurname('')
    setCreated_at('')
    setUpdated_at('')
    setLastLoginAt('')
    setCompanyId(0)
    setProfile(null)
    setLang('en')
  }

  const handleDeleteModalOpen = () => setDeleteModalOpen(true);
  const handleDeleteModalClose = () => {
    clearAll()
    setDeleteModalOpen(false)
  };

  const handleUpdateModalOpen = (data) => {
    setUpdateModalOpen(true)

    setId(data.id)
    setName(data.name)
    setEmail(data.email)
    setSurname(data.surname)
    setPhone(data.phone)
    setCreated_at(data.created_at)
    setUpdated_at(data.updated_at)
    setIsActive(data.is_active)
    setLastLoginAt(data.last_login_at)
    setCompanyId(data.company_id)
    setProfile(data.profile)
    setLang(data.lang)

  };
  const handleUpdateModalClose = () => {
    clearAll()
    setUpdateModalOpen(false)
  };

  const showDeleteUserModal = (id) => {
    setDeleteUserId(id)
    setDeleteModalOpen(true)
  }

  const deleteUser = async (id) => {
    handleDeleteModalClose()


    const data = await companyUser.Delete(id)

    if (data.status === 'success') {
      toast.success(data.message)
      setUsers(users.filter(x => x.id !== id))
    } else {
      toast.error("An error occurred when deleting user.")
    }

    return data
  }

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
      <Link href={`/dashboard/users/company/${id}`} className='text-lg text-purple-400 hover:text-purple-800 transition-all'>#{id}</Link>
    )
  };

  const createUser = async () => {

    handleClose()

    const data = await companyUser.Create({name, surname, email, phone, password, isActive, companyId, profile, lang})
    if (data.status === 'success') {
      toast.success(data.message)
      setUsers([
        ...users,
        {
          id: data.id,
          name: name,
          surname: surname,
          email: email,
          phone: phone,
          password: password,
          companyId: companyId,
          profile: profile,
          is_active: isActive ? 1 : 0,
        }
      ])
    } else {
      toast.error("An error occurred when creating user.")
    }

    return data
  }

  const updateUser = async () => {

    handleUpdateModalClose()

    const data = await companyUser.Update({id, name, surname, email, phone, password, isActive, companyId, profile, lang})

    if (data.status === 'success') {
      toast.success(data.message)
      companyUser.GetAll(true, page, rows, search).then(data => {
        setUsers(data.data)
        setUsersAmount(data.amount)
      });
    } else {
      toast.error("An error occurred when updating user.")
    }

    return data
  }

  useEffect(() => {
    companyUser.GetAll().then(data => {
      setUsers(data)
    });
    getAllCompanies().then(data => {
      setCompanies(data.map(x => ({
        value: x.id,
        label: x.name
      })))
    });
  }, []);

  useEffect(() => {
    companyUser.Paginate(searchedUsers, page, rows).then(data => {
      setUsers(data)
    });
    getAllCompanies().then(data => {
      setCompanies(data.map(x => ({
        value: x.id,
        label: x.name
      })))
    });
  }, [page, rows, first, searchedUsers]);

  useEffect(() => {
      companyUser.Search(allUsers).then(data => {
        setUsers(data)
      });
  }, [search, allUsers]);

  return (
    <PrimeReactTheme>
      <SidebarContainer>
        <TopbarContainer>
          <GeneralUserContainer url='company'>
            <div className='flex flex-col p-5 bg-gray-50 dark:bg-slate-500 h-screen overflow-y-scroll'>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <div className='w-11/12 md:w-3/4 lg:w-1/2 h-screen overflow-y-scroll absolute top-0 right-0 bg-white dark:bg-slate-900 p-5 drop-shadow-2xl transition-all'>
                  <div className='w-full flex items-center justify-between'>
                    <h1 className='text-lg text-black'>Add Company User</h1>
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
                      <div className='w-full md:w-[49%] mt-3 md:mt-0'>
                        <SelectComponent
                          onChange={setCompanyId}
                          value={companyId}
                          labelText='Company'
                          placeholderText='Company'
                          isRequired={true}
                          options={companies}
                        />
                      </div>
                      <div className='w-full md:w-[49%] mt-3 md:mt-0'>
                        <SelectComponent
                          onChange={setLang}
                          value={lang}
                          labelText='Lang'
                          placeholderText='Lang'
                          isRequired={true}
                          options={[
                            {
                              value: 'en',
                              label: 'English'
                            },
                            {
                              value: 'tr',
                              label: 'Turkish'
                            },
                            {
                              value: 'dk',
                              label: 'Danish'
                            }
                          ]}
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
                  <Column field="last_login_at" header="Last login At" style={{ width: '20%' }}></Column>
                  <Column field="actions" header="Actions" body={actionsBodyTemplate} style={{ width: '20%' }}></Column>
                </DataTable>
                <Paginator first={first} rows={rows} totalRecords={searchedUsers.amount} rowsPerPageOptions={[1, 5, 10, 20, 50]} onPageChange={onPageChange} />
              </div>
            </div>
          </GeneralUserContainer>
        </TopbarContainer>
      </SidebarContainer>
    </PrimeReactTheme>
  )
}
