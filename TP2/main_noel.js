const nameInput = document.getElementById("nameInput");
const isPresent = document.getElementById("isPresent");
const isPresentNot = document.getElementById("isPresentNot");
const userIsPresent = document.getElementById("userIsPresent");
const ItIsPresent = document.getElementsByName("ItIsPresent");
const formulairePresence = document.getElementById("formulaireInscription");
const userIsPresent2 = document.getElementById("userIsPresent2");
const Menu = document.getElementById("Menu");
const boutonDenvoie = document.getElementById("boutonDenvoies");

boutonDenvoie.onsubmit = Validation_Presence;

function UserItIsPresent() {
    let reponse = false;
    if (isPresent.checked) {
        userIsPresent.classList.remove("d-none");
        reponse = true;
    } else if (isPresentNot.checked) {
        alert('Formulaire envoyé')
    }
}

function Validation_Presence(evenement) {

    if (!UserItIsPresent()) {
        alert('Formulaire envoyé')
    } else if (UserItIsPresent()) {
        userIsPresent.classList.remove("d-none");
        evenement.preventDefault();
    }
}
