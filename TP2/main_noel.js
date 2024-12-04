const nameInput = document.getElementById("nameInput");
const isPresent = document.getElementById("isPresent");
const isPresentNot = document.getElementById("isPresentNot");
const userIsPresent = document.getElementById("userIsPresent");
const ItIsPresent = document.getElementsByName("ItIsPresent");
const formulaireInscription = document.getElementById("formulaireInscription");
const userIsPresent2 = document.getElementById("userIsPresent2");
formulaireInscription.onsubmit = Validation_Presence


function UserItIsPresent() {
    if (isPresent.checked !== null) {
        return false;
    }
    else if (isPresentNot.checked !== null) {
        return true;
    }
}
function Validation_Presence() {
    if (!UserItIsPresent){
        alert('Formulaire envoyé')
    }
    else if (UserItIsPresent){
        userIsPresent.classList.remove("d-none");
    }
}
