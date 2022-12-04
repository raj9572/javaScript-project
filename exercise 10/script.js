
 let titlec = document.querySelector("#titlec")
 let box = document.querySelector(".box")
//  console.log(titlec)
 let descc = document.querySelector("#descc")
let submit = document.querySelector("#submit")
 submit.addEventListener('click',(e)=>{
    e.preventDefault()
    let titlecc = titlec.value
    let desccc = descc.value
    let todo = document.createElement("div")
     todo.classList.add("form-todo")
    // data = [];
    // localStorage.setItem("todo",JSON.stringify([titlecc,desccc]))
    
    todo.innerHTML+=`
          
                <input id="titlec" value="${titlecc}" type="text" >
                <input id="descc"value="${desccc}" type="text" >
            `
            titlec.value=""
            descc.value=""
    // console.log(e)
    box.appendChild(todo)
    let data =[]
    let notes = document.querySelectorAll("input")
    notes.forEach((note)=>{
        data.push(note.value)
    })

    // console.log(notes)
    localStorage.setItem("note",JSON.stringify(data))

    
 })

 deleted.addEventListener('click',(e)=>{
    e.preventDefault()
     let forms = document.querySelector(".form-todo")
     forms.remove();
    //  let todolist = JSON.parse(localStorage.getItem("todo"));
    //  console.log(todolist)
     localStorage.removeItem("todo")
 })