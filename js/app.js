targetElem = document.getElementById("nadpis")

async function getForecast() {
    let latitude = 48.920507;
    let longitude = 15.997877;
    let appId = 'a3e7bdc246b811691b06aab13ccb0dbb';
    let endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${appId}&units=metric`;

    let response = await fetch(endpoint);

    return await response.json();
}

async function updateForecast() {
    let data = null;
    try {
        data = await getForecast()
    } catch (e) {
        data = "fucking snowing"
    }
    let teplota = Math.round(data.main.temp)
    targetElem.innerText = "V Plenkovicích je právě " + teplota + "°C"; 
}

updateForecast()


