const numeroChoisit = document.getElementById("numeroChoisit");
const messageErreur  = document.getElementById("messageErreur");
const formulaireInscription = document.getElementById("formulaireInscription");
const pageDuJeu = document.getElementById("pageDuJeu");
const pageDeFin = document.getElementById("pageDeFin");
const messageVictoire = document.getElementById("messageVictoire");
const NombreAleatoire =  Math.floor(Math.random() * 100) + 1;
let nombresEssais = 0;

formulaireInscription.onsubmit = PrendreLeNombre;

function RechargerLaPage() {
    location.reload();
}

function PrendreLeNombre(evenement) {
    const userNumber = parseInt(numeroChoisit.value);
    console.log("random: " + NombreAleatoire);

    if (NombreAleatoire < userNumber) {
        messageErreur.textContent = "Le nombre à deviner est plus bas que " + userNumber + " 👇";
        numeroChoisit.classList.add("border-danger");
        messageErreur.classList.remove('d-none');
        nombresEssais++;
        evenement.preventDefault();
    } else if (NombreAleatoire > userNumber) {
        messageErreur.textContent = "Le nombre à deviner est plus élevé que " + userNumber + " 👆";
        numeroChoisit.classList.add("border-danger");
        messageErreur.classList.remove('d-none');
        nombresEssais++;
        evenement.preventDefault();
    } else {
        messageErreur.classList.add('d-none');
        pageDuJeu.classList.add('d-none');
        pageDeFin.classList.remove('d-none');
        messageVictoire.textContent = `Bravo! Vous avez gagné en ${nombresEssais} coups.`;
        document.getElementById("replayButton").onclick = RechargerLaPage;
        evenement.preventDefault();
    }
}