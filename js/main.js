const getData = async (city) => {
    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1fe615ecac65e9971fefb0589ba0f5c7&units=imperial`)
    // let weather = response.data.weather[0].main
    console.log(response)
    return response.data
}
// description, temp, temp_min, temp_max, humidity,

const DOMElements = {
    'weatherApp1' : '.weather-data'
}


const createList = (name, description, temp, temp_min, temp_max, humidity) => {
    const forcast = description
    const html = `
    <tr>
        <td>${name}</td>
        <td>${forcast}</td>
        <td>${temp}</td>
        <td>${temp_min}</td>
        <td>${temp_max}</td>
        <td>${humidity}</td>
    </tr>
    `
    document.querySelector(DOMElements['weatherApp1']).insertAdjacentHTML('beforeend', html)
}


const loadData = async (city) => {
    const weather = await getData(city)

    
        createList(weather.name, weather.weather[0].description, weather.main.temp, weather.main.temp_min, weather.main.temp_max, weather.main.humidity);
    
    
}


const clearData = () => {
    document.querySelector(DOMElements['weatherApp1']).innerHTML = ""
}


let form = document.querySelector('#test-data-form')


form.addEventListener('submit', (event) => {
    event.preventDefault();
    let queryCity = document.querySelector('#city').value
    loadData(queryCity)
})






