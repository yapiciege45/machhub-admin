import React, { useState } from 'react'
import validator from 'validator';

export const InputComponent = ({ onChange, value, labelText, placeholderText, isRequired = false, inputType = 'text', className = '', validationName, validationType }) => {

  const [validation, setValidation] = useState(true)
  const [validationText, setValidationText] = useState('')

  const inputChange = (e) => {
    const val = e.target.value

    if(isRequired) {
      if(val == '') {
        setValidation(false)
        setValidationText(labelText + ' is required.')
      } else {
        setValidation(true)

        switch (validationType) {
          case 'email':
            if(!validator.isEmail(value)) {
              setValidation(false)
              setValidationText('Email is not valid.')
            }

            break;

          case 'password':
            
            if(val.length < 6) {
              setValidation(false)
              setValidationText('Password needs to be at least 6 characters.')
            }

            break;
          default:
            break;
        }
      }
    }
  
    onChange(val)
    
  }

  return (
    <div className={`flex flex-col w-full ${className}`}>
      {
        labelText && (
          <label className='text-sm font-light ml-3 text-black'>{labelText}{isRequired && <em className='text-red-500'>*</em>}</label>
        )
      }
      <input onChange={inputChange} value={value} type={inputType} className={`placeholder:text-sm text-sm bg-white text-black placeholder:font-light border-2 ${validation ? 'border-gray-200 focus-visible:border-blue-400' : 'border-red-500'} p-2 px-4 rounded-lg focus-visible:outline-none focus-visible:drop-shadow-lg`} placeholder={placeholderText} />
      {
        !validation && (
          <p className='text-sm text-red-500'>{validationText}</p>
        )
      }
    </div>
  )
}
