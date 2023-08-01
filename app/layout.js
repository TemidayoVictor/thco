'use client'
import React, { useState } from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import Shared from './components/Shared'
import SideNav from './components/SideNav'
import "../public/styles/boxicons/boxicons-2.1.4/boxicons.min.css"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'THCO',
  description: 'Frontend Assesment Test',
}

export default function RootLayout({ children }) {  
  return (
    <html lang="en">
      <body className={inter.className}>
        <Shared></Shared>
        <main className="main-content">
          {children}
        </main>

      </body>
    </html>
  )
}
