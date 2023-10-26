"use client"
import React, { useEffect, useState } from 'react'
import { CompanyComponent } from '@/components/dashboard/company/CompanyComponent'
import { SidebarContainer } from '@/containers/shared/SidebarContainer'
import { TopbarContainer } from '@/containers/shared/TopbarContainer'
import { PrimeReactProvider } from 'primereact/api'
import { getCookie } from 'cookies-next'
import { getCompanies } from '@/lib/getCompanies'
import { toast } from 'react-toastify'

export const CompanyContainer = () => {

  const [companies, setCompanies] = useState([]);
  const [deleteCompanyId, setDeleteCompanyId] = useState(0)
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [updateModalOpen, setUpdateModalOpen] = useState(false)

  const [id, setId] = useState(0)
  const [restaurantName, setRestaurantName] = useState('')
  const [chainName, setChainName] = useState('')
  const [notes, setNotes] = useState('')
  const [taxNumber, setTaxNumber] = useState('')
  const [domain, setDomain] = useState('')
  const [isActive, setIsActive] = useState(true)
  const [contactName, setContactName] = useState('')
  const [contactPhone, setContactPhone] = useState('')
  const [socialFacebook, setSocialFacebook] = useState('')
  const [socialInstagram, setSocialInstagram] = useState('')
  const [socialX, setSocialX] = useState('')
  const [settings, setSettings] = useState('')

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const clearAll = () => {
    setRestaurantName('')
    setChainName('')
    setNotes('')
    setTaxNumber('')
    setDomain('')
    setIsActive('')
    setContactName('')
    setContactPhone('')
    setSocialFacebook('')
    setSocialInstagram('')
    setSocialX('')
    setSettings('')
  }


  const handleDeleteModalOpen = () => setDeleteModalOpen(true);
  const handleDeleteModalClose = () => {
    clearAll()
    setDeleteModalOpen(false)
  };

  const handleUpdateModalOpen = (data) => {
    setUpdateModalOpen(true)

    setId(data.id)
    setRestaurantName(data.name)
    setChainName(data.chain_name)
    setNotes(data.notes)
    setTaxNumber(data.tax_number)
    setDomain(data.domain)
    setIsActive(data.is_active)
    setContactName(data.contact.name)
    setContactPhone(data.contact.phone)
    setSocialFacebook(data.social.facebook)
    setSocialInstagram(data.social.instagram)
    setSocialX(data.social.x)
    setSettings(data.settings)
  };
  const handleUpdateModalClose = () => {
    clearAll()
    setUpdateModalOpen(false)
  };

  const showDeleteCompanyModal = (id) => {
    setDeleteCompanyId(id)
    setDeleteModalOpen(true)
  }

  const deleteCompany = async (id) => {
    handleDeleteModalClose()

    const res = await fetch(`${process.env.API_URL}/company/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${getCookie('token')}`
      }
    })

    const data = await res.json()

    if(data.status == 'success') {
      toast.success(data.message)
      setCompanies(companies.filter(x => x.id !== id))
    } else {
      toast.error("An error occurred when deleting company.")
    }

    return data
  }

  const createCompany = async () => {

    handleClose()

    const res = await fetch(`${process.env.API_URL}/company`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        name: restaurantName,
        chain_name: chainName,
        notes: notes,
        tax_number: taxNumber,
        contact: {
          name: contactName,
          phone: contactPhone
        },
        social: {
          facebook: socialFacebook,
          instagram: socialInstagram,
          x: socialX
        },
        domain: domain,
        is_active: isActive ? 1 : 0,
        settings: settings,
      })
    })

    const data = await res.json()

    if(data.status == 'success') {
      toast.success(data.message)
      setCompanies([
        ...companies,
        {
          name: restaurantName,
          chain_name: chainName,
          notes: notes,
          tax_number: taxNumber,
          contact: {
            name: contactName,
            phone: contactPhone
          },
          social: {
            facebook: socialFacebook,
            instagram: socialInstagram,
            x: socialX
          },
          domain: domain,
          settings: settings,
        }
      ])
    } else {
      toast.error("An error occurred when creating company.")
    }

    return data
  }

  const updateCompany = async () => {

    handleUpdateModalClose()

    const res = await fetch(`${process.env.API_URL}/company/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        id: id,
        name: restaurantName,
        chain_name: chainName,
        notes: notes,
        tax_number: taxNumber,
        contact: {
          name: contactName,
          phone: contactPhone
        },
        social: {
          facebook: socialFacebook,
          instagram: socialInstagram,
          x: socialX
        },
        domain: domain,
        is_active: isActive ? 1 : 0,
        settings: settings,
      })
    })

    const data = await res.json()

    if(data.status == 'success') {
      toast.success(data.message)
      getCompanies().then(data => setCompanies(data));
    } else {
      toast.error("An error occurred when creating company.")
    }

    return data
  }

  useEffect(() => {
    getCompanies().then(data => setCompanies(data));
  }, []);

  return (
    <SidebarContainer>
        <TopbarContainer>
            <CompanyComponent 
              deleteCompany={deleteCompany}
              companies={companies}
              showDeleteCompanyModal={showDeleteCompanyModal}
              handleDeleteModalClose={handleDeleteModalClose}
              updateModalOpen={updateModalOpen}
              setUpdateModalOpen={setUpdateModalOpen}
              deleteModalOpen={deleteModalOpen}
              deleteCompanyId={deleteCompanyId}
              handleUpdateModalClose={handleUpdateModalClose}
              handleUpdateModalOpen={handleUpdateModalOpen}
              clearAll={clearAll}
              restaurantName={restaurantName}
              setRestaurantName={setRestaurantName}
              chainName={chainName}
              setChainName={setChainName}
              notes={notes}
              setNotes={setNotes}
              taxNumber={taxNumber}
              setTaxNumber={setTaxNumber}
              domain={domain}
              setDomain={setDomain}
              isActive={isActive}
              setIsActive={setIsActive}
              contactName={contactName}
              contactPhone={contactPhone}
              setContactName={setContactName}
              setContactPhone={setContactPhone}
              socialFacebook={socialFacebook}
              setSocialFacebook={setSocialFacebook}
              socialInstagram={socialInstagram}
              setSocialInstagram={setSocialInstagram}
              socialX={socialX}
              setSocialX={setSocialX}
              settings={settings}
              setSettings={setSettings}
              createCompany={createCompany}
              open={open}
              setOpen={setOpen}
              handleClose={handleClose}
              handleOpen={handleOpen}
              updateCompany={updateCompany}
            />
        </TopbarContainer>
    </SidebarContainer>
  )
}