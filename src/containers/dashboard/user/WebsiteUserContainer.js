import React from 'react'
import { GeneralUserContainer } from './GeneralUserContainer'
import { AdminUserComponent } from '@/components/dashboard/user/AdminUserComponent'
import { PrimeReactTheme } from '@/containers/shared/PrimeReactTheme'
import { SidebarContainer } from '@/containers/shared/SidebarContainer'
import { TopbarContainer } from '@/containers/shared/TopbarContainer'
import { WebsiteUserComponent } from '@/components/dashboard/user/WebsiteUserComponent'

export const WebsiteUserContainer = () => {
  return (
    <PrimeReactTheme>
      <SidebarContainer>
          <TopbarContainer>
                <GeneralUserContainer url='website'>
                    <WebsiteUserComponent />
                </GeneralUserContainer>
          </TopbarContainer>
      </SidebarContainer>
    </PrimeReactTheme>
  )
}
