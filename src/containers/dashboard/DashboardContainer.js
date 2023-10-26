import { DashboardComponent } from '@/components/dashboard/DashboardComponent'
import React from 'react'
import { SidebarContainer } from '../shared/SidebarContainer'
import { TopbarContainer } from '../shared/TopbarContainer'

export const DashboardContainer = () => {
  return (
    <SidebarContainer>
        <TopbarContainer>
            <DashboardComponent />
        </TopbarContainer>
    </SidebarContainer>
  )
}