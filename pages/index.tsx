import {NextPage} from "next";
import styles from '../styles/Menu.module.css';
import MenuItem from "../components/MenuItem";
import Header from "../components/Header"
import {MenuItemInterface} from "../components/MenuItemInterface";
import {useEffect, useState} from "react";

const Menu: NextPage = () => {
    const [headerOpacity, setHeaderOpacity] = useState(1);

    const ciorbaImage: string = "https://i2.wp.com/savoaresibungust.ro/wp-content/uploads/2019/11/Ciorba-de-burta-ca-la-mama-acasa.jpg?w=350&ssl=1"
    const crispyImage: string = "https://divainbucatarie.ro/wp-content/uploads/2021/09/crispy-strips-piept-de-pui-in-crusta-crocanta-diva-in-bucatarie-V.jpg?w=350&h=200"
    const menuItems: MenuItemInterface[] = [{title: "Ciorbă de burtă", price: "15 RON", image: ciorbaImage, description: "ciorba"},
        {title: "Meniu crispy", price: "20 RON", image: crispyImage, description: "crispy"}, {title: "Ciorbă de burtă", price: "15 RON", image: ciorbaImage, description: "ciorbica"},
        {title: "Meniu crispy", price: "20 RON", image: crispyImage, description: "meniu"}, {title: "Ciorbă de burtă", price: "15 RON", image: ciorbaImage, description: "ciorbica"},
        {title: "Meniu crispy", price: "20 RON", image: crispyImage, description: "meniu"}, {title: "Ciorbă de burtă", price: "15 RON", image: ciorbaImage, description: "ciorbica"},
        {title: "Meniu crispy", price: "20 RON", image: crispyImage, description: "meniu"}, {title: "Ciorbă de burtă", price: "15 RON", image: ciorbaImage, description: "ciorbica"},
        {title: "Meniu crispy", price: "20 RON", image: crispyImage, description: "meniu"}]

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