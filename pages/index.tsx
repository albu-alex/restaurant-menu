import {NextPage} from "next";
import styles from '../styles/Menu.module.css';
import MenuItem from "../components/MenuItem";
import {MenuItemInterface} from "../components/MenuItemInterface";

const Menu: NextPage = () => {
    const ciorbaImage: string = "https://i2.wp.com/savoaresibungust.ro/wp-content/uploads/2019/11/Ciorba-de-burta-ca-la-mama-acasa.jpg?w=350&ssl=1"
    const crispyImage: string = "https://divainbucatarie.ro/wp-content/uploads/2021/09/crispy-strips-piept-de-pui-in-crusta-crocanta-diva-in-bucatarie-V.jpg?w=350&h=200"
    const menuItems: MenuItemInterface[] = [{title: "Ciorbă de burtă", price: "15 RON", image: ciorbaImage, description: "ciorba"},
        {title: "Meniu crispy", price: "20 RON", image: crispyImage, description: "crispy"}, {title: "Ciorbă de burtă", price: "15 RON", image: ciorbaImage, description: "ciorbica"},
        {title: "Meniu crispy", price: "20 RON", image: crispyImage, description: "meniu"}, {title: "Ciorbă de burtă", price: "15 RON", image: ciorbaImage, description: "ciorbica"},
        {title: "Meniu crispy", price: "20 RON", image: crispyImage, description: "meniu"}, {title: "Ciorbă de burtă", price: "15 RON", image: ciorbaImage, description: "ciorbica"},
        {title: "Meniu crispy", price: "20 RON", image: crispyImage, description: "meniu"}, {title: "Ciorbă de burtă", price: "15 RON", image: ciorbaImage, description: "ciorbica"},
        {title: "Meniu crispy", price: "20 RON", image: crispyImage, description: "meniu"}]
    return (
        <div className={styles.container}>
            {menuItems.map((specifications, index) =>
                <MenuItem key={index} specifications={specifications} />
            )}
        </div>
    );
}

export default Menu