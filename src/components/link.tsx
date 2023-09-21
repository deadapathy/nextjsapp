import { useRouter } from 'next/navigation'

function ActiveLink(children: any, href: string) {
    const router = useRouter()

    const handleClick = (e: any) => {
        e.preventDefault()
        router.push(href)
    }

    return (
        <a href={href} onClick={handleClick}>
            {children}
        </a>
    )
}

export default ActiveLink