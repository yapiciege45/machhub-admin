import React from 'react'
import { GeneralUserContainer } from './GeneralUserContainer'
import { PrimeReactTheme } from '@/containers/shared/PrimeReactTheme'
import { SidebarContainer } from '@/containers/shared/SidebarContainer'
import { TopbarContainer } from '@/containers/shared/TopbarContainer'
import { CompanyUserComponent } from '@/components/dashboard/user/CompanyUserComponent'

export const CompanyUserContainer = () => {
  return (
    <PrimeReactTheme>
      <SidebarContainer>
          <TopbarContainer>
                <GeneralUserContainer url='company'>
                    <CompanyUserComponent />
                </GeneralUserContainer>
          </TopbarContainer>
      </SidebarContainer>
    </PrimeReactTheme>
  )
}
