import styles from '@/styles/header.module.css'
import Link from "next/link";



function Header(){
    return(
        <main className={styles.main}>
        <header className={styles.header}>
        <h1 className={styles.h1}>Taste Of Japan</h1>
            <nav className={styles.nav}>
                <ul className={styles.nav}>
                    <Link href={{pathname: '/'}}>
                        <li className={styles.li}>Home</li>
                    </Link>  

                    <Link href={{pathname: '/recipeCategory/Main'}}>
                        <li className={styles.li}>Main</li>
                    </Link>

                    <Link href={{pathname: '/recipeCategory/Noodles'}}>
                        <li className={styles.li}>Noodles</li>
                    </Link>

                    <Link href={{pathname: '/recipeCategory/Sides'}}>
                        <li className={styles.li}>Sides</li>
                    </Link>

                </ul>
            </nav>
        </header>
        </main>
    )
}
export default Header