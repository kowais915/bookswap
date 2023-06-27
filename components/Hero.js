import styles from '../styles/Hero.module.css'
import Image from 'next/image'

const Hero = () => {
    return ( 

        <div className={styles.hero}>
            <div className={styles.picture}>
               <Image

                src='/book.png'
                width={500}
                height={700}
                alt="book"

               />
            </div>

            <div className="tagline">
                <p className={styles.tagline}>
                    Exchange Your Books With Anyone. Everywhere.
                </p>
            </div>
        </div>
     );
}
 
export default Hero;