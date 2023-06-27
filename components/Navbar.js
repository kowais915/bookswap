import styles from '../styles/Navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
    return ( 
    <>
    <div className={styles.navbar}>

        <div className={styles.brand}>
           <Link  className = {styles.navlink} href="/">BookSwap</Link>
        </div>

       <div className={styles.links}>
       
            <Link className={styles.navlink} href="/"> Home</Link>

            <Link className={styles.navlink} href="/">About</Link>

            <Link className={styles.navlink} href="/">Contact</Link>

       </div>


       
    </div>
       
    
    </> );
}
 
export default Navbar;