import * as React from 'react';
import styles from "../styles/NavigationMenu.module.css"

const NavigationMenu: React.FC = () => {
    return (
        <div className={styles.backgroundContainer}>
            <div className={styles.container}>
                <div className={styles.list}>
                    <button className={styles.button}>
                        <p className={styles.category}>Category 1</p>
                    </button>
                    <button className={styles.button}>
                        <p className={styles.category}>Category 2</p>
                    </button>
                    <button className={styles.button}>
                        <p className={styles.category}>Category 3</p>
                    </button>
                    <button className={styles.button}>
                        <p className={styles.category}>Category 4</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NavigationMenu