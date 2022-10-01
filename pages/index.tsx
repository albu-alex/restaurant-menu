import {NextPage} from "next";
import { useEffect, useState } from "react";

import styles from '../styles/Menu.module.css';
import MenuItem from "../components/MenuItem";
import Header from "../components/Header";
import NavigationMenu from "../components/NavigationMenu";
import {MenuItemInterface} from "../components/MenuItemInterface";

import {items} from "../globals/FoodMenu";

const Menu: NextPage = () => {
    const [headerOpacity, setHeaderOpacity] = useState(1);
    const [isSideMenuShown, setIsSideMenuShown] = useState(false)
    const menuItems: MenuItemInterface[] = items

    useEffect(() => {
        window.onscroll = () => {
            setHeaderOpacity(Math.min(100 / window.scrollY > 0.35 ? 100 / window.scrollY : 0.3, 1));
        }
        setInterval(() => {
            const isSideMenuShown = localStorage.getItem("isSideMenuShown");
            setIsSideMenuShown(isSideMenuShown === 'true');
        }, 15)
    })

    return (
        <div className={styles.container}>
            <div style={{marginBottom: '9vh', width: '100%', opacity: headerOpacity}}>
                <Header />
            </div>
            <div>
                {isSideMenuShown &&
                    <NavigationMenu />
                }
                {menuItems.map((specifications, index) =>
                    <div key={index} style={{marginBottom: '1vh', marginTop: '1vh'}}>
                        <MenuItem specifications={specifications} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Menu