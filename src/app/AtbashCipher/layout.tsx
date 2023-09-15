import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Шифр Атбаш',
}

export default function VigenerCipherLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <div>{children}</div>
}