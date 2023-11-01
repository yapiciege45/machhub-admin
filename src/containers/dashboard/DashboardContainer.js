import { DashboardComponent } from '@/components/dashboard/DashboardComponent'
import React from 'react'
import { SidebarContainer } from '../shared/SidebarContainer'
import { TopbarContainer } from '../shared/TopbarContainer'
import { PrimeReactTheme } from '../shared/PrimeReactTheme'

export const DashboardContainer = () => {
  return (
    <PrimeReactTheme>
      <SidebarContainer>
          <TopbarContainer>
              <DashboardComponent />
          </TopbarContainer>
      </SidebarContainer>
    </PrimeReactTheme>
  )
}