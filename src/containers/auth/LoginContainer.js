"use client"
import { LoginComponent } from '@/components/auth/LoginComponent'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

export const LoginContainer = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    })

    const data = await res.json()

    console.log(data)

    if(data.status == 'error') {
      toast.error(data.message)
    } else {
      toast.success(data.message)
    }
  }

  return (
    <LoginComponent
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleLogin={handleLogin}
    />
  )
}
