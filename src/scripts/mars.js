/* const key = 'gTjJVNhJu92DzeaAWFLYdKgIKBvW2gHPtDlbgNxS',
    solDay = document.querySelector('.date__day'),
    highTemp = document.querySelector('.high'),
    lowTemp = document.querySelector('.low'),
    wind = document.querySelector('.wind__speed')
    ;
const previousWeatherToggle = document.querySelector('.show-previous-weather');
const previousWeather = document.querySelector('.previous-weather')

async function requestNews(api_key) {
    const response = await fetch(`https://api.nasa.gov/insight_weather/?api_key=${key}&feedtype=json&ver=1.0`);
    const sol = await response.json();
    return sol;
}
requestNews(key)
    .then(sol => weatherBlock(sol))
    .catch(err => console.log('Error: ', err.message));

function weatherBlock(data) {
    const currentSol = data['sol_keys'][6];
    solDay.textContent = currentSol;
    console.log(data);
    highTemp.textContent = Math.floor(data[currentSol]["PRE"]["mx"]);

} */

import print from 'print-js';

const modalButton = document.querySelector('.form__btn'),
    overlay = document.querySelector('#overlay-modal'),
    closeButton = document.querySelector('.modal__cross'),
    modalElem = document.querySelector('.modal'),
    firstName = document.querySelector('.first-name'),
    lastName = document.querySelector('.last-name'),
    email = document.querySelector('.form__email'),
    names = document.querySelector('.name');


modalButton.addEventListener('click', e => {
    e.preventDefault();
    if (firstName.value && lastName.value) {
        names.textContent = `${firstName.value} ${lastName.value}`;
        console.log(names.textContent);
        document.body.classList.add('stop-scrolling');
        modalElem.classList.add('active');
        overlay.classList.add('active');
    }

});
closeButton.addEventListener('click', e => {
    modalElem.classList.remove('active');
    overlay.classList.remove('active');
    document.body.classList.remove('stop-scrolling');
    firstName.value = "";
    lastName.value = "";
    email.value = "";
});
