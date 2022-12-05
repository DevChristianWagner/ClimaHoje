const apiKey = ""; // Paste here your openweathermap api_key
const apiCountryURL = 'https://countryflagsapi.com/png/' 

const cityInput = document.querySelector('#city-input')
const searchBtn = document.querySelector('#search')

const cityElement = document.querySelector("#city")
const tempElement = document.querySelector("#temperature span")
const descElement = document.querySelector("#description")
const weatherIconElement = document.querySelector("#weather-icon")
const countryElement = document.querySelector("#country")
const umidityElement = document.querySelector("#humidity span")
const windElement = document.querySelector("#wind span")

const weatherContainer = document.querySelector('#weather-data')

// fast buttons
const fastBtns = document.querySelector('.citys')

const spBtn = document.querySelector('#sp')
const baBtn = document.querySelector('#ba')
const mvBtn = document.querySelector('#mv')
const paBtn = document.querySelector('#pa')
const maBtn = document.querySelector('#ma')
const blBtn = document.querySelector('#bl')
const trBtn = document.querySelector('#tr')
const nyBtn = document.querySelector('#ny')
const orBtn = document.querySelector('#or')

spBtn.addEventListener('click', (e) => {
    e.preventDefault()

    const city = 'São Paulo';

    showWeatherData(city);
})

baBtn.addEventListener('click', (e) => {
    e.preventDefault()

    const city = 'Buenos Aires';

    showWeatherData(city);
})

mvBtn.addEventListener('click', (e) => {
    e.preventDefault()

    const city = 'Montevidéu';

    showWeatherData(city);
})

paBtn.addEventListener('click', (e) => {
    e.preventDefault()

    const city = 'Paris';

    showWeatherData(city);
})

maBtn.addEventListener('click', (e) => {
    e.preventDefault()

    const city = 'Madrid';

    showWeatherData(city);
})

blBtn.addEventListener('click', (e) => {
    e.preventDefault()

    const city = 'Berlim';

    showWeatherData(city);
})

trBtn.addEventListener('click', (e) => {
    e.preventDefault()

    const city = 'Toronto';

    showWeatherData(city);
})

nyBtn.addEventListener('click', (e) => {
    e.preventDefault()

    const city = 'New York';

    showWeatherData(city);
})

orBtn.addEventListener('click', (e) => {
    e.preventDefault()

    const city = 'Orlando';

    showWeatherData(city);
})

// functions
const getWeatherData = async(city) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`

    const res = await fetch(apiWeatherURL);
    const data = await res.json();

    return data;   
};

const showWeatherData = async(city) => {
    const data = await getWeatherData(city);
    console.log(data)

    cityElement.innerText = data.name; 
    tempElement.innerText = parseInt(data.main.temp)
    descElement.innerText = data.weather[0].description;
    weatherIconElement.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`)
    countryElement.setAttribute('src', apiCountryURL + data.sys.country)
    umidityElement.innerText = `${data.main.humidity}%`
    windElement.innerText = `${data.wind.speed}km/h`

    weatherContainer.classList.remove("hide")
   // document.body.style.background = 
}


// events 
searchBtn.addEventListener('click', (e) => {
    e.preventDefault()

    const city = cityInput.value;

    showWeatherData(city);
})

cityInput.addEventListener("keyup", (e) => {
    if(e.code === "Enter") {
        const city = e.target.value;

        showWeatherData(city);
    }
})