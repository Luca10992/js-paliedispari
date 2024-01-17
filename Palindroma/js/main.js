const textInput = document.querySelector(".form-control");
const verifyButton = document.querySelector("#button");
const verifyAlert = document.querySelector("#verify");


verifyButton.addEventListener('click', function() {
    let insertedWord = textInput.value;
    let resultFunction = ispalindrome(insertedWord);

    if (resultFunction) {
        verifyAlert.innerText = "La parola è palindroma!"
        verifyAlert.classList.add("text-success");
        verifyAlert.classList.remove("text-danger");
    } else {
        verifyAlert.innerText = "La parola non è palindroma!"
        verifyAlert.classList.add("text-danger");
        verifyAlert.classList.remove("text-success");
    }
})

