let usernameInput = document.getElementById('username');
let passwordInput = document.getElementById('password');
let modal = document.getElementsByClassName('modal-massage')[0]
function validate(){
    if (passwordInput.value.length > 8 && usernameInput.value.length > 12){
        modal.style.backgroundColor = 'blue'
        modal.innerText = 'you logged in :))'
        modal.style.display = 'block';
    } else {
        modal.style.backgroundColor = 'red'
        modal.innerText = 'please correct your inputs :('
        modal.style.display = 'block';
    }
}