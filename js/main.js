document.querySelector('#submit').addEventListener('click',getFetch)

function getFetch() {
    const city = document.querySelector('input').value
    const state = document.querySelector('select').value
    // console.log(city)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},usa&appid=adb29119d975a7cad313de8dc917500f&units=imperial`
    console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)

        })
        .catch(err =>{
            console.log(`error ${err}`)
        })
}    