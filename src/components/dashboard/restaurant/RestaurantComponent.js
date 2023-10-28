"use client"
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ButtonComponent } from '@/components/shared/ButtonComponent';
import { Box, Button, Modal, Typography } from '@mui/material';
import { IconCircleCheckFilled, IconCircleXFilled, IconPencil, IconTrash, IconX } from '@tabler/icons-react';
import { InputComponent } from '@/components/shared/InputComponent';
import { CheckboxComponent } from '@/components/shared/CheckboxComponent';

import { SelectComponent } from '@/components/shared/SelectComponent';
import { Paginator } from 'primereact/paginator';


export const RestaurantComponent = ({ 
    deleteRestaurant,
    restaurants,
    companies = [],
    showDeleteRestaurantModal,
    handleDeleteModalClose,
    deleteModalOpen,
    deleteRestaurantId,
    restaurantName,
    setRestaurantName,
    companyId,
    setCompanyId,
    addressCity,
    setAddressCity,
    restaurantPhone,
    setRestaurantPhone,
    addressStreet,
    setAddressStreet,
    addressHouseNumber,
    setAddressHouseNumber,
    addressPostNumber,
    setAddressPostNumber,
    addressOther,
    setAddressOther,
    lat,
    setLat,
    long,
    setLong,
    platformIsActive,
    setPlatformIsActive,
    webIsActive,
    setWebIsActive,
    logo,
    setLogo,
    isActive,
    setIsActive,
    commissionPickup,
    setCommissionPickup,
    commissionDelivery,
    setCommissionDelivery,
    commissionRestaurant,
    setCommissionRestaurant,
    bankName,
    setBankName,
    bankRegNumber,
    setBankRegNumber,
    bankKontoNumber,
    setBankKontoNumber,
    bankSwift,
    setBankSwift,
    bankIban,
    setBankIban,
    createRestaurant,
    handleOpen,
    handleClose,
    setOpen,
    open,
    updateModalOpen,
    setUpdateModelOpen,
    handleUpdateModalClose,
    handleUpdateModalOpen,
    updateRestaurant,
    first,
    rows,
    restaurantAmount,
    onPageChange,
    search,
    setSearch
}) => {

    const actionsBodyTemplate = (rowData) => {
        return (
            <div className='flex items-center'>
                <div className='p-3 rounded-lg bg-red-500 cursor-pointer' onClick={() => showDeleteRestaurantModal(rowData.id)}>
                    <IconTrash size={24} className='text-white' />
                </div>
                <div className='p-3 rounded-lg bg-amber-500 ml-5 cursor-pointer' onClick={() => handleUpdateModalOpen(rowData)}>
                    <IconPencil size={24} className='text-white' />
                </div>
            </div>
        )
    };

    const statusBodyTemplate = (is_active) => {
        if(is_active) {
            return <IconCircleCheckFilled size={24} className='text-green-500' />
        } else {
            return <IconCircleXFilled size={24} className='text-red-500' />
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
                        <h1 className='text-lg text-black'>Add Restaurant</h1>
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
                                <SelectComponent 
                                    onChange={setCompanyId}
                                    value={companyId}
                                    labelText='Company'
                                    placeholderText='Company'
                                    isRequired={true}
                                    options={companies}
                                />
                            </div>
                        </div>
                        <div className='w-full flex justify-between flex-wrap mt-3'>
                            <div className='w-full md:w-[49%]'>
                                <InputComponent
                                    onChange={setAddressCity}
                                    value={addressCity}
                                    labelText='Address City'
                                    placeholderText='Address City'
                                    isRequired={true}
                                />
                            </div>
                            <div className='w-full md:w-[49%] mt-3 md:mt-0'>
                                <InputComponent
                                    onChange={setAddressStreet}
                                    value={addressStreet}
                                    labelText='Address Street'
                                    placeholderText='Address Street'
                                    isRequired={true}
                                />
                            </div>
                        </div>
                        <div className='w-full flex justify-between flex-wrap mt-3'>
                            <div className='w-full md:w-[49%]'>
                                <InputComponent 
                                    onChange={setAddressHouseNumber}
                                    value={addressHouseNumber}
                                    labelText='House Number'
                                    placeholderText='House Number'
                                    isRequired={true}
                                />
                            </div>
                            <div className='w-full md:w-[49%]'>
                                <InputComponent
                                    onChange={setAddressPostNumber}
                                    value={addressPostNumber}
                                    labelText='Address Post Number'
                                    placeholderText='Address Post Number'
                                    isRequired={true}
                                />
                            </div>

                        </div>
                        <div className='w-full flex justify-between flex-wrap mt-3'>
                            <div className='w-full'>
                                <InputComponent 
                                    onChange={setAddressOther}
                                    value={addressOther}
                                    labelText='Address Other'
                                    placeholderText='Address Other'
                                    isRequired={true}
                                />
                            </div>
                        </div>
                        <div className='w-full flex justify-between flex-wrap mt-3'>
                            <div className='w-full md:w-[49%]'>
                                <InputComponent
                                    onChange={setLat}
                                    value={lat}
                                    labelText='Lat'
                                    placeholderText='Lat'
                                    isRequired={true}
                                />
                            </div>
                            <div className='w-full md:w-[49%] mt-3 md:mt-0'>
                                <InputComponent
                                    onChange={setLong}
                                    value={long}
                                    labelText='Long'
                                    placeholderText='Long'
                                    isRequired={true}
                                />
                            </div>
                        </div>
                        <div className='w-full flex justify-between flex-wrap mt-3'>
                            <div className='w-full md:w-[49%]'>
                                <CheckboxComponent 
                                    onChange={setPlatformIsActive}
                                    value={platformIsActive}
                                    labelText='Platform Is Active'
                                />
                            </div>
                            <div className='w-full md:w-[49%]'>
                                <CheckboxComponent 
                                    onChange={setWebIsActive}
                                    value={webIsActive}
                                    labelText='Web Is Active'
                                />
                            </div> 
                        </div>
                        <div className='w-full flex justify-between flex-wrap mt-3'>
                            <div className='w-full md:w-[49%]'>
                                <InputComponent
                                    onChange={setLogo}
                                    value={logo}
                                    labelText='Logo'
                                    placeholderText='Logo'
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
                        <div className='w-full flex justify-between flex-wrap mt-3'>
                            <div className='w-full md:w-[49%]'>
                                <InputComponent
                                    onChange={setCommissionPickup}
                                    value={commissionPickup}
                                    labelText='Commission Pickup'
                                    placeholderText='Commission Pickup'
                                    isRequired={true}
                                />
                            </div>  
                            <div className='w-full md:w-[49%]'>
                                <InputComponent
                                    onChange={setCommissionDelivery}
                                    value={commissionDelivery}
                                    labelText='Commission Delivery'
                                    placeholderText='Commission Delivery'
                                    isRequired={true}
                                />
                            </div>  
                        </div>
                        <div className='w-full flex justify-between flex-wrap mt-3'>
                            <div className='w-full md:w-[49%]'>
                                <InputComponent
                                    onChange={setCommissionRestaurant}
                                    value={commissionRestaurant}
                                    labelText='Commission Restaurant'
                                    placeholderText='Commission Restaurant'
                                    isRequired={true}
                                />
                            </div>  
                            <div className='w-full md:w-[49%]'>
                                <InputComponent
                                    onChange={setBankName}
                                    value={bankName}
                                    labelText='Bank Name'
                                    placeholderText='Bank Name'
                                    isRequired={true}
                                />
                            </div> 
                        </div>  
                        <div className='w-full flex justify-between flex-wrap mt-3'>
                            <div className='w-full md:w-[49%]'>
                                <InputComponent
                                    onChange={setBankRegNumber}
                                    value={bankRegNumber}
                                    labelText='Bank Reg Number'
                                    placeholderText='Bank Reg Number'
                                    isRequired={true}
                                />
                            </div>  
                            <div className='w-full md:w-[49%]'>
                                <InputComponent
                                    onChange={setBankKontoNumber}
                                    value={bankKontoNumber}
                                    labelText='Bank Konto Number'
                                    placeholderText='Bank Konto Number'
                                    isRequired={true}
                                />
                            </div> 
                        </div>
                        <div className='w-full flex justify-between flex-wrap mt-3'>
                            <div className='w-full md:w-[49%]'>
                                <InputComponent
                                    onChange={setBankSwift}
                                    value={bankSwift}
                                    labelText='Bank Swift'
                                    placeholderText='Bank Swift'
                                    isRequired={true}
                                />
                            </div>  
                            <div className='w-full md:w-[49%]'>
                                <InputComponent
                                    onChange={setBankIban}
                                    value={bankIban}
                                    labelText='Bank IBAN'
                                    placeholderText='Bank IBAN'
                                    isRequired={true}
                                />
                            </div> 
                        </div>  
                        <div className='w-full flex justify-between flex-wrap mt-3'>
                            <div className='w-full md:w-[49%]'>
                                <InputComponent
                                    onChange={setRestaurantPhone}
                                    value={restaurantPhone}
                                    labelText='Restaurant Phone'
                                    placeholderText='Restaurant Phone'
                                    isRequired={true}
                                />
                            </div>
                        </div>        
                    </div>
                
                    <div className='w-full mt-8'>
                        <ButtonComponent 
                            onClick={createRestaurant}
                            buttonText='Create Restaruant'
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
                        <h1 className='text-lg text-black'>Edit Restaurant</h1>
                        <IconX size={24} className='cursor-pointer' color='black' onClick={handleUpdateModalClose} />
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
                                <SelectComponent 
                                    onChange={setCompanyId}
                                    value={companyId}
                                    labelText='Company'
                                    placeholderText='Company'
                                    isRequired={true}
                                    options={companies}
                                />
                            </div>
                        </div>
                        <div className='w-full flex justify-between flex-wrap mt-3'>
                            <div className='w-full md:w-[49%]'>
                                <InputComponent
                                    onChange={setAddressHouseNumber}
                                    value={addressHouseNumber}
                                    labelText='Address House Number'
                                    placeholderText='Address House Number'
                                    isRequired={true}
                                />
                            </div>
                            <div className='w-full md:w-[49%] mt-3 md:mt-0'>
                                <InputComponent
                                    onChange={setAddressPostNumber}
                                    value={addressPostNumber}
                                    labelText='Address Post Number'
                                    placeholderText='Address Post Number'
                                    isRequired={true}
                                />
                            </div>
                        </div>
                        <div className='w-full flex justify-between flex-wrap mt-3'>
                            <div className='w-full md:w-[49%]'>
                                <InputComponent
                                    onChange={setAddressOther}
                                    value={addressOther}
                                    labelText='Address Other'
                                    placeholderText='Address Other'
                                    isRequired={true}
                                />
                            </div>
                            <div className='w-full md:w-[49%] md:mt-0 mt-3'>
                                <InputComponent
                                    onChange={setLat}
                                    value={lat}
                                    labelText='Lat'
                                    placeholderText='Lat'
                                    isRequired={true}
                                />
                            </div>
                        </div>
                        <div className='w-full flex justify-between flex-wrap mt-3'>
                            <div className='w-full md:w-[49%]'>
                                <InputComponent
                                    onChange={setLong}
                                    value={long}
                                    labelText='Long'
                                    placeholderText='Long'
                                    isRequired={true}
                                />
                            </div>
                            <div className='w-full md:w-[49%] mt-3 md:mt-0'>
                                <CheckboxComponent 
                                    onChange={setPlatformIsActive}
                                    value={platformIsActive}
                                    labelText='Platform is Active'
                                />
                            </div>
                        </div>   
                        <div className='w-full flex justify-between flex-wrap mt-3'>
                            <div className='w-full md:w-[49%]'>
                                <CheckboxComponent 
                                    onChange={setWebIsActive}
                                    value={webIsActive}
                                    labelText='Web is Active'
                                />
                            </div>    
                            <div className='w-full md:w-[49%] mt-3 md:mt-0'>
                                <InputComponent
                                    onChange={setLogo}
                                    value={logo}
                                    labelText='Logo'
                                    placeholderText='Logo'
                                    isRequired={true}
                                />
                            </div> 
                        </div>  
                        <div className='w-full flex justify-between flex-wrap mt-3'>
                            <div className='w-full md:w-[49%]'>
                                <CheckboxComponent 
                                    onChange={setIsActive}
                                    value={isActive}
                                    labelText='Is Active'
                                />
                            </div>  
                            <div className='w-full md:w-[49%] md:mt-0 mt-3'>
                                <InputComponent
                                    onChange={setCommissionPickup}
                                    value={commissionPickup}
                                    labelText='Commission Pickup'
                                    placeholderText='Commission Pickup'
                                    isRequired={true}
                                />
                            </div> 
                        </div> 
                        <div className='w-full flex justify-between flex-wrap mt-3'>
                            <div className='w-full md:w-[49%]'>
                                <InputComponent
                                    onChange={setCommissionDelivery}
                                    value={commissionDelivery}
                                    labelText='Commission Delivery'
                                    placeholderText='Commission Delivery'
                                    isRequired={true}
                                />
                            </div>  
                            <div className='w-full md:w-[49%] mt-3 md:mt-0'>
                                <InputComponent
                                    onChange={setCommissionRestaurant}
                                    value={commissionRestaurant}
                                    labelText='Commission Restaurant'
                                    placeholderText='Commission Restaurant'
                                    isRequired={true}
                                />
                            </div>  
                        </div> 
                        <div className='w-full flex justify-between flex-wrap mt-3'>
                            <div className='w-full md:w-[49%]'>
                                <InputComponent
                                    onChange={setBankName}
                                    value={bankName}
                                    labelText='Bank Name'
                                    placeholderText='Bank Name'
                                    isRequired={true}
                                />
                            </div>  
                            <div className='w-full md:w-[49%] md:mt-0 mt-3'>
                                <InputComponent
                                    onChange={setBankRegNumber}
                                    value={bankRegNumber}
                                    labelText='Bank Reg Number'
                                    placeholderText='Bank Reg Number'
                                    isRequired={true}
                                />
                            </div>    
                        </div> 
                        <div className='w-full flex justify-between flex-wrap mt-3'>
                            <div className='w-full md:w-[49%]'>
                                <InputComponent
                                    onChange={setBankKontoNumber}
                                    value={bankKontoNumber}
                                    labelText='Bank Konto Number'
                                    placeholderText='Bank Konto Number'
                                    isRequired={true}
                                />
                            </div>  
                            <div className='w-full md:w-[49%] mt-3 md:mt-0'>
                                <InputComponent
                                    onChange={setBankSwift}
                                    value={bankSwift}
                                    labelText='Bank Swift'
                                    placeholderText='Bank Swift'
                                    isRequired={true}
                                />
                            </div>    
                        </div>     
                        <div className='w-full flex justify-between flex-wrap mt-3'>
                            <div className='w-full md:w-[49%]'>
                                <InputComponent
                                    onChange={setBankIban}
                                    value={bankIban}
                                    labelText='Bank IBAN'
                                    placeholderText='Bank IBAN'
                                    isRequired={true}
                                />
                            </div>  
                            <div className='w-full md:w-[49%] mt-3 md:mt-0'>
                                <InputComponent
                                    onChange={setRestaurantPhone}
                                    value={restaurantPhone}
                                    labelText='Restaurant Phone'
                                    placeholderText='Restaurant Phone'
                                    isRequired={true}
                                />
                            </div>    
                        </div>     
                    </div>
                    <div className='w-full mt-8'>
                        <ButtonComponent 
                            onClick={updateRestaurant}
                            buttonText='Update Restaurant'
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
                        <IconX size={24} color='black' onClick={handleDeleteModalClose} />
                    </div>
                    <p className='mt-3 text-xs text-black'>Are you sure about <span className='font-bold'>deleting</span> restaurant?</p>
                    <div className='w-full flex justify-end mt-5'>
                        <ButtonComponent 
                            buttonText='Delete'
                            className='h-8 text-xs w-1/2'
                            onClick={() => deleteRestaurant(deleteRestaurantId)}
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
                        buttonText='+ Add New Restaurant'
                    />
                </div>
            </div>
            <div className="card mt-5">
                <DataTable value={restaurants} sortField="id" sortOrder={1} tableStyle={{ minWidth: '50rem' }}>
                    <Column field="id" header="ID" sortable style={{ width: '5%' }}></Column>
                    <Column field="name" header="Name" style={{ width: '20%' }}></Column>
                    <Column field="is_active" header="Status" body={statusBodyTemplate} sortable style={{ width: '10%' }}></Column>
                    <Column field="actions" header="Actions" body={actionsBodyTemplate} style={{ width: '20%' }}></Column>
                </DataTable>
                <Paginator first={first} rows={rows} totalRecords={restaurantAmount} rowsPerPageOptions={[1, 5, 10, 20, 50]} onPageChange={onPageChange} />
            </div>
        </div>
    );
}
