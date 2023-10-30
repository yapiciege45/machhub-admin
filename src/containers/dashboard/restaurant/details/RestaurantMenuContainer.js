"use client"
import { RestaurantDetailComponent } from '@/components/dashboard/restaurant/RestaurantDetailComponent'
import { RestaurantMenuComponent } from '@/components/dashboard/restaurant/RestaurantMenuComponent'
import { PrimeReactTheme } from '@/containers/shared/PrimeReactTheme'
import { SidebarContainer } from '@/containers/shared/SidebarContainer'
import { SidebarRestaurantDetailContainer } from '@/containers/shared/SidebarRestaurantDetailContainer'
import { TopbarContainer } from '@/containers/shared/TopbarContainer'
import { getCategories } from '@/lib/getCategories'
import React, { useEffect, useState } from 'react'

export const RestaurantMenuContainer = ({ id }) => {

    const [search, setSearch] = useState('')

    useEffect(() => {
        getCategories(id, false, 0, 10, search)
    }, [])

    useEffect(() => {
        let timeout;

        const handleSearch = () => {
            getCategories(id, false, 0, 10, search);
        };

        clearTimeout(timeout);
        timeout = setTimeout(handleSearch, 500);

        return () => clearTimeout(timeout);
    }, [search])
    
  return (
    <PrimeReactTheme>
      <SidebarRestaurantDetailContainer id={id}>
          <TopbarContainer>
              <RestaurantMenuComponent
                search={search}
                setSearch={setSearch}
              />
          </TopbarContainer>
      </SidebarRestaurantDetailContainer>
    </PrimeReactTheme>
  )
}
