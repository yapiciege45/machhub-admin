import React from 'react'
import { GeneralUserContainer } from './GeneralUserContainer'
import { AdminUserComponent } from '@/components/dashboard/user/AdminUserComponent'
import { PrimeReactTheme } from '@/containers/shared/PrimeReactTheme'
import { SidebarContainer } from '@/containers/shared/SidebarContainer'
import { TopbarContainer } from '@/containers/shared/TopbarContainer'
import { RestaurantUserComponent } from '@/components/dashboard/user/RestaurantUserComponent'

export const RestaurantUserContainer = () => {
  return (
    <PrimeReactTheme>
      <SidebarContainer>
          <TopbarContainer>
                <GeneralUserContainer url='restaurant'>
                    <RestaurantUserComponent />
                </GeneralUserContainer>
          </TopbarContainer>
      </SidebarContainer>
    </PrimeReactTheme>
  )
}
