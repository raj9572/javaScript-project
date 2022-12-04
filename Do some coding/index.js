let button = document.getElementById("DobButton");
let input = document.getElementById("dobInput");
let setting = document.querySelector(".fa-cog");
let setcontent = document.querySelector(".setting-content")
const initiaText =document.getElementById("initialText")
const afterDOBButton =document.getElementById("afterDOBButton")
const addButton = document.getElementById("DobButton");
const dobInput = document.getElementById("dobInput");
const year= document.getElementById("years")
const month= document.getElementById("months")
const day= document.getElementById("days")
const hour= document.getElementById("hours")
const minute= document.getElementById("minutes")
const second= document.getElementById("seconds")
let dateofBirth;

console.log(setting)

let c=0;
setting.onclick= function(){
    c++;
    if(c%2!=0){
        console.log(c)
        button.style.display="block"
        input.style.display="block"
    }
    else{
        button.style.display="none"
        input.style.display="none"
    }
}


const setDOBHandler =()=>{
    const dateString=dobInput.value;
    dateofBirth=dateString?new Date(dateString):null;

    
    if(dateofBirth){
        initiaText.classList.add("hide")
        afterDOBButton.classList.remove("hide")
        setInterval(() => {
            updateAge()
        }, 1000);

        // console.log(dateofBirth)
    }
    else {
        afterDOBButton.classList.add("hide")
        initiaText.classList.remove("hide")
    }

}


 const makeTwodigitNumber = (number) =>{
      return number>9?number:"0"+number;
 }


     
    const updateAge = ()=>{
        
        const currentDate= new Date();
        const datediff = currentDate-dateofBirth;
        // console.log(dateofBirth)
        const years =Math.floor(datediff/(1000*60*60*24*365));
        const months = Math.floor(datediff/(1000*60*60*24*365))%12;
        const days = Math.floor(datediff/(1000*60*60*24))%30; 
        const hours = Math.floor(datediff/(1000*60*60))%24; 
        const minutes = Math.floor(datediff/(1000*60))%60; 
        const seconds = Math.floor(datediff/(1000))%60; 
        

        // let yearss= years>9?years:"0"+years
        // let monthss= months>9?months:"0"+months
        // let dayss= days>9?days:"0"+days
        // let hourss= hours>9?hours:"0"+hours
        // let minutess= minutes>9?minutes:"0"+minutes
        // let secondss= seconds>9?seconds:"0"+seconds
        

        year.innerHTML= years;
        month.innerHTML=months;
        day.innerHTML=days;
        hour.innerHTML=hours;
        minute.innerHTML=minutes;
        second.innerHTML=seconds;
        
        // console.log(years,months,days,hours,minutes,seconds);
        
        
    }


    setDOBHandler();
    

addButton.addEventListener('click',setDOBHandler )


