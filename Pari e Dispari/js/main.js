const pariDispari = document.querySelector("#pari-dispari");
const number = document.querySelector("#number");
const randomNumber = document.querySelector("#random-number");
const sum = document.querySelector("#sum");
const result = document.querySelector(".result");
const button = document.querySelector(".btn");

button.addEventListener('click', function() {
    const userNumber = parseInt(number.value.trim())
    console.log(userNumber);
    const cpuNumber = getRandomNumber(1, 5);
    console.log(cpuNumber);
    const oddEven = pariDispari.value;
    console.log(oddEven);
    const sumNumber = userNumber + cpuNumber;
    console.log(sumNumber);
    randomNumber.innerText = cpuNumber;
    sum.innerText = sumNumber;
    
    if ((isEven(sumNumber) && oddEven == "pari") || (!isEven(sumNumber) && oddEven == "dispari")) {
        result.innerHTML = "L'utente ha vinto!"
        
    } else {
        result.innerHTML = "La CPU ha vinto!"
    }
})
