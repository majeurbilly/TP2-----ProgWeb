const isPresent = document.getElementById("isPresent");
const isPresentNot = document.getElementById("isPresentNot");
const userIsPresent = document.getElementById("userIsPresent");
const ValidationFormulaire = document.getElementById("formulaireInscription");
const isAccompagner = document.getElementById("isAccompagner");
const isNotAccompagner = document.getElementById("isNotAccompagner");
const userIsAccompagner = document.getElementById("userIsAccompagner");
const AllCheckBox = document.querySelectorAll('input[name="activities"]');
const nameOfPartenaire = document.getElementById("nameOfPartenaire");
const estAccompagne = document.getElementById("estAccompagne");
let counter = 0;

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
function ItIsAccompagner() {
    if (isAccompagner.checked) {
        nameOfPartenaire.required = true;
        userIsAccompagner.classList.remove("d-none");
        estAccompagne.classList.remove("d-none");

    } else if (isNotAccompagner.checked) {
        nameOfPartenaire.required = false;
        userIsAccompagner.classList.add("d-none");
        estAccompagne.classList.add("d-none");
    }
}

function GetCheckBoxChecked() {
    return (checkBox) => {
        if (checkBox.checked) {
            counter++;
        }
    };
}

function Activity_IsSelect() {
    AllCheckBox.forEach(GetCheckBoxChecked())
    if (counter !== 2) {
        messageErreur.textContent = " Vous devez choisir 2 activités * ";
        return false;
    }
    else {
        messageErreur.textContent = "";
        return true;
    }
}

function Formulaire_Valide(evenement) {

    if (!Activity_IsSelect()) {
        counter = 0;
        messageErreur.classList.remove("d-none");
        evenement.preventDefault();
    } else {
        alert("Formuaire envoyé")
    }
}
