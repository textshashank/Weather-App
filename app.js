const locationTimezone=document.querySelector(".location-timezone");
const temperatureDegree=document.querySelector(".temperature-degree");
const cname=document.querySelector(".city-name");
const tempDescription=document.querySelector(".temperature-description");
const show=document.querySelector(".im");

const btn=document.querySelector(".btn");
btn.addEventListener('click',() => {
    const city=locationTimezone.value;
    if(city.length==0){
        return;
    }
   
    const url=`http://api.weatherstack.com/current?access_key=b1f98e8c7910f88ecc74d69d8159ecb8&query=${city}`;
    fetch(url).then(data => {
        return data.json();
    }).then(data => {
        console.log(data);
        temperatureDegree.textContent=data.current.temperature;
        locationTimezone.value="";
        cname.textContent=data.location.name;
        tempDescription.textContent=data.current.weather_descriptions[0];
        show.src=data.current.weather_icons[0];
    });
    
});


















