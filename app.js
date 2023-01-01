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
   
    //const url=`http://api.weatherstack.com/current?access_key=b1f98e8c7910f88ecc74d69d8159ecb8&query=${city}`;
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=098b436ad51553adcca0304291ad1c7b&units=metric`;
    fetch(url).then(data => {
        return data.json();
    }).then(data => {
        console.log(data);
         temperatureDegree.textContent=data.main.temp;
         locationTimezone.value="";
         cname.textContent=data.name;
         tempDescription.textContent=data.weather[0].description;         
        //   show.src=`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        //   console.log(show.src);
        //show.src="https://www.bing.com/th?id=OSK.6441176880780482c0e0bcddaa1db26b&w=188&h=132&c=7&o=6&dpr=1.3&pid=SANGAM"
    });
    
});


















