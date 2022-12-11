"use client"

import { SessionProvider } from 'next-auth/react'

export default function ({
    children,
 }: {
    children: React.ReactNode
 }) {
    return (
        <div>
        <SessionProvider>
            {children}
        </SessionProvider>
            hey this is AUTH
        </div>
    )
 }