import * as React from 'react';
import styles from "../styles/Header.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripLines } from '@fortawesome/free-solid-svg-icons'

const Header: React.FC = () => {
    return (
        <div className={styles.container}>
            <FontAwesomeIcon className={styles.icon} icon={faGripLines} />
            <p className={styles.title}>La Bella Vita</p>
        </div>
    )
}

export default Header