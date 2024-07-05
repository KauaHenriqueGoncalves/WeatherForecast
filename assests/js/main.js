
// SCREEN ERROR
function generatiScreenError() {
    const div = document.createElement('div');
    div.classList.add('screen-error');
    
    const p = document.createElement('p');
    p.innerText = 'Cidade não encontrada! Informe um nome válido!';
    div.append(p);

    const btnError = document.createElement('button');
    btnError.classList.add('btn-error');
    div.append(btnError);

    const i = document.createElement('i');
    i.classList.add('fa-solid', 'fa-x');
    btnError.append(i);

    document.body.appendChild(div);

    setTimeout(() => {
        btnError.focus();
        div.style.top = '1rem';
        btnError.addEventListener(
            'click', 
            function() {
                div.style.top = '-8rem';
                setTimeout(() => document.body.removeChild(div), 500); // REMOVE SCREEN ERROR
            });
    }, 100);

    setTimeout(() => {
        div.style.top = '-8rem';
        setTimeout(() => document.body.removeChild(div), 500); // REMOVE SCREEN ERROR  
    }, 3000);
}



// ANIMATION TAG LOCATION INPUT WEATHER AND ACESSIBLE
;(function(){
    'use strict';
    const inputWeather = document.getElementById('inWeatherCity');
    const tagLocation =  inputWeather.parentElement.firstElementChild;

    function disappearPlaceholder(boolean) {
        const text = 'Informe uma cidade:';
        inputWeather.placeholder = boolean?'':text;
    }

    function disappearTagLocation() {
        tagLocation.style.left = '-2rem';
        disappearPlaceholder(true);
        showTagLocation();
    }

    function showTagLocation() {
        setTimeout(() => {
            function clickInput(e) {
                if (!(inputWeather.value)) tagLocation.style.left = '.6rem';
                disappearPlaceholder(false);
                document.removeEventListener('click', clickInput);
            }
            document.addEventListener('click', clickInput);
        }, 1);
    }

    inputWeather.addEventListener(
        'click',
        function(e) {
            disappearTagLocation(true);           
        }
    );

    document.addEventListener(
        'keydown', 
        function(e) {
            const key = e.code;
            
            if (!(key === 'Tab')) return;
        
            setTimeout(() => {
                const focused = inputWeather === document.activeElement;
                if (focused){
                    tagLocation.style.left = '-2rem';
                    disappearPlaceholder(true);
                } else if (!(inputWeather.value)) {
                    tagLocation.style.left = '.6rem';
                    disappearPlaceholder(false)
                }
            }, 1);
        }
    );
})()



