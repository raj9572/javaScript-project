const endDate="02 Dec 2022 10:00 PM"

document.getElementById("end-date").innerText=endDate;
const inputs = document.querySelectorAll("input")

// const clock =()=>{

// }

function clock(){
         const end = new Date(endDate)
         const now = new Date()
         const diff= (end-now)/1000;

         if(diff<0) return;

         //convert into days
         inputs[0].value=Math.floor(diff/(60*60*24))
         //convert into hours
         inputs[1].value=Math.floor(diff/3600)%24
         //convert into minutes
         inputs[2].value= Math.floor(diff/60)%60
         //convert into seconds
         inputs[3].value= Math.floor(diff%60)
}
//intial call
clock();

/* 
1...1 days = 24hours
2... 1hr = 60mins
3... 60mins =  3600 sec



*/

setInterval(() => {
    clock();
}, 1000);