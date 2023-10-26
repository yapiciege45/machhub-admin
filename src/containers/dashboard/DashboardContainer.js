import { DashboardComponent } from '@/components/dashboard/DashboardComponent'
import React from 'react'
import { SidebarContainer } from '../shared/SidebarContainer'

export const DashboardContainer = () => {
  return (
    <SidebarContainer>
        <DashboardComponent />
    </SidebarContainer>
  )
}