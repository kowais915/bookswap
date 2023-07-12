import styles from '../styles/Card.module.css';
import Image from 'next/image'


const Card = ({picture, title, owner, location, status}) => {
    return ( 

        <div className={styles.card}>
         

            {/* picture goes here */}

            <h1>This is a card</h1>
            {/* title */}
            <p >Name: Random Book</p>

            {/* Owner */}
            <p>Author: Saad</p>

            {/* Location */}

            
            <p>Location: Peshawar</p>
        
        </div>
     );
}
 
export default Card;