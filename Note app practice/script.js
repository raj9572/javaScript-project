const addBtn = document.querySelector("#addBtn")
const main = document.querySelector("#main")


addBtn.addEventListener("click",()=>{
    addNotes()
})

const addNotes = (text='')=>{
    const note = document.createElement('div')
    note.classList.add("note");
    note.innerHTML=`
    <div class="tool">
                <i class="save fa-regular fa-floppy-disk"></i>
                <i class="trash fa-solid fa-trash "></i>
            </div>
            <textarea class="textarea">${text}</textarea>`
            note.querySelector(".trash").addEventListener('click',()=>{
                note.remove();
                saveNotes();
            })
            note.querySelector(".save").addEventListener('click',()=>{
                saveNotes();
            })
            note.querySelector(".textarea").addEventListener('focusout',()=>{
                saveNotes()
            })
   main.appendChild(note)
   saveNotes();
}

const saveNotes=()=>{
    const notes =document.querySelectorAll(".note textarea")
    console.log(notes)
    const data=[];
    notes.forEach((note)=>{
        data.push(note.value)
    })
    // console.log(data)
    if(data.length===0){
        localStorage.removeItem("notes")
    }
    else{
        localStorage.setItem("notes",JSON.stringify(data))
    }
    
}

// self calling function

(
    function(){
        const lsNotes = JSON.parse(localStorage.getItem("notes"));
        console.log(lsNotes)
        if(lsNotes===null){
            addNotes();
        }
        else{
            lsNotes.forEach((lsNote)=>{
                addNotes(lsNote);
            })
        }
        

        // if(lsNotes.length===0){
        //     localStorage.removeItem("notes")
        // }
        // else{
        //     addNotes()
        // }
        // if(lsNotes===null){
        //     addNotes()
        // }else{
        //     lsNotes.forEach((lsNote)=>{
        //         addNotes(lsNote)
        //     })
    
        // }
        
        // if(lsNotes.length===0){
        //     localStorage.removeItem("notes")
        // }else{
        //     addNotes()
        // }
    }
)()



//self calling function 
//const addNotes = (text='')