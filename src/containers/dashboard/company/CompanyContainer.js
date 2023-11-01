"use client"
import React, { useEffect, useState } from 'react'
import { CompanyComponent } from '@/components/dashboard/company/CompanyComponent'
import { SidebarContainer } from '@/containers/shared/SidebarContainer'
import { TopbarContainer } from '@/containers/shared/TopbarContainer'
import { getCookie } from 'cookies-next'
import { toast } from 'react-toastify'
import { PrimeReactTheme } from '@/containers/shared/PrimeReactTheme'
import { CreateCompany, DeleteCompany, UpdateCompany, getAllCompanies, paginateCompanies, searchCompanies } from '@/lib/company'

export const CompanyContainer = () => {

  const [companies, setCompanies] = useState([]);

  const [searchedCompanies, setSearchedCompanies] = useState([])
  const [allCompanies, setAllCompanies] = useState([])

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

  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);
  const [page, setPage] = useState(0)
  const [search, setSearch] = useState('')

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

  const onPageChange = (event) => {
    setFirst(event.first);
    setRows(event.rows);
    setPage(event.page)
  };

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

    const data = await DeleteCompany(id)

    if(data.status == 'success') {
      toast.success(data.message)
      setAllCompanies(allCompanies.filter(x => x.id !== id))
    } else {
      toast.error("An error occurred when deleting company.")
    }
  }

  const createCompany = async () => {

    handleClose()

    const data = await CreateCompany({
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
  }

  const updateCompany = async () => {

    handleUpdateModalClose()

    const data = await UpdateCompany(id, {
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

    if(data.status == 'success') {
      toast.success(data.message)
      getAllCompanies().then(data => {
        setAllCompanies(data)
      });
    } else {
      toast.error("An error occurred when creating company.")
    }
  }

  useEffect(() => {
    getAllCompanies().then(data => setAllCompanies(data));
  }, []);

  useEffect(() => {
    searchCompanies(allCompanies, search).then(data => {
      setSearchedCompanies(data)
    });
  }, [search, allCompanies]);

  useEffect(() => {
    paginateCompanies(searchedCompanies, page, rows).then(data => {
      setCompanies(data)
    });
  }, [first, page, rows, allCompanies, searchedCompanies]);

  useEffect(() => {
    searchCompanies(allCompanies, search).then(data => {
        setCompanies(data)
      });
  }, [search]);

  return (
    <PrimeReactTheme>
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
                first={first}
                setFirst={setFirst}
                rows={rows}
                setRows={setRows}
                onPageChange={onPageChange}
                companyAmount={searchedCompanies.length}
                search={search}
                setSearch={setSearch}
              />
          </TopbarContainer>
      </SidebarContainer>
    </PrimeReactTheme>
  )
}