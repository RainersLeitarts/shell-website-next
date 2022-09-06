import Link from 'next/link'
import styles from '../../styles/Navbar.module.scss'


const index = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.branding}></div>
                <div className={styles.links}>
                    <Link href="/">
                        <a className={styles.link}>Home</a>
                    </Link>
                    <Link href="/posts">
                        <a className={styles.link}>Posts</a>
                    </Link>
                    <Link href="/">
                        <a className={styles.link}>Link 1</a>
                    </Link>
                    <Link href="/">
                        <a className={styles.link}>Link 2</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default index