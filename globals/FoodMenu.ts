import cartofiAuriiImage from "../assets/cartofi_aurii.png";
import cartofiNaturImage from "../assets/cartofi_natur.png";
import cartofiPrajitiImage from "../assets/cartofi_prajiti.png";
import ceafaPorcImage from "../assets/ceafa_porc.png";
import clatiteFinettiDulceataImage from "../assets/clatite_finetti_dulceata.png";
import escalopPorcImage from "../assets/escalop_de_porc_cu_ciuperci.png";
import escalopPuiImage from "../assets/escalop_de_pui_cu_ciuperci.png";
import fasoleCiolanImage from "../assets/fasole_cu_ciolan_afumat.png";
import hotDogImage from "../assets/hot_dog.png";
import iahnieFasoleImage from "../assets/iahnie_fasole.jpg";
import ketchupImage from "../assets/ketchup.png";
import legumeMexicaneImage from "../assets/legume_mexicane.jpg";
import mamaligaImage from "../assets/mamaliga.jpg";
import meniuAripioareImage from "../assets/meniu_6_sau_10.png";
import pasteCarbonaraImage from "../assets/paste_carbonara.png";
import pasteFumeImage from "../assets/paste_fume.png";
import pastePolloImage from "../assets/paste_pollo.png";
import pasteQuatrroFormaggiImage from "../assets/paste_carbonara.png";
import pieptPuiImage from "../assets/piept_pui.png";
import pilafOrezImage from "../assets/pilaf_orez.jpg";
import piureCartofiImage from "../assets/piure_de_cartofi.png";
import salataAsortataImage from "../assets/salata_asortata.png";
import salataBellaVitaImage from "../assets/salata_bella_vita.png";
import salataDeMuraturiImage from "../assets/salata_de_muraturi.png";
import salataDeVarzaImage from "../assets/salata_de_varza.png";
import scaritaPorcImage from "../assets/scarita_de_porc_cu_cartofi.png";
import shaormaImage from "../assets/shaorma.png";
import snitelParizianPuiImage from "../assets/snitel_parizian_pui.png";
import snitelPorcImage from "../assets/snitel_porc.png";
import snitelPuiImage from "../assets/snitel_pui.png";
import sosALaBellaImage from "../assets/sos_a_la_bella.png";
import sosDeUsturoiImage from "../assets/sos_de_usturoi.png";
import soteDeCiuperciImage from "../assets/sote_de_ciuperci.png";
import uleiPicantImage from "../assets/ulei_picant.png";
import papanasiImage from "../assets/papansi_cu_smantana_si_dulceata.png";

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

