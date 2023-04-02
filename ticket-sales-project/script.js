let $ = document;
let countries = ['Iran', 'USA', 'Canada', 'Spain'];
let cities = {
    'Iran': ['Tehran', 'Yazd', 'Mashhad', 'Ahvaz', 'Qazvin'],
    'USA': ['New York', 'California', 'Texas'],
    'Canada': ['Toronto', 'Montreal', 'Winnipeg', 'Ontario'],
    'Spain': ['Madrid', 'Barcelona', 'Seville', 'Valencia']
}
let countrySelect = $.getElementById('countries');
let townSelect = $.getElementById('towns');
countries.forEach(function (country){
    let option = $.createElement('option');
    option.value = country;
    option.innerText = country;
    countrySelect.appendChild(option);
});

cities[countries[0]].forEach(function (city){
    let option = $.createElement('option');
    option.value = city;
    option.innerText = city;
    townSelect.appendChild(option);
});



countrySelect.addEventListener('change', function (){
    let selectedCities = cities[countrySelect.value];
    townSelect.innerHTML = '';
    selectedCities.forEach(function (town){
        let option = $.createElement('option');
        option.value = town;
        option.innerText = town;
        townSelect.appendChild(option);
    })
})