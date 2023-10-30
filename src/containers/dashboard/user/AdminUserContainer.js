'use client'
import React, {useEffect, useState} from 'react'
import {GeneralUserContainer} from './GeneralUserContainer'
import {AdminUserComponent} from '@/components/dashboard/user/AdminUserComponent'
import {PrimeReactTheme} from '@/containers/shared/PrimeReactTheme'
import {SidebarContainer} from '@/containers/shared/SidebarContainer'
import {TopbarContainer} from '@/containers/shared/TopbarContainer'
import {getCookie} from "cookies-next";
import {toast} from "react-toastify";
import {getAdminUsers} from "@/lib/getUsers";
import { create } from '@mui/material/styles/createTransitions'
import { set } from 'react-hook-form'

export const AdminUserContainer = () => {

    const [users, setUsers] = useState([]);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false)
    const [updateModalOpen, setUpdateModalOpen] = useState(false)
    const [usersAmount, setUsersAmount] = useState(0)
    const [deleteUserId, setDeleteUserId] = useState(0)
    const [id, setId] = useState(0)
    const [isActive, setIsActive] = useState(true)
    const [logo, setLogo] = useState(null)
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [created_at, setCreated_at] = useState('')
    const [updated_at, setUpdated_at] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    

    
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
    }

    const handleDeleteModalOpen = () => setDeleteModalOpen(true);
    const handleDeleteModalClose = () => {
        clearAll()
        setDeleteModalOpen(false)
    };

    const handleUpdateModalOpen = (data) => {
        console.log(data)
        setUpdateModalOpen(true)

        setId(data.id)
        setName(data.name)
        setEmail(data.email)
        setSurname(data.surname)
        setPhone(data.phone)
        setCreated_at(data.created_at)
        setUpdated_at(data.updated_at)
        setIsActive(data.is_active)

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

        const res = await fetch(`${process.env.API_URL}/admin/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${getCookie('token')}`
            }
        })

        const data = await res.json()

        if(data.status == 'success') {
            toast.success(data.message)
            setUsers(users.filter(x => x.id !== id))
        } else {
            toast.error("An error occurred when deleting user.")
        }

        return data
    }

    const createUser = async () => {

        handleClose()

        const res = await fetch(`${process.env.API_URL}/admin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                surname: surname,
                email: email,
                phone, phone,
                password: password,
                is_active: isActive ? 1 : 0,
            })
        })

        const data = await res.json()
        if(data.status == 'success') {
            toast.success(data.message)
            setUsers([
                ...users,
                {
                    id: data.id,
                    name: name,
                    surname: surname,
                    email: email,
                    phone, phone,
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
        
        const res = await fetch(`${process.env.API_URL}/admin/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                surname: surname,
                email: email,
                phone, phone,
                is_active: isActive ? 1 : 0,
            }),
            if (password = '') {
                body.password.delete()
            }
        })

        const data = await res.json()

        console.log(data)

        if(data.status == 'success') {
            toast.success(data.message)
            getAdminUsers(true, page, rows, search).then(data => {
                setUsers(data.data)
                setUsersAmount(data.amount)
            });
        } else {
            toast.error("An error occurred when updating user.")
        }

        return data
    }

    useEffect(() => {
        getAdminUsers(true, page, rows, search).then(data => {
            setUsers(data.data)
            setUsersAmount(data.amount)
        });
    }, []);

    useEffect(() => {
        getAdminUsers(true, page, rows, search).then(data => {
            setUsers(data.data)
            setUsersAmount(data.amount)
        });
    }, [page, rows, first, search]);

    useEffect(() => {


        let timeout;

        const handleSearch = () => {
            getAdminUsers(true, page, rows, search).then(data => {
                setUsers(data.data)
                setUsersAmount(data.amount)
            });
        };

        clearTimeout(timeout);
        timeout = setTimeout(handleSearch, 500);

        return () => clearTimeout(timeout);
    }, [search]);

    return (
        <PrimeReactTheme>
            <SidebarContainer>
                <TopbarContainer>
                    <GeneralUserContainer url='admin'>
                        <AdminUserComponent
                            users={users}
                            deleteUser={deleteUser}
                            createUser={createUser}
                            updateUser={updateUser}
                            name={name}
                            setName={setName}
                            email={email}
                            phone={phone}
                            password={password}
                            surname={surname}
                            created_at={created_at}
                            updated_at={updated_at}
                            setSurname={setSurname}
                            setPhone={setPhone}
                            setPassword={setPassword}
                            setCreated_at={setCreated_at}
                            setUpdated_at={setUpdated_at}
                            setEmail={setEmail}
                            handleUpdateModalOpen={handleUpdateModalOpen}
                            setUpdateModalOpen={setUpdateModalOpen}
                            setDeleteModalOpen={setDeleteModalOpen}
                            setDeleteUserId={setDeleteUserId}
                            setId={setId}
                            setUsersAmount={setUsersAmount}
                            setUsers={setUsers}
                            handleOpen={handleOpen}
                            handleClose={handleClose}
                            handleDeleteModalOpen={handleDeleteModalOpen}
                            handleDeleteModalClose={handleDeleteModalClose}
                            handleUpdateModalClose={handleUpdateModalClose}
                            updateModalOpen={updateModalOpen}
                            deleteModalOpen={deleteModalOpen}
                            id={id}
                            isActive={isActive}
                            logo={logo}
                            setLogo={setLogo}
                            setIsActive={setIsActive}
                            open={open}
                            setOpen={setOpen}
                            onPageChange={onPageChange}
                            first={first}
                            rows={rows}
                            usersAmount={usersAmount}
                            search={search}
                            setSearch={setSearch}
                            clearAll={clearAll}
                            showDeleteUserModal={showDeleteUserModal}
                            deleteUserId={deleteUserId}
                            set
                            setFirst={setFirst}
                            setRows={setRows}
                            setPage={setPage}
                        />
                    </GeneralUserContainer>
                </TopbarContainer>
            </SidebarContainer>
        </PrimeReactTheme>
    )
}
