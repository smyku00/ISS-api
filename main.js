const api_url = 'https://api.wheretheiss.at/v1/satellites/25544'
async function getISS(){
    const response = await fetch(api_url)
    const data = await response.json()
    const {latitude, longitude} = data

    document.getElementById("lat").textContent = latitude.toFixed(5)
    document.getElementById("lon").textContent = longitude.toFixed(5)
}
setInterval(getISS,1000)

getISS()