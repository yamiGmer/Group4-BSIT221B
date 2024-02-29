import styles from '@/styles/header.module.css'



function Header(){
    return(
        <main className={styles.main}>
        <header className={styles.header}>
        <h1 className={styles.h1}>Taste Of Japan</h1>
            <nav className={styles.nav}>
                <ul className={styles.nav}>
                    <li className={styles.li}><a href="#home" className={styles.a}>Home</a></li>
                    <li className={styles.li}><a href="#mains" className={styles.a}>Mains</a></li>
                    <li className={styles.li}><a href="#noodles" className={styles.a}>Noodles</a></li>
                    <li className={styles.li}><a href="#sides" className={styles.a}>Sides</a></li>
                </ul>
            </nav>
        </header>
        </main>
    )
}
export default Header