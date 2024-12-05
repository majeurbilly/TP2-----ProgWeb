const nameInput = document.getElementById("nameInput");
const isPresent = document.getElementById("isPresent");
const isPresentNot = document.getElementById("isPresentNot");
const userIsPresent = document.getElementById("userIsPresent");
const ClientisAccompagner = document.getElementsByName("ClientisAccompagner");
const ValidationFormulaire = document.getElementById("formulaireInscription");
const userIsPresent2 = document.getElementById("userIsPresent2");
const Menu = document.getElementById("Menu");
const boutonDenvoie = document.getElementById("boutonDenvoies");
const isAccompagner = document.getElementById("isAccompagner");
const isNotAccompagner = document.getElementById("isNotAccompagner");
const userIsAccompagner = document.getElementById("userIsAccompagner");
const Traineaux_a_chien = document.getElementById("Traîneaux_a_chien");
const Noel_disco = document.getElementById("Noël_disco");
const Karaoke = document.getElementById("Karaoké");
const Glissades = document.getElementById("Glissades");
const Laser_tag = document.getElementById("Laser_tag");
const Casino = document.getElementById("Casino");


isPresent.onclick = UserItIsPresent;
isPresentNot.onclick = UserItIsPresent;
isAccompagner.onclick = ItIsAccompagner;
isNotAccompagner.onclick = ItIsAccompagner;
ValidationFormulaire.onsubmit = Formulaire_Valide;

function UserItIsPresent() {
    if (isPresent.checked) {
        userIsPresent.classList.remove("d-none");
    } else {
        userIsPresent.classList.add("d-none");
    }
}
function ItIsAccompagner()
{
    if (isAccompagner.checked) {
        userIsAccompagner.classList.remove("d-none");
    }
    else if (isNotAccompagner.checked) {
        userIsAccompagner.classList.add("d-none");
    }
}
function Repas_IsSelect(){
    if (Menu.value === "") {
        return false;
    }
    else {
        return true;
    }
}
function Accomppagement_IsSelect(){
    if (!isAccompagner.checked && !isNotAccompagner.checked) {
        return false;
    }
    else {
        return true;
    }
}
function Activity_IsSelect(){
    let count = 6;
    if (!Traineaux_a_chien.checked) {
        count--;
    }
    if (!Noel_disco.checked) {
        count--;
    }
    if (!Karaoke.checked) {
        count--;
    }
    if (!Glissades.checked) {
        count--;
    }
    if (!Laser_tag.checked) {
        count--;
    }
    if (!Casino.checked) {
        count--;
    }
    if (count === 2) {
        return true;
    }
    else {
        return false;
    }
}
function Formulaire_Valide(evenement) {

    let count = 0;
    messageErreur.textContent = "";

    if (!Repas_IsSelect()) {
        count++;
        messageErreur.textContent += "Vous devez choisir un Repas ";
    }
    if (!Accomppagement_IsSelect()) {
        count++;
        if (count === 1) {
            messageErreur.textContent += "Avez vous un partenaire ?";
        } else if (count === 2) {
            messageErreur.textContent += "+ Avez vous un partenaire? ";
        } else {
            messageErreur.textContent += "+ Avez vous un partenaire? + ";
        }
        if (!Activity_IsSelect()) {
            count++;
            if (count === 1) {
                messageErreur.textContent += "Vous devez choisir 2 activités";
            } else {
                messageErreur.textContent += "+ Vous devez choisir 2 activités";
            }


        }
        if (count !== 0) {
            messageErreur.classList.remove("d-none");
            evenement.preventDefault();
        } else {
            alert("Formuaire envoyé")
        }
    }
}
