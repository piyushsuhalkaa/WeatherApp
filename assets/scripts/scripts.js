let long;
let lat;
let api;
const key = `537eb8539626a1b0bd00656b7581fe9a`;
let cityName = 'Jaipur';

window.addEventListener("load", () =>{
    console.log("OnLoad");
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
           long = position.coords.longitude;
           lat = position.coords.latitude;
           console.log(long);
           console.log(lat);
           api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}`;
           //getWeather(api);
           
        }); 
    } else {
        console.log("Not Found");
    }
});

if(1){
    api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`;
    getWeather(api);
}
function getWeather(api) {
    const getResponse= fetch(api,{mode: 'cors'}).then((response) => {
        console.log("Inside");
        return response.json();
   }).then(data => {
        console.log("data");
        console.log(data);
        console.log(data.name);
   });
}
