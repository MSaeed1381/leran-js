let $ = document;

let placeHolderBody = $.querySelector('.main-body__content');
let mainTitle = $.querySelector('.main-body__title');
let informationBoxTitle = $.querySelectorAll('.information-box__title');
let informationBoxContent = $.querySelectorAll('.information-box__content');
let bigNumber = $.querySelector('.big-number');
let informationWrapper = $.querySelector('.information');

$.body.addEventListener('keydown', function (event){
    event.preventDefault();
    mainTitle.innerHTML = `Java Script Key Code ${event.keyCode}`
    placeHolderBody.style.display = 'none';
    informationWrapper.style.display = 'flex';
    bigNumber.style.display = 'inline';
    bigNumber.innerHTML = String(event.keyCode);
    let values = {
        'event.key': event.key,
        'event.location': event.location,
        'event.code': event.code,
        'event.which': event.which,
        'event.isTrusted': event.isTrusted,
        'event.isComposing': event.isComposing,
    };

    for (let i = 0; i < informationBoxTitle.length; i++) {
        console.log(Object.keys(values)[i])
        informationBoxTitle[i].innerHTML = Object.keys(values)[i];
    }

    for (let i = 0; i < informationBoxContent.length; i++) {
        console.log(Object.values(values)[i])
        informationBoxContent[i].innerHTML = values[Object.keys(values)[i]];
    }


})