"use client"
import { RestaurantDetailComponent } from '@/components/dashboard/restaurant/RestaurantDetailComponent'
import { RestaurantMenuComponent } from '@/components/dashboard/restaurant/RestaurantMenuComponent'
import { PrimeReactTheme } from '@/containers/shared/PrimeReactTheme'
import { SidebarContainer } from '@/containers/shared/SidebarContainer'
import { SidebarRestaurantDetailContainer } from '@/containers/shared/SidebarRestaurantDetailContainer'
import { TopbarContainer } from '@/containers/shared/TopbarContainer'
import { getAllCategories, getCategories, searchCategories } from '@/lib/category'
import React, { useEffect, useState } from 'react'

export const RestaurantMenuContainer = ({ id }) => {

    const [search, setSearch] = useState('')
    const [allCategories, setAllCategories] = useState([])
    const [searchedCategories, setSearchedCategories] = useState([])
    const [amount, setAmount] = useState(0)

    useEffect(() => {
        getAllCategories(id).then(x => {
          setAllCategories(x)
          setSearchedCategories(x)
          setAmount(x.length)
        })
    }, [])

    useEffect(() => {
      searchCategories(allCategories, search).then(x => {
        setSearchedCategories(x)
      })
    }, [search])
    
  return (
    <PrimeReactTheme>
      <SidebarRestaurantDetailContainer id={id}>
          <TopbarContainer>
              <RestaurantMenuComponent
                search={search}
                setSearch={setSearch}
                searchedCategories={searchedCategories}
                amount={amount}
              />
          </TopbarContainer>
      </SidebarRestaurantDetailContainer>
    </PrimeReactTheme>
  )
}
