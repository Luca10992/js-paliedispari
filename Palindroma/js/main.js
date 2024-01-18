const textInput = document.querySelector(".form-control");
const verifyButton = document.querySelector("#button");
const verifyAlert = document.querySelector("#verify");


verifyButton.addEventListener('click', function() {
    let insertedWord = textInput.value;
    let resultFunction = ispalindrome(insertedWord);

    if (resultFunction) {
        verifyAlert.innerText = "La parola è palindroma!"
        verifyAlert.classList.add("text-success");
        textInput.classList.add("is-valid");
        textInput.classList.remove("is-invalid");
        verifyAlert.classList.remove("text-danger");
        verifyAlert.classList.remove("text-warning");

    } else if (!isNaN(parseInt(insertedWord))) {
        verifyAlert.innerText = "Attenzione, inserire una parola valida!"
        verifyAlert.classList.remove("text-success");
        verifyAlert.classList.remove("text-danger");
        verifyAlert.classList.add("text-warning");
    } else {
        verifyAlert.innerText = "La parola non è palindroma!"
        verifyAlert.classList.add("text-danger");
        textInput.classList.add("is-invalid");
        textInput.classList.remove("is-valid");
        verifyAlert.classList.remove("text-success");
        verifyAlert.classList.remove("text-warning");
    }
})

