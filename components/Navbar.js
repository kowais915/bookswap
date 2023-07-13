import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
import {useState } from 'react';

//mui stuff
import Switch from '@mui/material/Switch';


// context
import {useContext } from 'react';
import {ThemeContext } from '../context/ThemeContext';



const Navbar = () => {
    const {color, changeColor } = useContext(ThemeContext);
    const [toggle, setToggle ] = useState(false);
    const [checked, setChecked] = useState(false);


    console.log("color: ", )
    //handle the switch
    const handleToggle = (event)=>{

       
        setChecked(event.target.checked)

        if(checked){
            changeColor('#7D5A50')
        }else{
            changeColor('black')
        }

    }

    return ( 
    <>
    <div className={styles.navbar} style={{background: color}} > 

        <div className={styles.brand}>
           <Link  className = {styles.navlink} href="/">BookSwap</Link>
        </div>

       <div className={styles.links}>
       
            <Link className={styles.navlink} href="/"> Home</Link>

            <Link className={styles.navlink} href="/">About</Link>

            <Link className={styles.navlink} href="/">Contact</Link>

            <Link className={styles.navlink} href="/dashboard">Dashboard</Link>


            <Link className={styles.navlink} href="/signin">Login</Link>

            <Link className={styles.navlink} href="/signup">Sign up</Link>

            

            <Switch
                checked={checked}
                onChange={handleToggle}
                inputProps={{ 'aria-label': 'controlled' }}
            />


           

       </div>


       
    </div>
       
    
    </>
    
    );
}
 
export default Navbar;