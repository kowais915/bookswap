import styles from '../styles/Card.module.css';


const Card = ({picture, title, owner, location, status}) => {
    return ( 

        <div className={styles.card}>
            <h1>This is a card</h1>
        </div>
     );
}
 
export default Card;