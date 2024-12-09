const presenceEmploye = document.getElementById("presenceEmploye");
const AbsentEmploye = document.getElementById("AbsentEmploye");
const employePresent = document.getElementById("employePresent");
const ValidationFormulaire = document.getElementById("formulaireInscription");
const seraAccompagne = document.getElementById("seraAccompagne");
const seraPasAccompagne = document.getElementById("seraPasAccompagne");
const employeEstAccompagne = document.getElementById("employeEstAccompagne");
const AllCheckBox = document.querySelectorAll('input[name="activities"]');
const nomInvite = document.getElementById("nomInvite");
const choixRepasEmploye = document.getElementById("choixRepasEmploye");
const choixRepasInvite = document.getElementById("choixRepasInvite");
let nombreDeCheckBoxChecked = 0;

presenceEmploye.onclick = PrendrePresenceEmploye;
AbsentEmploye.onclick = PrendrePresenceEmploye;
seraAccompagne.onclick = PrendrePresenceInvite;
seraPasAccompagne.onclick = PrendrePresenceInvite;
ValidationFormulaire.onsubmit = Validation_Formulaire;

function PrendrePresenceEmploye() {
    if (presenceEmploye.checked) {
        employePresent.classList.remove("d-none");
        choixRepasEmploye.required = true;
        seraAccompagne.required = true;
    } else {
        choixRepasEmploye.required = false;
        seraAccompagne.required = false;
        employePresent.classList.add("d-none");
    }
}
function PrendrePresenceInvite() {
    if (seraAccompagne.checked) {
        nomInvite.required = true;
        choixRepasInvite.required = true;
        employeEstAccompagne.classList.remove("d-none");

    } else if (seraPasAccompagne.checked) {
        nomInvite.required = false;
        choixRepasInvite.required = false;
        employeEstAccompagne.classList.add("d-none");
    }
}

function GetCheckBoxChecked(checkBox) {
    if (checkBox.checked) {
        nombreDeCheckBoxChecked++;
    }
}

function Activity_IsSelect() {
    AllCheckBox.forEach(GetCheckBoxChecked)
    if (nombreDeCheckBoxChecked !== 2) {
        messageErreur.textContent = "Vous devez choisir 2 activités.";
        return false;
    }
    else {
        messageErreur.textContent = "";
        return true;
    }
}

function Validation_Formulaire(evenement) {

    if (!Activity_IsSelect() && presenceEmploye.checked) {
        nombreDeCheckBoxChecked = 0;
        messageErreur.classList.remove("d-none");
        evenement.preventDefault();
    } else {
        alert("Formuaire envoyé")
    }
}
