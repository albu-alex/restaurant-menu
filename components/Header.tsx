import * as React from 'react';
import styles from "../styles/Header.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripLines } from '@fortawesome/free-solid-svg-icons'

const Header: React.FC = () => {

    const toggleSideMenu = () => {
        const isSideMenuShown = localStorage.getItem('isSideMenuShown');
        localStorage.setItem('isSideMenuShown', isSideMenuShown === 'true' ? 'false' : 'true')
    }

    return (
        <div className={styles.container}>
            <button className={styles.button} onClick={toggleSideMenu}>
                <FontAwesomeIcon className={styles.icon} icon={faGripLines} />
            </button>
            <p className={styles.title}>Restaurant</p>
        </div>
    )
}

export default Header