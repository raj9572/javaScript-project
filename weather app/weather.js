const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`;
const form=document.querySelector("#form-todo")
const search=document.querySelector("#search")
const weather = document.querySelector("#weather")
// const API = 



const getWeather = async(city)=>{
    weather.innerHTML=`<h3> loading....</h3>`
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
   const response = await fetch(url)
   const data= await response.json();
//    console.log(data)
return showWeather(data)

}

const showWeather = (data)=>{
    if(data.cod == "404"){
        weather.innerHTML=`<h2> city not found</h2>`
        return;
    }
    weather.innerHTML=`
          <div class="image">
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="This is cloudy image" style="width:80px;height:60px;" >
            </div>
            <div>
                <h2>${data.main.temp} ℃</h2>
                <h4>${data.weather[0].main}</h4>
            </div>`;
            // search.value=""
            // fetchImage(data.weather[0].icon)
            // fetchImage(data);
}

// const fetchImage = async(data)=>{
//     const IMG_URL = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
//     const response= await fetch(IMG_URL)
//     const imageData = await response.json();
//     console.log(imageData)

// }

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    getWeather(search.value)
})

















































































//  form.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     console.log("helo")
//  })

//  search.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     console.log("helo")
//  })