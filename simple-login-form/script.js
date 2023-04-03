let $ = document;

let usernameInput = $.getElementById('username');
let passwordInput = $.getElementById('password');
let modal = $.getElementsByClassName('modal-massage')[0]
let loginBtn = $.getElementById('button');
loginBtn.addEventListener('click', validate)
usernameInput.addEventListener('keyup', usernameKeyPress)
passwordInput.addEventListener('keyup', passwordKeyPress)

let backgroundRandomColor = $.querySelector('.random-color');
setInterval(function (){
        backgroundRandomColor.style.backgroundColor = generateRandomRGB();
    }, 2000)

function validate(){
    if (passwordInput.value.length >= 8 && usernameInput.value.length >= 12){
        modal.style.backgroundColor = 'blue'
        modal.innerText = 'you logged in :)'
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
    let errorMessage = $.getElementsByClassName('error-message')[0]
    if (usernameInput.value.length < 12){
        errorMessage.innerText = "invalid password (at least 12 characters)";
    } else {
        errorMessage.innerText = "";

    }
}

function passwordKeyPress(){
    let errorMessage = $.getElementsByClassName('error-message')[1]
    if (passwordInput.value.length < 8){
        errorMessage.innerText = "invalid password (at least 8 characters)";
    } else {
        errorMessage.innerText = "";

    }
}

function generateNumber(start, end){
    let random = Math.floor(Math.random() * (end - start));
    return random + start;
}
function generateRandomRGB(){
    return `rgb(${generateNumber(0,255)},${generateNumber(0,255)},${generateNumber(0,255)})`
}