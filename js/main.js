document.querySelector('input').value = ''
document.querySelector('#submit').addEventListener('click',getFetch)

function getFetch() {
    const zip = document.querySelector('input').value
    // console.log(city)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${zip},us&appid=adb29119d975a7cad313de8dc917500f&units=imperial`
    console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector('#location').innerText = data.name
            document.querySelector('#current').innerText = `Current temp: ${Math.round(data.main.temp)}°F` 
            document.querySelector('#maxmin').innerText = `Today's Hi/Lo: ${Math.round(data.main.temp_max)}°F/${Math.round(data.main.temp_min)}°F`
        })
        .catch(err =>{
            console.log(`error ${err}`)
        })
}    