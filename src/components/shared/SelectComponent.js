import React from 'react'

export const SelectComponent = ({ onChange, options, value, labelText, placeholderText, isRequired = false, className = '' }) => {

    return (
        <div className={`flex flex-col w-full ${className}`}>
          <label className='text-sm font-light ml-3 text-black'>{labelText}{isRequired && <em className='text-red-500'>*</em>}</label>
          <select onChange={(e) => onChange(e.target.value)} value={value} className='text-black placeholder:text-black placeholder:text-sm bg-white text-sm placeholder:font-light border-2 border-gray-200 p-2 px-4 rounded-xl focus-visible:outline-none focus-visible:border-blue-400 focus-visible:drop-shadow-md' placeholder={placeholderText}>
            {
                options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))
            }
          </select>
        </div>
      )
}