function resultWeather(json) {
    const articleResultWeather = document.createElement('article');
    articleResultWeather.classList.add('result-weather');

    const nameCity = document.createElement('p');
    nameCity.classList.add('name-city');
    nameCity.innerText = `${json.name}, ${json.sys.country}`;
    articleResultWeather.appendChild(nameCity);

    const resultTemp = document.createElement('aside');
    resultTemp.classList.add('result-temp');
    articleResultWeather.appendChild(resultTemp);

    const iconWeather = document.createElement('div');
    iconWeather.classList.add('icon-weather');
    resultTemp.appendChild(iconWeather);

    const imgWeather = document.createElement('img');
    imgWeather.setAttribute('src', `https://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`);
    imgWeather.setAttribute('alt', 'image weather');
    iconWeather.appendChild(imgWeather);

    const weatherTemp = document.createElement('div');
    weatherTemp.classList.add('weather')
    resultTemp.appendChild(weatherTemp);

    const temp = document.createElement('span');
    temp.classList.add('temp');
    temp.innerText = `${parseInt(json.main.temp)} C°`;
    weatherTemp.appendChild(temp);

    const description = document.createElement('span');
    description.classList.add('description');
    description.innerText = `${json.weather[0].description}`;
    weatherTemp.appendChild(description)

    const otherInformation = document.createElement('aside');
    otherInformation.classList.add('other-information');
    articleResultWeather.appendChild(otherInformation);

    const maxTemp = document.createElement('div');
    maxTemp.classList.add('max-temp');
    otherInformation.appendChild(maxTemp);

    const maxImg = document.createElement('img');
    maxImg.setAttribute('src', 'assests/image/maxTemp.png');
    maxImg.setAttribute('alt', 'max-temp');
    maxTemp.appendChild(maxImg);

    const maxText = document.createElement('div');
    maxText.classList.add('text')
    maxTemp.appendChild(maxText);

    const maxP = document.createElement('p');
    maxP.innerText = `Temp. max`;
    maxText.appendChild(maxP);

    const maxInfo = document.createElement('span');
    maxInfo.innerText = `${(json.main.temp_max).toFixed(0)} C°`;
    maxText.appendChild(maxInfo);

    const minTemp = document.createElement('div');
    minTemp.classList.add('min-temp');
    otherInformation.appendChild(minTemp);

    const minImg = document.createElement('img');
    minImg.setAttribute('src', 'assests/image/minTemp.png');
    minImg.setAttribute('alt', 'min-temp');
    minTemp.appendChild(minImg);

    const minText = document.createElement('div');
    minText.classList.add('text')
    minTemp.appendChild(minText);

    const minP = document.createElement('p');
    minP.innerText = `Temp. min`;
    minText.appendChild(minP);

    const minInfo = document.createElement('span');
    minInfo.innerText = `${(json.main.temp_min).toFixed(0)} C°`;
    minText.appendChild(minInfo);

    const divUmidade = document.createElement('div');
    divUmidade.classList.add('umidade');
    otherInformation.appendChild(divUmidade);

    const imgUmidade = document.createElement('img');
    imgUmidade.setAttribute('src', 'assests/image/umidade.png');
    imgUmidade.setAttribute('alt', 'umidade');
    divUmidade.appendChild(imgUmidade);

    const textUmidade = document.createElement('div');
    textUmidade.classList.add('text')
    divUmidade.appendChild(textUmidade);

    const umidadeP = document.createElement('p');
    umidadeP.innerText = `Umidade`;
    textUmidade.appendChild(umidadeP);

    const infoUmidade = document.createElement('span');
    infoUmidade.innerText = `${(json.main.humidity).toFixed(0)}%`;
    textUmidade.appendChild(infoUmidade);

    const divVento = document.createElement('div');
    divVento.classList.add('vento');
    otherInformation.appendChild(divVento);

    const imgVento = document.createElement('img');
    imgVento.setAttribute('src', 'assests/image/vento.png');
    imgVento.setAttribute('alt', 'vento');
    divVento.appendChild(imgVento);

    const textVento = document.createElement('div');
    textVento.classList.add('text')
    divVento.appendChild(textVento);

    const VentoP = document.createElement('p');
    VentoP.innerText = `Vento`;
    textVento.appendChild(VentoP);

    const infoVento = document.createElement('span');
    infoVento.innerText = `${(json.wind.speed).toFixed(1)} km/h`;
    textVento.appendChild(infoVento);

    document.querySelector('.container-weather').appendChild(articleResultWeather);
}

function ifExistResult() {
    const containerWeather = document.querySelector('.container-weather');
    const arrChildrensContainer = Array.from(containerWeather.children);
    
    arrChildrensContainer.forEach( element => {
        if (element.classList.contains('result-weather')) {
            const result = document.querySelector('.result-weather');
            const parent = result.parentElement;
            parent.removeChild(result);
        }
    });
}

// SERVER REQUEST - OpenWeatherMap
document.getElementById('formWeather').addEventListener(
    'submit',
    async function(e) {
        e.preventDefault(); // NOT SEND FORM
        const cityName = this.inWeatherCity.value;
        const apiKey = '0a9c9af318caddc81c1c54610fc0fa68';

        const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(cityName)}&appid=${apiKey}&units=metric&lang=pt_br`;
        const resultApi = await fetch(urlApi);
        const jsonDataWeather = await resultApi.json();

        if (jsonDataWeather.cod === '404') return generatiScreenError();
        
        console.log(jsonDataWeather);

        ifExistResult();
        resultWeather(jsonDataWeather);
    }
);
