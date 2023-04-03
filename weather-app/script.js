// background-image: url("images/1.jpg");

let $ = document;

let searchIcon = $.querySelector('.search-icon');
let searchBox = $.getElementById('search-box');
let informationContent = $.querySelector('.information-content');
let cities = {
    tehran: {
        temperature: 43,
        humidity: 23,
        windSpeed: 10,
        weather: 'cloud'
    },
    yazd: {
        temperature: 60,
        humidity: 12,
        windSpeed: 15,
        weather: 'sunny'
    },
    tabriz: {
        temperature: 23,
        humidity: 10,
        windSpeed: 14,
        weather: 'rainy'
    }
}
function generateRandom(start, end){
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

(function (){
    $.body.style.backgroundImage = `url(images/${generateRandom(1, 4)}.jpg)`;
}())

searchIcon.addEventListener('click', function (){
    let city = searchBox.value.toString().toLowerCase();
    let cityInformation = cities[city];
    informationContent.innerText = '';
    informationContent.classList.add('white-color');
    searchBox.value = '';

    if (city in cities){

        let title = $.createElement('h1');
        title.innerText = `Weather in ${city}`;
        informationContent.appendChild(title);

        let temperatureContent = $.createElement('h2');
        temperatureContent.innerText = `${cityInformation.temperature}'C`;
        informationContent.appendChild(temperatureContent);

        let weatherDiv = $.createElement('div');
        weatherDiv.classList.add('weather-content');
        let image = $.createElement('img');
        image.setAttribute('src', `images/${cityInformation.weather}.png`)
        image.classList.add('image-icon');
        let weatherContent = $.createElement('span');
        weatherContent.innerText = cityInformation.weather;

        weatherDiv.appendChild(image);
        weatherDiv.appendChild(weatherContent)

        informationContent.appendChild(weatherDiv);

        let humidityContent = $.createElement('p');
        humidityContent.innerText = `humidity: ${cityInformation.humidity}%`;
        humidityContent.classList.add('small-font');
        informationContent.appendChild(humidityContent);

        let windSpeedContent = $.createElement('p');
        windSpeedContent.innerText = `windSpeed: ${cityInformation.windSpeed} km/h`;
        windSpeedContent.classList.add('small-font');
        informationContent.appendChild(windSpeedContent);
    } else{
        informationContent.innerHTML = 'not found!';
    }

})

