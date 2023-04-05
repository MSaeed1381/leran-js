let $ = document;

let placeHolderBody = $.querySelector('.main-body__content');
let mainTitle = $.querySelector('.main-body__title');
let informationBoxTitle = $.querySelectorAll('.information-box__title');
let informationBoxContent = $.querySelectorAll('.information-box__content');
let values = {

};
$.body.addEventListener('keydown', function (event){
    event.preventDefault();
    mainTitle.innerHTML = `Java Script Key Code ${event.keyCode}`
    placeHolderBody.style.display = 'none';
    values['event.key'] = event.key;
    values['event.location'] = event.location;
    values['event.code'] = event.code;
    values['event.which'] = event.which;
    for (let i = 0; i < informationBoxTitle.length; i++) {
        console.log(Object.keys(values)[i])
        informationBoxTitle[i].innerHTML = Object.keys(values)[i];
    }

    for (let i = 0; i < informationBoxContent.length; i++) {
        console.log(Object.values(values)[i])
        informationBoxContent[i].innerHTML = values[Object.keys(values)[i]];
    }


})