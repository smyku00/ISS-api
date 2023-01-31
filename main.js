//Making map and tiles
const ISSmap = L.map('ISSmap').setView([0, 0], 1)
const issIcon = L.icon({
    iconUrl: 'ISS.png',
    iconSize: [20, 32],
    iconAnchor: [25, 16],
})
const marker = L.marker([0, 0], {icon: issIcon}).addTo(ISSmap)
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
const tileURL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
const tiles = L.tileLayer(tileURL, {attribution})
tiles.addTo(ISSmap)



const api_url = 'https://api.wheretheiss.at/v1/satellites/25544'
async function getISS(){
    const response = await fetch(api_url)
    const data = await response.json()
    const {latitude, longitude} = data

    marker.setLatLng([latitude, longitude])

    document.getElementById("lat").textContent = latitude.toFixed(5)
    document.getElementById("lon").textContent = longitude.toFixed(5)
}


getISS()
