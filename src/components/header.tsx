import Link from 'next/link';
import styles from '../app/page.module.css'


export default function Header() {

    return (
        <div className={styles.header}>
            <Link href={'/'}>CipherHub</Link>
        </div>
    );

}