// Garnituri
const cartofiAurii = createMenuItem("Cartofi aurii", "8 lei", cartofiAuriiImage.src, "Aurii")
const cartofiNatur = createMenuItem("Cartofi natur", "8 lei", cartofiNaturImage.src, "Natur")
const cartofiPrajiti = createMenuItem("Cartofi Prajiti", "7 lei", cartofiPrajitiImage.src, "Prajiti")
const piureCartofi = createMenuItem("Piure Cartofi", "8 lei", piureCartofiImage.src, "Piure")
const legumeMexicane = createMenuItem("Legume Mexicane", "9 Lei", legumeMexicaneImage.src, "Mexicane")
const pilafOrez = createMenuItem("Pilaf Orez", "8 lei", pilafOrezImage.src, "Orez")
const soteDeCiuperci = createMenuItem("Sote de ciuperci", "12 lei", soteDeCiuperciImage.src, "Ciuperci")
const mamaliga = createMenuItem("Mamaliga", "8 lei", mamaligaImage.src, "Mamaliga")
const iahnieFasole = createMenuItem("Iahnie fasole", "13 lei", iahnieFasoleImage.src, "Fasole")
// Meniuri calde
const escalopDePui = createMenuItem("Escalop de pui", "25 lei", escalopPuiImage.src, "Pui")
const escalopDePorc = createMenuItem("Escalop de porc", "25 lei", escalopPorcImage.src, "Porc")
const ciolanAfumat = createMenuItem("Ciolan afumat", "28 lei", fasoleCiolanImage.src, "Porc")
const ceafaPorc = createMenuItem("Ceafa porc", "19 lei", ceafaPorcImage.src, "Porc")
const pieptPui = createMenuItem("Piept pui", "18 lei", pieptPuiImage.src, "Pui")
const snitelPorc = createMenuItem("Snitel de porc", "18 lei", snitelPorcImage.src, "Orez")
const snitelPui = createMenuItem("Snitel de pui", "18 lei", snitelPuiImage.src, "Pui")
const snitelParizianPuiPorc = createMenuItem("Snitel parizian pui/porc", "18 lei", snitelParizianPuiImage.src, "Pui")
const scaritaPorc = createMenuItem("Scarita de porc", "40 lei", scaritaPorcImage.src, "Porc")
// Fast food
const meniuDeSase = createMenuItem("Meniu de 6", "30 lei", meniuAripioareImage.src, "Meniu")
const meniuDeZece = createMenuItem("Meniu de 10", "35 lei", meniuAripioareImage.src, "Meniu")
const hotDog = createMenuItem("Hot Dog", "6 lei", hotDogImage.src, "Hot Dog")
const shaormaL = createMenuItem("Shaorma L", "15 lei", shaormaImage.src, "Shaorma")
const shaormaXL = createMenuItem("Shaorma XL", "25 lei", shaormaImage.src, "Shaorma")
// Paste
const pasteCarbonara = createMenuItem("Paste carbonara", "26 lei", pasteCarbonaraImage.src, "Paste")
const pastePollo = createMenuItem("Paste pollo", "26 lei", pastePolloImage.src, "Paste")
const pasteQuattroFormaggi = createMenuItem("Paste quattro formaggi", "26 lei", pasteQuatrroFormaggiImage.src, "Paste")
const pasteFume = createMenuItem("Paste fume", "26 lei", pasteFumeImage.src, "Paste")
// Desert
const papansi = createMenuItem("Papanasi smantana/dulceata", "15 lei", papanasiImage.src, "Papanasi")
const clatiteDulceata = createMenuItem("Clatite dulceata", "12 lei", clatiteFinettiDulceataImage.src, "Clatite")
const clatiteFinetti = createMenuItem("Clatite finetti", "12 lei", clatiteFinettiDulceataImage.src, "Clatite")
// Salate
const salataBellaVita = createMenuItem("Salata Bella Vita", "23 lei", salataBellaVitaImage.src, "Salata")
const salataTurceasca = createMenuItem("Salata Turceasca", "23 lei", salataBellaVitaImage.src, "Salata")
const salataCuTon = createMenuItem("Salata cu ton", "23 lei", salataBellaVitaImage.src, "Salata")
const salataAsortata = createMenuItem("Salata asortata", "7 lei", salataAsortataImage.src, "Salata")
const salataDeVarza = createMenuItem("Salata de varza", "7 lei", salataDeVarzaImage.src, "Salata")
const salataDeMuraturi = createMenuItem("Salata de muraturi", "8 lei", salataDeMuraturiImage.src, "Salata")
// Sosuri
const ketchup = createMenuItem("Ketchup picant/dulce", "2 lei", ketchupImage.src, "Ketchup")
const uleiPicant = createMenuItem("Ulei picant", "2 lei", uleiPicantImage.src, "Ulei")
const sosALaBella = createMenuItem("Sos a la bella", "2 lei", sosALaBellaImage.src, "Sos")
const sosDeUsturoi = createMenuItem("Sos de usturoi", "2 lei", sosDeUsturoiImage.src, "Sos")

export const items: MenuItemInterface[] = [cartofiAurii, cartofiNatur, cartofiPrajiti, piureCartofi, legumeMexicane, pilafOrez,
soteDeCiuperci, mamaliga, iahnieFasole, escalopDePui, escalopDePorc, ciolanAfumat, ceafaPorc, pieptPui, snitelPorc,
snitelPui, snitelParizianPuiPorc, scaritaPorc, meniuDeSase, meniuDeZece, hotDog, shaormaL, shaormaXL, pasteCarbonara,
pastePollo, pasteQuattroFormaggi, pasteFume, papansi, clatiteDulceata, clatiteFinetti, salataBellaVita, salataTurceasca,
salataCuTon, salataAsortata, salataDeVarza, salataDeMuraturi, ketchup, uleiPicant, sosALaBella, sosDeUsturoi]