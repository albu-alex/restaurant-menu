import * as React from 'react';
import {MenuItemInterface} from "./MenuItemInterface";
import styles from '../styles/MenuItem.module.css';

type Props = {
    specifications: MenuItemInterface
}

const MenuItem: React.FC<Props> = ({specifications}) => {
    return(
        <div className={styles.container} style={{backgroundImage: `url(${specifications.image})`}}>
            <p className={styles.title}>{specifications.title}</p>
            <p className={styles.price}>{specifications.price}</p>
        </div>
    )
}

export default MenuItem;