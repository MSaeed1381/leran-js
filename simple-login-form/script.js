let usernameInput = document.getElementById('username');
let passwordInput = document.getElementById('password');
let modal = document.getElementsByClassName('modal-massage')[0]
function validate(){
    if (passwordInput.value.length >= 8 && usernameInput.value.length >= 12){
        modal.style.backgroundColor = 'blue'
        modal.innerText = 'you logged in :))'
        modal.style.display = 'block';
    } else {
        modal.style.backgroundColor = 'red'
        modal.innerText = 'please correct your inputs :('
        modal.style.display = 'block';
    }

    setTimeout(function (){
        modal.style.display = 'none';
    }, 3000)
}

function usernameKeyPress(){
    let errorMessage = document.getElementsByClassName('error-message')[0]
    if (usernameInput.value.length < 11){
        errorMessage.innerText = "invalid password (at least 12 characters";
    } else {
        errorMessage.innerText = "";

    }
}

function passwordKeyPress(){
    let errorMessage = document.getElementsByClassName('error-message')[1]
    if (passwordInput.value.length < 7){
        errorMessage.innerText = "invalid password (at least 8 characters)";
    } else {
        errorMessage.innerText = "";

    }
}