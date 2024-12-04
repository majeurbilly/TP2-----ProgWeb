const numberInput = document.getElementById("numberInput");
const messageErreur  = document.getElementById("messageErreur");
const formulaireInscription = document.getElementById("formulaireInscription");
formulaireInscription.onsubmit = GetNumber;
const rndNumber =  Math.floor(Math.random() * 100) + 1;
let counter = 0;

function GetNumber(evenement) {
    const userNumber = parseInt(numberInput.value);
    console.log("random: " + rndNumber);

    if (rndNumber < userNumber) {
        messageErreur.textContent = "Le nombre à deviner est plus bas que " + userNumber + " 👇";
        numberInput.classList.add("border-danger");
        messageErreur.classList.remove('d-none');
        counter++;
        evenement.preventDefault();
    } else if (rndNumber > userNumber) {
        messageErreur.textContent = "Le nombre à deviner est plus élevé que " + userNumber + " 👆";
        numberInput.classList.add("border-danger");
        messageErreur.classList.remove('d-none');
        counter++;
        evenement.preventDefault();
    } else {
        messageErreur.classList.add('d-none');
        formulaireInscription.innerHTML = `
            <div class="text-center">
                <p>Bravo! Vous avez gagné en ${counter} coups.</p>
                <button id="replayButton">Jouer à nouveau</button>
            </div>
        `;

        // Add event listener to the replay button
        const replayButton = document.getElementById("replayButton");
        replayButton.onclick = () => location.reload();
        evenement.preventDefault();
    }
}