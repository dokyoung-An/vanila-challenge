const weather = document.querySelector("#weather span:first-child")
const city = document.querySelector("#weather span:last-child" )

const API_KEY ="a95992ee7457376e5a5d61fc0c3e0ed3"

function onGeoOk() {
    const long =129.3115276;
    const lat =35.5396224;
    console.log("you live at ",long,lat)
    
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`
    fetch(url).then((response)=>response.json()).then((data)=>{
        city.innerText=data.name;
        weather.innerText=`${data.weather[0].main}/${data.main.temp}`
    });

}

function onGeoErr () {
    alert("날씨 정보를 가올 수  없어요");
}


navigator.geolocation.getCurrentPosition(onGeoOk,onGeoErr);

