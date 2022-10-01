import * as React from 'react';
import styles from "../styles/NavigationMenu.module.css";

const NavigationMenu: React.FC = () => {
    return (
        <div className={styles.backgroundContainer}>
            <div className={styles.container}>
                <div className={styles.list}>
                    <button className={styles.button} onClick={() => window.scroll(0, 0)}>
                        <p className={styles.category}>Garnituri</p>
                    </button>
                    <button className={styles.button} onClick={() => window.scroll(0, 1.75 * window.innerHeight)}>
                        <p className={styles.category}>Meniuri calde</p>
                    </button>
                    <button className={styles.button} onClick={() => window.scroll(0, 3.45 * window.innerHeight)}>
                        <p className={styles.category}>Fast food</p>
                    </button>
                    <button className={styles.button} onClick={() => window.scroll(0, 4.4 * window.innerHeight)}>
                        <p className={styles.category}>Paste</p>
                    </button>
                    <button className={styles.button} onClick={() => window.scroll(0, 5.2 * window.innerHeight)}>
                        <p className={styles.category}>Desert</p>
                    </button>
                    <button className={styles.button} onClick={() => window.scroll(0, 5.75 * window.innerHeight)}>
                        <p className={styles.category}>Salate</p>
                    </button>
                    <button className={styles.button} onClick={() => window.scroll(0, 7 * window.innerHeight)}>
                        <p className={styles.category}>Sosuri</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NavigationMenu