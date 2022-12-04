var num=0;
const value= document.querySelector(".value")
const button= document.querySelectorAll(".btn")

button.forEach((btn)=>{
    console.log("hello")
    btn.addEventListener("click",(e)=>{
        let target = e.currentTarget;
        if(target.classList.contains("btn-danger")){
            num--;
        }else if(target.classList.contains("btn-secondary")){
            num=0;
        }else if(target.classList.contains("btn-success")){
            num++;
        }
        value.innerText=num;
        if(num>0){
            value.style.color="green"
        }else if(num<0){
            value.style.color="red"
        }
    })
})