const numberInput = document.getElementById("numberInput");
const messageErreur  = document.getElementById("messageErreur");
const formulaireInscription = document.getElementById("formulaireInscription");
formulaireInscription.onsubmit = GetNumber;
const rndNumber =  Math.floor(Math.random() * 100 + 1);

function GetNumber(evenment) {
    const userNumber = parseInt(numberInput.value);
    console.log("random: "+rndNumber);

    if (rndNumber < userNumber) {
        messageErreur.textContent = "va plus bas";
        numberInput.classList.add("border-danger");
        messageErreur.classList.remove('d-none');
        evenment.preventDefault();

    }
    else if (rndNumber > userNumber) {
        messageErreur.textContent = "va plus haut";
        numberInput.classList.add("border-danger");
        messageErreur.classList.remove('d-none');
        evenment.preventDefault();
    }
    else {
        alert("Bravo, tu as trouvé le nombre secret 💪 C'étais ---> " + rndNumber);
    }
}