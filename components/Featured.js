import styles from '../styles/Featured.module.css'
import Card from './Card';

const Featured = () => {
    return ( 
        <div className={styles.featured}>
            
            <h1 className ={styles.title}>Featured</h1>

            <div className={styles.cards}>
                <Card/>
            </div>

        </div>
     );
}
 
export default Featured;

