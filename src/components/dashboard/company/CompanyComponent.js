"use client"
import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ButtonComponent } from '@/components/shared/ButtonComponent';
import { Modal } from '@mui/material';
import { IconCircleCheckFilled, IconCircleXFilled, IconPencil, IconTrash, IconX } from '@tabler/icons-react';
import { InputComponent } from '@/components/shared/InputComponent';
import { CheckboxComponent } from '@/components/shared/CheckboxComponent';
import { Paginator } from 'primereact/paginator';
import Link from 'next/link';

export const CompanyComponent = ({ 
    deleteCompany,
    companies,
    showDeleteCompanyModal,
    handleDeleteModalClose,
    deleteModalOpen,
    deleteCompanyId,
    restaurantName,
    setRestaurantName,
    chainName,
    setChainName,
    notes,
    setNotes,
    taxNumber,
    setTaxNumber,
    domain,
    setDomain,
    isActive,
    setIsActive,
    contactName,
    setContactName,
    contactPhone,
    setContactPhone,
    socialFacebook,
    setSocialFacebook,
    socialInstagram,
    setSocialInstagram,
    socialX,
    setSocialX,
    settings,
    setSettings,
    createCompany,
    handleOpen,
    handleClose,
    setOpen,
    open,
    updateModalOpen,
    setUpdateModelOpen,
    handleUpdateModalClose,
    handleUpdateModalOpen,
    updateCompany,
    first,
    setFirst,
    rows,
    setRows,
    onPageChange,
    companyAmount,
    search,
    setSearch
}) => {

    const actionsBodyTemplate = (rowData) => {
        return (
            <div className='flex items-center'>
                <div className='p-3 rounded-lg bg-red-500 cursor-pointer' onClick={() => showDeleteCompanyModal(rowData.id)}>
                    <IconTrash size={24} className='text-white' />
                </div>
                <div className='p-3 rounded-lg bg-amber-500 ml-5 cursor-pointer' onClick={() => handleUpdateModalOpen(rowData)}>
                    <IconPencil size={24} className='text-white' />
                </div>
            </div>
        )
    };

    const statusBodyTemplate = ({is_active}) => {
        if(is_active) {
            return <IconCircleCheckFilled size={24} className='text-green-500' />
        } else {
            return <IconCircleXFilled size={24} className='text-red-500' />
        }
    };

    const domainBodyTemplate = ({ domain }) => {
        if (domain) {
            return (
                <Link className='underline hover:text-slate-300 transition-all' href={domain} target='_blank'>{domain}</Link>
            )
        } else {
            return (
                <p>{domain}</p>
            )
        }
    }

    const phoneBodyTemplate = ({ contact: { phone } }) => {
        if (phone) {
            return (
                <Link className='underline hover:text-slate-300 transition-all' href={`tel:${phone}`} target='_blank'>{phone}</Link>
            )
        } else {
            return (
                <p>{phone}</p>
            )
        }
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
                        <h1 className='text-lg text-black'>Add Company</h1>
                        <IconX size={24} className='cursor-pointer' color='black' onClick={handleClose} />
                    </div>
                    <div className='mt-5'>
                        <div className='w-full flex justify-between flex-wrap mt-3'>
                            <div className='w-full md:w-[49%]'>
                                <InputComponent 
                                    onChange={setRestaurantName}
                                    value={restaurantName}
                                    labelText='Restaurant Name'
                                    placeholderText='Restaurant Name'
                                    isRequired={true}
                                />
                            </div>
                            <div className='w-full md:w-[49%] mt-3 md:mt-0'>
                                <InputComponent 
                                    onChange={setChainName}
                                    value={chainName}
                                    labelText='Chain Name'
                                    placeholderText='Chain Name'
                                    isRequired={true}
                                />
                            </div>
                        </div>
                        <div className='w-full flex justify-between flex-wrap mt-3'>
                            <div className='w-full md:w-[49%]'>
                                <InputComponent 
                                    onChange={setNotes}
                                    value={notes}
                                    labelText='Notes'
                                    placeholderText='Notes'
                                    isRequired={true}
                                />
                            </div>
                            <div className='w-full md:w-[49%] mt-3 md:mt-0'>
                                <InputComponent 
                                    onChange={setTaxNumber}
                                    value={taxNumber}
                                    labelText='Tax Number'
                                    placeholderText='Tax Number'
                                    isRequired={true}
                                />
                            </div>
                        </div>
                        <div className='w-full flex justify-between flex-wrap items-center mt-3'>
                            <div className='w-full md:w-[49%]'>
                                <InputComponent 
                                    onChange={setDomain}
                                    value={domain}
                                    labelText='Domain'
                                    placeholderText='Domain'
                                    isRequired={true}
                                />
                            </div>
                            <div className='w-full md:w-[49%] mt-3 md:mt-0'>
                                <CheckboxComponent 
                                    onChange={setIsActive}
                                    value={isActive}
                                    labelText='Is Active'
                                />
                            </div>
                        </div>
                        <div className='w-full flex justify-between flex-wrap items-center mt-3'>
                            <div className='w-full md:w-[49%]'>
                                <InputComponent 
                                    onChange={setContactName}
                                    value={contactName}
                                    labelText='Contact Name'
                                    placeholderText='Contact Name'
                                    isRequired={true}
                                />
                            </div>
                            <div className='w-full md:w-[49%] mt-3 md:mt-0'>
                                <InputComponent 
                                    onChange={setContactPhone}
                                    value={contactPhone}
                                    labelText='Contact Phone'
                                    placeholderText='Contact Phone'
                                    isRequired={true}
                                />
                            </div>
                        </div>
                        <div className='w-full flex justify-between flex-wrap items-center mt-3'>
                            <div className='w-full md:w-[49%]'>
                                <InputComponent 
                                    onChange={setSocialFacebook}
                                    value={socialFacebook}
                                    labelText='Social Facebook'
                                    placeholderText='Social Facebook'
                                    isRequired={true}
                                />
                            </div>
                            <div className='w-full md:w-[49%] mt-3 md:mt-0'>
                                <InputComponent 
                                    onChange={setSocialInstagram}
                                    value={socialInstagram}
                                    labelText='Social Instagram'
                                    placeholderText='Social Instagram'
                                    isRequired={true}
                                />
                            </div>
                        </div>
                        <div className='w-full flex justify-between flex-wrap items-center mt-3'>
                            <div className='w-full md:w-[49%]'>
                                <InputComponent 
                                    onChange={setSocialX}
                                    value={socialX}
                                    labelText='Social X'
                                    placeholderText='Social X'
                                    isRequired={true}
                                />
                            </div>
                            <div className='w-full md:w-[49%] mt-3 md:mt-0'>
                                <InputComponent 
                                    onChange={setSettings}
                                    value={settings}
                                    labelText='Settings'
                                    placeholderText='Settings'
                                    isRequired={true}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='w-full mt-8'>
                        <ButtonComponent 
                            onClick={createCompany}
                            buttonText='Create Company'
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
                <div className='w-11/12 md:w-3/4 lg:w-1/2 h-screen overflow-y-scroll absolute top-0 right-0 bg-white dark:bg-slate-900 p-5 drop-shadow-2xl'>
                    <div className='w-full flex items-center justify-between'>
                        <h1 className='text-lg text-black'>Edit Company</h1>
                        <IconX size={24} className='cursor-pointer' color='black' onClick={handleUpdateModalClose} />
                    </div>
                    <div className='mt-5'>
                        <div className='w-full flex justify-between flex-wrap mt-3'>
                            <div className='w-full md:w-[49%]'>
                                <InputComponent 
                                    onChange={setRestaurantName}
                                    value={restaurantName}
                                    labelText='Company Name'
                                    placeholderText='Company Name'
                                    isRequired={true}
                                />
                            </div>
                            <div className='w-full md:w-[49%] mt-3 md:mt-0'>
                                <InputComponent 
                                    onChange={setChainName}
                                    value={chainName}
                                    labelText='Chain Name'
                                    placeholderText='Chain Name'
                                    isRequired={true}
                                />
                            </div>
                        </div>
                        <div className='w-full flex justify-between flex-wrap mt-3'>
                            <div className='w-full md:w-[49%]'>
                                <InputComponent 
                                    onChange={setNotes}
                                    value={notes}
                                    labelText='Notes'
                                    placeholderText='Notes'
                                    isRequired={true}
                                />
                            </div>
                            <div className='w-full md:w-[49%] mt-3 md:mt-0'>
                                <InputComponent 
                                    onChange={setTaxNumber}
                                    value={taxNumber}
                                    labelText='Tax Number'
                                    placeholderText='Tax Number'
                                    isRequired={true}
                                />
                            </div>
                        </div>
                        <div className='w-full flex justify-between flex-wrap items-center mt-3'>
                            <div className='w-full md:w-[49%]'>
                                <InputComponent 
                                    onChange={setDomain}
                                    value={domain}
                                    labelText='Domain'
                                    placeholderText='Domain'
                                    isRequired={true}
                                />
                            </div>
                            <div className='w-full md:w-[49%] mt-3 md:mt-0'>
                                <CheckboxComponent 
                                    onChange={setIsActive}
                                    value={isActive}
                                    labelText='Is Active'
                                />
                            </div>
                        </div>
                        <div className='w-full flex justify-between flex-wrap items-center mt-3'>
                            <div className='w-full md:w-[49%]'>
                                <InputComponent 
                                    onChange={setContactName}
                                    value={contactName}
                                    labelText='Contact Name'
                                    placeholderText='Contact Name'
                                    isRequired={true}
                                />
                            </div>
                            <div className='w-full md:w-[49%] mt-3 md:mt-0'>
                                <InputComponent 
                                    onChange={setContactPhone}
                                    value={contactPhone}
                                    labelText='Contact Phone'
                                    placeholderText='Contact Phone'
                                    isRequired={true}
                                />
                            </div>
                        </div>
                        <div className='w-full flex justify-between flex-wrap items-center mt-3'>
                            <div className='w-full md:w-[49%]'>
                                <InputComponent 
                                    onChange={setSocialFacebook}
                                    value={socialFacebook}
                                    labelText='Social Facebook'
                                    placeholderText='Social Facebook'
                                    isRequired={true}
                                />
                            </div>
                            <div className='w-full md:w-[49%] mt-3 md:mt-0'>
                                <InputComponent 
                                    onChange={setSocialInstagram}
                                    value={socialInstagram}
                                    labelText='Social Instagram'
                                    placeholderText='Social Instagram'
                                    isRequired={true}
                                />
                            </div>
                        </div>
                        <div className='w-full flex justify-between flex-wrap items-center mt-3'>
                            <div className='w-full md:w-[49%]'>
                                <InputComponent 
                                    onChange={setSocialX}
                                    value={socialX}
                                    labelText='Social X'
                                    placeholderText='Social X'
                                    isRequired={true}
                                />
                            </div>
                            <div className='w-full md:w-[49%] mt-3 md:mt-0'>
                                <InputComponent 
                                    onChange={setSettings}
                                    value={settings}
                                    labelText='Settings'
                                    placeholderText='Settings'
                                    isRequired={true}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='w-full mt-8'>
                        <ButtonComponent 
                            onClick={updateCompany}
                            buttonText='Update Company'
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
                <div className='w-[350px] absolute top-1/2 left-1/2 bg-white dark:bg-slate-900 p-5 rounded-xl border border-blue-500 drop-shadow-2xl' style={{transform: 'translate(-50%,-50%)'}}>
                    <div className='w-full flex items-center justify-between'>
                        <p className='text-lg text-black'>Are you sure?</p>
                        <IconX size={24} color='black' onClick={handleDeleteModalClose} className='cursor-pointer' />
                    </div>
                    <p className='mt-3 text-xs text-black'>Are you sure about <span className='font-bold'>deleting</span> company?</p>
                    <div className='w-full flex justify-end mt-5'>
                        <ButtonComponent 
                            buttonText='Delete'
                            className='h-8 text-xs w-1/2'
                            onClick={() => deleteCompany(deleteCompanyId)}
                        />
                    </div>
                </div>
            </Modal>
            <div className='w-full flex flex-wrap justify-between items-center mt-5'>
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
                        buttonText='+ Add New Company'
                    />
                </div>
            </div>
            <div className="card mt-5">
                <DataTable value={companies} sortField="id" sortOrder={1} tableStyle={{ minWidth: '50rem' }}>
                    <Column field="id" header="ID" sortable style={{ width: '5%' }}></Column>
                    <Column field="name" header="Name" style={{ width: '20%' }}></Column>
                    <Column field="contact.phone" header="Phone" body={phoneBodyTemplate} style={{ width: '15%' }}></Column>
                    <Column field="is_active" header="Status" body={statusBodyTemplate} sortable style={{ width: '10%' }}></Column>
                    <Column field="domain" header="Domain" body={domainBodyTemplate} style={{ width: '20%' }}></Column>
                    <Column field="actions" header="Actions" body={actionsBodyTemplate} style={{ width: '20%' }}></Column>
                </DataTable>
                <Paginator first={first} rows={rows} totalRecords={companyAmount} rowsPerPageOptions={[5, 10, 20, 50]} onPageChange={onPageChange} />
            </div>
        </div>
    );
}
