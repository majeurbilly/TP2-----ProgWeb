const numeroChoisit = document.getElementById("numeroChoisit");
const messageErreur  = document.getElementById("messageErreur");
const formulaireInscription = document.getElementById("formulaireInscription");
const replayButton = document.getElementById("replayButton");
formulaireInscription.onsubmit = PrendreLeNombre;
const NombreAleatoire =  Math.floor(Math.random() * 100) + 1;
let nombresEssais = 0;

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
        formulaireInscription.innerHTML = `
            <div class="text-center">
                <p>Bravo! Vous avez gagné en ${nombresEssais} coups.</p>
                <button class="btn btn-success" id="replayButton">Jouer à nouveau</button>
            </div>
        `;

        replayButton.onclick = () => location.reload();
        evenement.preventDefault();
    }
}