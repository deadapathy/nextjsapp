// import '../globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Хеширование MD5',
    // description: 'Generated by create next app',
}

export default function VigenerCipherLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <div>{children}</div>
}