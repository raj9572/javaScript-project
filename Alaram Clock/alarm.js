const selectMenu = document.querySelectorAll("select")
const setAlarmBtn = document.querySelector(".btn")
const Content = document.querySelector(".content")
// console.log(selectMenu)

let alarmTime, isAlarmSet = false;
 rigntone = new Audio("./ringtone.mp3")
for(let i=11; i>=0; i--){
    i=i<10?"0"+i:i;
    let option = `<option value=${i}>${i}</option>`
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend",option)
}
for(let i=59; i>=0; i--){
    i=i<10?"0"+i:i;
    let option = `<option value=${i}>${i}</option>`
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend",option)
}

for(let i=0; i<2; i++){
    let ampm = i<1?"PM":"AM";
    let option = `<option value=${ampm}>${ampm}</option>`
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend",option)
}

setInterval(() => {
     let date = new Date();
     h = date.getHours();
     m = date.getMinutes();
     s = date.getSeconds();
     ampm = "AM";
     if(h>=12){
            h = h-12;
            ampm = "PM"
     }
     h = h<10?"0"+h:h
     m = m<10?"0"+m:m
     s = s<10?"0"+s:s

     let nowDate = `${h}:${m}:${s} ${ampm}`
     document.getElementById("currentDate").innerText=nowDate;
    //  console.log(nowDate)
    // console.log(alarmTime,nowDate)
     if(alarmTime ==`${h}:${m} ${ampm}` ){
         rigntone.play();
         rigntone.loop = true;
     }
}, 1000);


   function setAlarm(){
    console.log("hello")
    if(isAlarmSet){
        alarmTime=""
        rigntone.pause();
        Content.classList.remove("disabled")
        setAlarmBtn.innerText="set Alarm"
        return isAlarmSet= false;
    }
     let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`
    //    console.log(time)
     if(time.includes("Hour") || time.includes("MInutes") || time.includes("AM/PM")){
        alert("please select the time then click to set Alarm")
     }
     isAlarmSet=true;
    alarmTime=time;
     Content.classList.add("disabled")
     setAlarmBtn.innerText="Clear Alarm"
   }


setAlarmBtn.addEventListener('click',setAlarm)
