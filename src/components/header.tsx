import Link from 'next/link';
import styles from '../app/page.module.css'


export default function Header() {

    return (
        <div className={styles.header}>
            <div style={{ paddingTop: '7px' }}>
                <Link href={'/'}>Cipher Hub</Link>
            </div>
        </div>
    );

}