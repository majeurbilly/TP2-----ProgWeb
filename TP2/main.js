const numberInput = document.getElementById("numberInput");
const messageErreur  = document.getElementById("messageErreur");
const formulaireInscription = document.getElementById("formulaireInscription");
formulaireInscription.onsubmit = GetNumber;
console.log(numberInput.value);
function GetNumber(evenment) {
    const userNumber = parseInt(numberInput.value);
    let rndNumber =  Math.floor(Math.random() * 100 + 1);

    if (rndNumber < userNumber) {
        messageErreur.textContent += "va plus haut";
        numberInput.classList.add("border-danger");
        evenment.preventDefault();

    }
    else if (rndNumber > userNumber) {
        messageErreur.textContent += "va plus haut";
        evenment.preventDefault();
    }
    else if (rndNumber === userNumber) {
        messageErreur.classList.remove("d-none");
        messageErreur.textContent = "Bravo";
    }
}