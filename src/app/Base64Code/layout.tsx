import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Base64 код в текст',
}

export default function VigenerCipherLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <div>{children}</div>
}