import { RestaurantDetailComponent } from '@/components/dashboard/restaurant/RestaurantDetailComponent'
import { PrimeReactTheme } from '@/containers/shared/PrimeReactTheme'
import { SidebarContainer } from '@/containers/shared/SidebarContainer'
import { SidebarRestaurantDetailContainer } from '@/containers/shared/SidebarRestaurantDetailContainer'
import { TopbarContainer } from '@/containers/shared/TopbarContainer'
import React from 'react'

export const RestaurantDetailContainer = ({ id }) => {
  return (
    <PrimeReactTheme>
      <SidebarRestaurantDetailContainer id={id}>
          <TopbarContainer>
              <RestaurantDetailComponent />
          </TopbarContainer>
      </SidebarRestaurantDetailContainer>
    </PrimeReactTheme>
  )
}
