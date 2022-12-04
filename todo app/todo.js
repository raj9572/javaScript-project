// const item = document.querySelector("#item")
// console.log(item)
// const todo_box = document.querySelector("#todo-box");

// item.addEventListener('keyup',(e)=>{
//     e.preventDefault()
//     if(e.key=="Enter"){
//         let li=document.createElement("li")
//         li.classList.add("todo-list")
//         li.innerHTML=`
//         <span class="liText">${item.value}</span> 
//         <i class="fas fa-times"></i>`
//         todo_box.appendChild(li)
//         item.value=""
//         // console.log(item.value)
//         // item.value=""
//     }


// })

// //    let todo_list = todo_box.querySelector(".todo-list")
//    todo_box.addEventListener('click',(e)=>{
//      if(e.target.classList.contains("todo-list")){
//          e.target.firstElementChild.style.textDecoration="line-through"
//          e.target.style.background="gray"
//      }
//    })

//    todo_box.addEventListener('click',(e)=>{
//      if(e.target.classList.contains("fa-times")){
//          e.target.parentElement.remove();
//      }
//    })



 // ####################   Solution by WS Cube youtube Channel  #######################33##############


 const item = document.querySelector("#item")
console.log(item)
const todo_box = document.querySelector("#todo-box");

item.addEventListener("keyup",(e)=>{
   if(e.key=="Enter"){
    addTodo(item.value)
    // console.log(item.value)
    item.value=""
   }
})

// item.addEventListener('focusout',()=>{
//    addTodo(item.value)
//    item.value=""
// })

const addTodo = (item="")=>{
   const liItem = document.createElement("li")
   liItem.innerHTML=`
      <span class="spanItem">${item}</span>
   <i class="fas fa-times"></i>`;
   liItem.addEventListener('click',()=>{
    liItem.classList.toggle("done")
   })
   liItem.querySelector("i").addEventListener('click',()=>{
    liItem.remove();
    saveNotes()
   })
   todo_box.appendChild(liItem)

   // localStorage.setItem("todo",JSON.stringify(item))

   saveNotes()
}


const saveNotes=()=>{
  const spanItem=document.querySelectorAll(".spanItem")
   let data=[]
  spanItem.forEach((item)=>{
     data.push(item.innerText)
  })
//   console.log(data)
  if(data.length==""){
   localStorage.removeItem("todo")
  }else{
     localStorage.setItem("todo",JSON.stringify(data))
  }

}

(function(){
   const todoItem =JSON.parse(localStorage.getItem("todo"))
    if(todoItem===null){
         alert("please Enter your task")
    }else{
       todoItem.forEach((item)=>{
          // console.log(item)
          addTodo(item)
       })
    }
   // console.log(todoItem)
}
)();



// addEventListner('keyup',(e)=>{ console.log(e.key)})
// addEventListner('focusout',()=>{ console.log("hello world")})
// e.target
//JSON.stringify(data)
//JSON.parse