let weatherKey = '51b66d1c18112050011a7e4248fdc8f6'

const cityInput = document.querySelector('.cityInput'),
    searchBtn = document.querySelector('.searchBtn'),
    temp = document.querySelector('.temp'),
    sunrise = document.querySelector('.sunrise'),
    sunset = document.querySelector('.sunset'),
    nocity = document.querySelector('.nocity'),
    cityName = document.querySelector('.cityName'),
    weatherResult = document.querySelector('.weatherResult'),
    recent = document.querySelector('.recent')


// Ḥurfeish
let city = 'London';
let lat = 33.0171;
let lon = 35.3484;
let recentArray = [];

main()

function main() {

    getMyLocation(lat, lon);
    addClickEvents();

}


function addClickEvents() {
    searchBtn.addEventListener('click', searchBtnClicked);
    cityInput.addEventListener('keydown', searchEnterClicked)
}

function searchBtnClicked() {
    city = cityInput.value;
    console.log('searchBtnClicked ' + city);

    if (recentArray.indexOf(city) == -1) {
        getLocation(city);
    } else {
        nocity.innerHTML = 'Already searched'
        nocity.style.display = 'block';
    }
}

function searchEnterClicked(e) {

    if (e.keyCode == 13) {
        searchBtnClicked()
    }
}

async function getLocation(city) {

    try {
        let res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherKey}`);
        console.log(res);

        let weatherDesc = res.data.weather[0].main;
        console.log(weatherDesc);
        addCity(city, (+res.data.main.temp - 273).toFixed(2), timeFromTimeStamp(+res.data.sys.sunrise), timeFromTimeStamp(+res.data.sys.sunset), weatherDesc)
        recentArray.push(city)
        nocity.style.display = 'none';

    } catch(err) {
        nocity.innerHTML = `<p style="color: blue;"> No such city </p>` // 'No such city'
        nocity.style.display = 'block';
        console.log(err);
    }
   
}

async function getMyLocation(lat, lon) {

    try {
        let res1 = await axios.get(`https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&appid=${weatherKey}`);
        let city = res1.data.list[0].name;
        console.log(city);

        let res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherKey}`);
        let weatherDesc = res.data.weather[0].main;

        addCity(city, (+res.data.main.temp - 273).toFixed(2)+' C&#176;', timeFromTimeStamp(+res.data.sys.sunrise), timeFromTimeStamp(+res.data.sys.sunset), weatherDesc)
        recentArray.push(city)

    } catch(err) {
        console.log(err);
    }
   
}

function addCity(name, temp, rise, set, des) {

    let imgIcon = 'clear';
    if (des == 'Clouds') {
        imgIcon = 'cloud';
    } else if (des == 'Clear') {
        imgIcon = 'clear';
    }
    
    recent.innerHTML += 
    `<div class="weatherResult">
        <img class="descImg" src="/weather/images/${imgIcon}.svg" alt="">
        <div class="weatherDetails">
            <p class="cityName">Name: ${name}</p>
            <p class="temp">Temp: ${temp}</p>
            <p class="sunrise">Sunrise: ${rise}</p>
            <p class="sunset">Sunset: ${set}</p>
        </div>
    </div>`

}


function timeFromTimeStamp(ts) {

    let date = new Date(ts * 1000);

    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();

    return hours + ':' + minutes.substr(-2);
}




// function successCallback(position){
//     console.log(position);
// }
// function erroCallBack(error){
//     console.log(error);
// }
// navigator.geolocation.getCurrentPosition(successCallback,erroCallBack);