import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Код Хаффмана',
}

export default function HaffmanLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <div>{children}</div>
}