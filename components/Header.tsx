import * as React from 'react';
import styles from "../styles/Header.module.css"

const Header: React.FC = () => {
    return (
        <div className={styles.container}>
            <p className={styles.title}>La Bella Vita</p>
        </div>
    )
}

export default Header