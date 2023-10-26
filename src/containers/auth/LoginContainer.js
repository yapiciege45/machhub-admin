"use client"
import { LoginComponent } from '@/components/auth/LoginComponent'
import { apiUrl } from '@/config/apiUrl'
import { setCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

export const LoginContainer = () => {

  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    const res = await fetch(`${apiUrl()}/admin/login`, {
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

    if(data.status == 'error') {
      toast.error(data.message)
    } else {
      toast.success(data.message)

      setCookie('token', data.token)
      router.push('/dashboard')
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
