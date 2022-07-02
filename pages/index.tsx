import {NextPage} from "next";
import styles from '../styles/Menu.module.css';
import MenuItem from "../components/MenuItem";
import Header from "../components/Header"
import {MenuItemInterface} from "../components/MenuItemInterface";
import {useEffect, useState} from "react";
import {ciorba, crispy, carnivore, mexicana, capricioasa, bellaPlus} from "../globals/FoodMenu";

const Menu: NextPage = () => {
    const [headerOpacity, setHeaderOpacity] = useState(1);
    const menuItems: MenuItemInterface[] = [ciorba, crispy, carnivore, mexicana, capricioasa, bellaPlus]

    useEffect(() => {
        window.onscroll = () => {
            setHeaderOpacity(Math.min(100 / window.scrollY > 0.25 ? 100 / window.scrollY : 0, 1))
        }
    })

    return (
        <div className={styles.container}>
            <div style={{marginBottom: '9vh', width: '100%', opacity: headerOpacity}}>
                <Header />
            </div>
            {menuItems.map((specifications, index) =>
                <MenuItem key={index} specifications={specifications} />
            )}
        </div>
    );
}

export default Menu