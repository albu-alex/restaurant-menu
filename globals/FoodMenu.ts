import crispyImage from "../assets/crispy-strips.jpg";
import ciorbaImage from "../assets/ciorba-de-burta.jpg";

import {MenuItemInterface} from "../components/MenuItemInterface";

export const crispy: MenuItemInterface = {
    title: 'Meniu Crispy',
    price: '20 Lei',
    image: crispyImage.src,
    description: "crispy"
}

export const ciorba: MenuItemInterface = {
    title: 'Ciorbă de burtă',
    price: '15 Lei',
    image: ciorbaImage.src,
    description: "ciorba"
}

