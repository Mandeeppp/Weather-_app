const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '5f03dab5cemsh792e9249e6e58afp1a7063jsn94595bad66a7',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather = (city)=>{
    cityName.innerHTML = city


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +city, options)
    .then(response => response.json())
    .then(response => {



        console.log(response)

        cloud_pct.innerHTML = response.cloud_pct
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity_2.innerHTML = response.humidity
        max_temp.innerHTML = response.max_temp
        min_temp.innerHTML = response.min_temp
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        wind_degrees.innerHTML = response.wind_degrees
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
    })
    .catch(err => console.error(err));
} 
submitt.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)

})
getWeather("Delhi")











cloud_pct = response.cloud_pct
feels_like = response.feels_like
humidity = response.humidity
max_temp = response.max_temp
min_temp = response.min_temp
sunrise = response.sunrise
sunset = response.sunset
temp = response.temp
wind_degrees = response.wind_degrees
wind_speed = response.wind_speed