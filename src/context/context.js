"use client"
import React, { createContext, useState } from 'react';

export const Context = createContext();

export const ContextProvider = (props) => {
    const [navIsOpen, setNavIsOpen] = useState(false)
    const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false)
    const [darkMode, setDarkMode] = useState(false)
  
    return (
      <Context.Provider value={{
        navIsOpen,
        mobileNavIsOpen,
        setNavIsOpen,
        setMobileNavIsOpen,
        darkMode,
        setDarkMode
      }}>
        {props.children}
      </Context.Provider>
    )
}