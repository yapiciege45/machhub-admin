import { SelectComponent } from '@/components/shared/SelectComponent'
import React from 'react'

export const GeneralUserComponent = ({ userType, setUserType, options }) => {
  return (
    <SelectComponent 
        onChange={setUserType}
        value={userType}
        options={options}
        placeholderText='User Type'
    />
  )
}
