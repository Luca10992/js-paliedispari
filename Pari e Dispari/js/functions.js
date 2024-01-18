function getRandomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max +1 - min) + min)
    return randomNumber;
}

function isEven(number) {
    number = parseInt(number)
    if (isNaN(number)) {
        result.innerHTML = "I valori inseriti devomno essere numerici "
        return;
    }

    let result = number % 2 === 0;
    return result;
}