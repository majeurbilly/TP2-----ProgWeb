const nameInput = document.getElementById("nameInput");
const isPresent = document.getElementById("isPresent");
const isPresentNot = document.getElementById("isPresentNot");
const userIsPresent = document.getElementById("userIsPresent");
const ItIsPresent = document.getElementsByName("ItIsPresent");
const formulairePresence = document.getElementById("formulaireInscription");
const userIsPresent2 = document.getElementById("userIsPresent2");
const Menu = document.getElementById("Menu");
const boutonDenvoie = document.getElementById("boutonDenvoies");
const isAccompagner = document.getElementById("isAccompagner");
const isNotAccompagner = document.getElementById("isNotAccompagner");
const userIsAccompagner = document.getElementById("userIsAccompagner");

isPresent.onclick = UserItIsPresent;
isPresentNot.onclick = UserItIsPresent;
isAccompagner.onclick = ItIsAccompagner;
isNotAccompagner.onclick = ItIsAccompagner

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

function Validation_Presence(evenement) {

    let count = 0;


}
