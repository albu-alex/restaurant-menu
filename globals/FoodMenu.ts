import crispyImage from "../assets/crispy-strips.jpg";
import ciorbaImage from "../assets/ciorba-de-burta.jpg";
import carnivoreImage from "../assets/pizza_carnivore.jpg";
import mexicanaImage from "../assets/pizza_mexicana.jpg";
import capricioasaImage from "../assets/pizza_capricioasa.jpg";
import bellaPlusImage from "../assets/pizza_bella_plus.jpg";

import {MenuItemInterface} from "../components/MenuItemInterface";

function createMenuItem(title: string, price: string, image: string, description: string) {
    let item: MenuItemInterface = {
        title: title,
        price: price,
        image: image,
        description: description
    }
    return item
}

export const crispy = createMenuItem("Meniu Crispy", "20 Lei", crispyImage.src, "Crispy")
export const ciorba = createMenuItem("Ciorbă de burtă", "15 Lei", ciorbaImage.src, "Ciorba")
export const carnivore = createMenuItem("Pizza Carnivore", "25 Lei", carnivoreImage.src, "Pizza Carnivore")
export const mexicana = createMenuItem("Pizza Mexicana", "27 Lei", mexicanaImage.src, "Pizza Mexicana")
export const capricioasa = createMenuItem("Pizza Capricioasa", "24 Lei", capricioasaImage.src, "Pizza Capricioasa")
export const bellaPlus = createMenuItem("Pizza Bella Plus", "24 Lei", bellaPlusImage.src, "Pizza Bella Plus")

