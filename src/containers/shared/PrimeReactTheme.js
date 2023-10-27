"use client"
import React, { useContext, useEffect } from 'react'

export const PrimeReactTheme = ({ children }) => {

    const { darkMode } = useContext(Context);

    useEffect(() => {
        const theme = darkMode ? '/primereact/resources/themes/soho-dark/theme.css' : '/primereact/resources/themes/soho-light/theme.css';
        const link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('type', 'text/css');
        link.setAttribute('href', theme);
        document.head.appendChild(link);
    
        return () => {
          // Tema değişikliği geri alındığında burada temayı kaldırabilirsiniz.
          document.head.removeChild(link);
        };
      }, [darkMode]);

  return children
}
