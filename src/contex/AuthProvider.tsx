'use client'

import Component from "@/app/(auth)/sign-in/page"
import { SessionProvider } from "next-auth/react"
export default function AuthProvider({
    children,

}: {children: React.ReactNode}){
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}