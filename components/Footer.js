import styles from '../styles/Footer.module.css';
import {ThemeContext } from '../context/ThemeContext';
import {useContext } from 'react';

const Footer = () => {
    const {color, changeColor}  = useContext(ThemeContext) 

    return (
        <div className={styles.footer} style={{background: color}}>
           
        </div>
      );
}
 
export default Footer;