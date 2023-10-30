import React from 'react'
import { GeneralUserContainer } from './GeneralUserContainer'
import { AdminUserComponent } from '@/components/dashboard/user/AdminUserComponent'
import { PrimeReactTheme } from '@/containers/shared/PrimeReactTheme'
import { SidebarContainer } from '@/containers/shared/SidebarContainer'
import { TopbarContainer } from '@/containers/shared/TopbarContainer'

export const AdminUserContainer = () => {
  return (
    <PrimeReactTheme>
      <SidebarContainer>
          <TopbarContainer>
                <GeneralUserContainer url='admin'>
                    <AdminUserComponent />
                </GeneralUserContainer>
          </TopbarContainer>
      </SidebarContainer>
    </PrimeReactTheme>
  )
}
