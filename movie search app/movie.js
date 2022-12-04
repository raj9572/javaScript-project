
const APIURL ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
  // most popular movie List
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
   
const SEARCHAPI ="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="; 
 // search movie list

 let movieBox = document.querySelector("#movie-box")

 const getMovie=async(api)=>{
    const response = await fetch(api);
    const data = await response.json();
    // console.log(data)
    showMovie(data.results)

    // movieList.innerHTML=`
            // <div class="box">
            //         <img src="${data.results[0].poster_path}" alt="" />
            //     <div class="overlay">
            //         <div class="title"> 
            //             <h2>${data.results[0].title} </h2>
            //             <span>${data.results[0].vote_average}  <span>
            //         </div>
            //         <h3>Overview:</h3>
            //         <p> 
            //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident soluta neque possimus doloribus placeat earum. At consequatur repudiandae dolorem in. Eaque maxime dolores non vel! Id quidem expedita repudiandae impedit?
            //         </p>
            //      </div>
            //     </div>`
 }

 const showMovie=(data)=>{
    movieBox.innerHTML=""
    data.forEach((item)=>{
        console.log(item)
        const box = document.createElement("div")
        box.classList.add("box")
        box.innerHTML=`
        <img src="${IMGPATH+item.poster_path}" alt="" />
        <div class="overlay">
            <div class="title"> 
                <h2>${item.original_title} </h2>
                <span>${item.vote_average}  <span>
            </div>
            <h3>Overview:</h3><br>
            <p> 
                ${item.overview}
            </p>
         </div>`;
         movieBox.appendChild(box)
    })
 }

  document.querySelector("#search").addEventListener('keyup',(e)=>{
      if(e.target.value !=""){
        getMovie(SEARCHAPI+e.target.value)
      }else{
        getMovie(APIURL);
      }
  })
 // init call
//  getMovie(APIURL);