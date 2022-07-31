import * as React from 'react';
import styles from "../styles/NavigationMenu.module.css";

const NavigationMenu: React.FC = () => {
    return (
        <div className={styles.backgroundContainer}>
            <div className={styles.container}>
                <div className={styles.list}>
                    <button className={styles.button} onClick={() => window.scroll(0, 0)}>
                        <p className={styles.category}>Category 1</p>
                    </button>
                    <button className={styles.button} onClick={() => window.scroll(0, 0.1 * window.innerHeight)}>
                        <p className={styles.category}>Category 2</p>
                    </button>
                    <button className={styles.button} onClick={() => window.scroll(0, 0.2 * window.innerHeight)}>
                        <p className={styles.category}>Category 3</p>
                    </button>
                    <button className={styles.button} onClick={() => window.scroll(0, 0.3 * window.innerHeight)}>
                        <p className={styles.category}>Category 4</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NavigationMenu