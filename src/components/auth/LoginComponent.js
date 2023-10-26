import Image from 'next/image'
import React, { useState } from 'react'
import { InputComponent } from '../shared/InputComponent'
import { ButtonComponent } from '../shared/ButtonComponent'

export const LoginComponent = ({ email, setEmail, password, setPassword, handleLogin }) => {
  return (
    <div className='flex w-full h-screen'>
      <div className="w-1/3 lg:w-2/3 h-screen relative hidden md:block">
        <Image 
          src='https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg'
          fill='cover'
        />
        <div className='bg-black/60 absolute w-full h-full top-0 left-0'></div>
      </div>
      <div className='w-full md:w-2/3 lg:w-1/3 h-full bg-gray-100 flex flex-col justify-center items-center p-5'>
        <h1 className='text-3xl font-bold'>MachHUB</h1>
        <InputComponent 
          onChange={setEmail}
          value={email}
          inputType='email'
          placeholderText='Enter email...'
          labelText='Email'
          className='mt-5'
        />
        <InputComponent 
          onChange={setPassword}
          value={password}
          inputType='password'
          placeholderText='Enter password...'
          labelText='Password'
          className='mt-5'
        />
        <ButtonComponent 
          onClick={handleLogin}
          className='mt-8'
          buttonText='Login'
        />
      </div>
    </div>
  )
}
