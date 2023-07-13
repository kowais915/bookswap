import styles from '../styles/Footer.module.css';
import {ThemeContext } from '../context/ThemeContext';
import {useContext } from 'react';
import Image from 'next/image';
import Avatar from '@mui/material/Avatar';

const Footer = () => {
    const {color, changeColor}  = useContext(ThemeContext) 

    return (
        <div className={styles.footer} style={{background: color}}>

           


              <Avatar
                src='/book.png'
                alt='book'
              />

         

           
        </div>
      );
}
 
export default Footer;