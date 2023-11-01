"use client"
import React, { useEffect, useState } from 'react'
import { RestaurantComponent } from '@/components/dashboard/restaurant/RestaurantComponent'
import { SidebarContainer } from '@/containers/shared/SidebarContainer'
import { TopbarContainer } from '@/containers/shared/TopbarContainer'
import { getCookie } from 'cookies-next'
import {  CreateRestaurant, DeleteRestaurant, UpdateRestaurant, getAllRestaurants, getRestaurants, paginateRestaurants, searchRestaurants } from '@/lib/restaurant'
import { toast } from 'react-toastify'
import { PrimeReactTheme } from '@/containers/shared/PrimeReactTheme'
import { getAllCompanies } from '@/lib/company'

export const RestaurantContainer = () => {

  const [restaurants, setRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchedRestaurants, setSearchedRestaurants] = useState([])

  const [deleteRestaurantId, setDeleteRestaurantId] = useState(0)
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [updateModalOpen, setUpdateModalOpen] = useState(false)

  const [id, setId] = useState(0)
  const [companies, setCompanies] = useState([])
  const [companyId, setCompanyId] = useState(0)
  const [addressStreet, setAddressStreet] = useState('')
  const [addressCity, setAddressCity] = useState('')
  const [addressPostNumber, setAddressPostNumber] = useState('')
  const [addressHouseNumber, setAddressHouseNumber] = useState('')
  const [addressOther, setAddressOther] = useState('')
  const [restaurantName, setRestaurantName] = useState('')
  const [restaurantPhone, setRestaurantPhone] = useState('')
  const [isActive, setIsActive] = useState(true)
  const [platformIsActive, setPlatformIsActive] = useState(true)
  const [webIsActive, setWebIsActive] = useState(true)
  const [bankName, setBankName] = useState('')
  const [bankRegNumber, setBankRegNumber] = useState('')
  const [bankKontoNumber, setBankKontoNumber] = useState('')
  const [bankIban, setBankIban] = useState('')
  const [bankSwift, setBankSwift] = useState('')
  const [commissionPickup, setCommissionPickup] = useState('')
  const [commissionDelivery, setCommissionDelivery] = useState('')
  const [commissionRestaurant, setCommissionRestaurant] = useState('')
  const [lat, setLat] = useState('')
  const [long, setLong] = useState('')
  const [firstLogo, setFirstLogo] = useState(null)
  const [logo, setLogo] = useState(null)
  const [open, setOpen] = useState(false);

  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);
  const [restaurantAmount, setRestaurantAmount] = useState(0)
  const [page, setPage] = useState(0)
  const [search, setSearch] = useState('')

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onPageChange = (event) => {
    console.log(event)
    setFirst(event.first);
    setRows(event.rows);
    setPage(event.page)
  };

  const clearAll = () => {
    setRestaurantName('')
    setRestaurantPhone('')
    setCompanyId('')
    setAddressStreet('')
    setAddressCity('')
    setAddressPostNumber('')
    setAddressHouseNumber('')
    setAddressOther('')
    setBankName('')
    setBankRegNumber('')
    setBankKontoNumber('')
    setBankIban('')
    setBankSwift('')
    setCommissionPickup('')
    setCommissionDelivery('')
    setCommissionRestaurant('')
    setLat('')
    setLong('')
    setLogo(null)
    setIsActive(true)
    setPlatformIsActive(true)
    setWebIsActive(true)
    
  }


  const handleDeleteModalOpen = () => setDeleteModalOpen(true);
  const handleDeleteModalClose = () => {
    clearAll()
    setDeleteModalOpen(false)
  };

  const handleUpdateModalOpen = (data) => {
    setUpdateModalOpen(true)

    setId(data.id)
    if(data.company) {
      setCompanyId(data.company.id)
    }
    setRestaurantName(data.name)
    setRestaurantPhone(data.phone)
    setAddressStreet(data.address.street)
    setAddressCity(data.address.city)
    setAddressPostNumber(data.address.zip)
    setAddressHouseNumber(data.address.house_number)
    setAddressOther(data.address.other)
    setBankName(data.bank.name)
    setBankRegNumber(data.bank.regnumber)
    setBankKontoNumber(data.bank.kontonumber)
    setBankIban(data.bank.iban)
    setBankSwift(data.bank.swift)
    setCommissionPickup(data.commission.pickup)
    setCommissionDelivery(data.commission.delivery)
    setCommissionRestaurant(data.commission.restaurant)
    setLat(data.lat)
    setLong(data.long)
    setFirstLogo(data.logo)
    setLogo(data.logo)
    setIsActive(data.is_active)
    setPlatformIsActive(data.platform_is_active)
    setWebIsActive(data.web_is_active)   
  };
  const handleUpdateModalClose = () => {
    clearAll()
    setUpdateModalOpen(false)
  };

  const showDeleteRestaurantModal = (id) => {
    setDeleteRestaurantId(id)
    setDeleteModalOpen(true)
  }

  const deleteRestaurant = async (id) => {
    handleDeleteModalClose()

    const data = await DeleteRestaurant(id)

    if(data.status == 'success') {
      toast.success(data.message)
      setRestaurants(restaurants.filter(x => x.id !== id))
    } else {
      toast.error("An error occurred when deleting restaurant.")
    }

    return data
  }

  const createRestaurant = async () => {

    handleClose()

    const data = await CreateRestaurant({
      name: restaurantName,
      phone: restaurantPhone,
      company_id : companyId,
      address : {
        street: addressStreet,
        city: addressCity,
        zip: addressPostNumber,
        house_number: addressHouseNumber,
        other: addressOther,
      },
      logo,
      bank : {
        name: bankName,
        regnumber: bankRegNumber,
        kontonumber: bankKontoNumber,
        iban: bankIban,
        swift: bankSwift,
      },
      commission: {
        pickup: commissionPickup,
        delivery: commissionDelivery,
        restaurant: commissionRestaurant,
      },
      lat: lat,
      long: long,
      is_active: isActive ? 1 : 0,
      platform_is_active: platformIsActive ? 1 : 0,
      web_is_active: webIsActive ? 1 : 0,

    })
    
    if(data.status == 'success') {
      toast.success(data.message)
      setRestaurants([
        ...restaurants,
        {
          name: restaurantName,
          phone: restaurantPhone,
          company_id : companyId,
          address : {
            street: addressStreet,
            city: addressCity,
            zip: addressPostNumber,
            house_number: addressHouseNumber,
            other: addressOther,
          },
          bank : {
            name: bankName,
            regnumber: bankRegNumber,
            kontonumber: bankKontoNumber,
            iban: bankIban,
            swift: bankSwift,
          },
          commission: {
            pickup: commissionPickup,
            delivery: commissionDelivery,
            restaurant: commissionRestaurant,
          },
          lat: lat,
          long: long,
          is_active: isActive ? 1 : 0,
          platform_is_active: platformIsActive ? 1 : 0,
          web_is_active: webIsActive ? 1 : 0,
        }
      ])
    } else {
      toast.error("An error occurred when creating restaurant.")
    }

    return data
  }

  const updateRestaurant = async () => {

    handleUpdateModalClose()

    const data = await UpdateRestaurant(id, {
      name: restaurantName,
      phone: restaurantPhone,
      company_id : companyId,
      address : {
        street: addressStreet,
        city: addressCity,
        zip: addressPostNumber,
        house_number: addressHouseNumber,
        other: addressOther,
      },
      logo: (firstLogo != logo) ? logo : null,
      bank : {
        name: bankName,
        regnumber: bankRegNumber,
        kontonumber: bankKontoNumber,
        iban: bankIban,
        swift: bankSwift,
      },
      commission: {
        pickup: commissionPickup,
        delivery: commissionDelivery,
        restaurant: commissionRestaurant,
      },
      lat: lat,
      long: long,
      is_active: isActive ? 1 : 0,
      platform_is_active: platformIsActive ? 1 : 0,
      web_is_active: webIsActive ? 1 : 0,

    })

    if(data.status == 'success') {
      toast.success(data.message)
      getAllRestaurants().then(data => {
        setAllRestaurants(data)
      });
    } else {
      toast.error("An error occurred when creating restaurant.")
    }
  }

  useEffect(() => {
    getAllRestaurants().then(data => {
      setAllRestaurants(data)
    });
    getAllCompanies().then(data => {
      setCompanies(data.map(x => ({
        value: x.id,
        label: x.name
      })))
    });
  }, []);

  useEffect(() => {
    searchRestaurants(allRestaurants, search).then(data => {
      setSearchedRestaurants(data)
    });
  }, [search, allRestaurants]);

  useEffect(() => {
    paginateRestaurants(searchedRestaurants, page, rows).then(data => {
      setRestaurants(data)
    });
  }, [page, rows, first, allRestaurants, searchedRestaurants]);

  return (
    <PrimeReactTheme>
      <SidebarContainer>
          <TopbarContainer>
              <RestaurantComponent 
                deleteRestaurant={deleteRestaurant}
                restaurants={restaurants}
                showDeleteRestaurantModal={showDeleteRestaurantModal}
                handleDeleteModalClose={handleDeleteModalClose}
                updateModalOpen={updateModalOpen}
                setUpdateModalOpen={setUpdateModalOpen}
                deleteModalOpen={deleteModalOpen}
                deleteRestaurantId={deleteRestaurantId}
                handleUpdateModalClose={handleUpdateModalClose}
                handleUpdateModalOpen={handleUpdateModalOpen}
                clearAll={clearAll}
                restaurantName={restaurantName}
                restaurantPhone={restaurantPhone}
                companyId={companyId}
                addressStreet={addressStreet}
                addressCity={addressCity}
                addressPostNumber={addressPostNumber}
                addressHouseNumber={addressHouseNumber}
                addressOther={addressOther}
                bankName={bankName}
                bankRegNumber={bankRegNumber}
                bankKontoNumber={bankKontoNumber}
                bankIban={bankIban}
                bankSwift={bankSwift}
                commissionPickup={commissionPickup}
                commissionDelivery={commissionDelivery}
                commissionRestaurant={commissionRestaurant}
                lat={lat}
                long={long}
                logo={logo}
                platformIsActive={platformIsActive}
                webIsActive={webIsActive}
                setRestaurantPhone={setRestaurantPhone}
                setCompanyId={setCompanyId}
                setAddressStreet={setAddressStreet}
                setAddressCity={setAddressCity}
                setAddressPostNumber={setAddressPostNumber}
                setAddressHouseNumber={setAddressHouseNumber}
                setAddressOther={setAddressOther}
                setBankName={setBankName}
                setBankRegNumber={setBankRegNumber}
                setBankKontoNumber={setBankKontoNumber}
                setBankIban={setBankIban}
                setBankSwift={setBankSwift}
                setCommissionPickup={setCommissionPickup}
                setCommissionDelivery={setCommissionDelivery}
                setCommissionRestaurant={setCommissionRestaurant}
                setLat={setLat}
                setLong={setLong}
                setLogo={setLogo}
                setPlatformIsActive={setPlatformIsActive}
                setWebIsActive={setWebIsActive}
                setRestaurantName={setRestaurantName}
                isActive={isActive}
                setIsActive={setIsActive}
                createRestaurant={createRestaurant}
                open={open}
                setOpen={setOpen}
                handleClose={handleClose}
                handleOpen={handleOpen}
                updateRestaurant={updateRestaurant}
                companies={companies}
                setSearch={setSearch}
                search={search}
                onPageChange={onPageChange}
                first={first}
                rows={rows}
                restaurantAmount={allRestaurants.length}
              />
          </TopbarContainer>
      </SidebarContainer>
    </PrimeReactTheme>
  )
}