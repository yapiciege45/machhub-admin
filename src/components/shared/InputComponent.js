import React from 'react'

export const InputComponent = ({ onChange, value, labelText, placeholderText, isRequired = false, inputType = 'text', className = '' }) => {
  return (
    <div className={`flex flex-col w-full ${className}`}>
      <label className='text-lg font-light ml-3'>{labelText}{isRequired && <em className='text-red-500'>*</em>}</label>
      <input onChange={(e) => onChange(e.target.value)} value={value} type={inputType} className='placeholder:text-md text-md placeholder:font-light border border-gray-400 p-2 px-4 rounded-lg focus-visible:outline-none focus-visible:border-gray-600 focus-visible:drop-shadow-md' placeholder={placeholderText} />
    </div>
  )
}
