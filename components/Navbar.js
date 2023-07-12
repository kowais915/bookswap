import styles from '../styles/Navbar.module.css'
import Link from 'next/link'

//mui stuff
import Switch from '@mui/material/Switch';


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


            <Link className={styles.navlink} href="/signin">Login</Link>

            <Link className={styles.navlink} href="/signup">Sign up</Link>

            <Switch
              
                inputProps={{ 'aria-label': 'controlled' }}
            />


           

       </div>


       
    </div>
       
    
    </> );
}
 
export default Navbar;