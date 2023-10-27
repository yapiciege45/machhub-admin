import { Switch } from '@mui/material'
import React from 'react'

export const CheckboxComponent = ({ onChange, onClick, value, labelText, id, isRequired = false, className = '' }) => {
  return (
    <div className={`flex flex-col w-full items-start ${className}`}>
      <label className='text-sm font-light ml-3 text-black'>{labelText}{isRequired && <em className='text-red-500'>*</em>}</label>
      <Switch
        checked={value}
        onClick={() => onChange(!value)}
        inputProps={{ 'aria-label': 'controlled' }}
      />
    </div>
  )
}
