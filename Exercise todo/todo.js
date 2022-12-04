let question =[
    {
        'que': "which of the following is markup language",
        'a':'HTML',
        'b':'CSS',
        'c':'javaScript',
        'd':'PHP',
        "correct":'a'
    },
    {
        'que': "What year was javaScript launched?",
        'a':'1996',
        'b':'1995',
        'c':'1994',
        'd':'none of these',
        "correct":'b'
    },
    {
        'que': "What does CSS stands for?",
        'a':'Hypertext Markup Language',
        'b':'Cascading Style Sheet',
        'c':'Jason Object Notation',
        'd':'Helicopters TErminals Motorboats Lamborginis',
        "correct":'b'
    },
    {
        	
        'que':"Brass gets discoloured in air because of the presence of which of the following gases in air?",
         'a' : 'Oxygen',
         'b':	'Hydrogen sulphide',
	     'c' : 'Carbon dioxide',
	     'd': 'Nitrogen',
         'correct' :'b'
    }
    
]

let label = document.querySelectorAll("label")
let inputChecked = document.querySelectorAll("input")
const Box = document.querySelector(".box")
let index=0;
let right=0,wrong=0;

const loadQustion=()=>{
  document.getElementById("quesBox").innerText=`${index+1}) ${question[index].que}`
  label[0].innerText=`${question[index].a}`
  label[1].innerText=`${question[index].b}`
  label[2].innerText=`${question[index].c}`
  label[3].innerText=`${question[index].d}`
  
//   index++;
}

const answerChecked=(checkedValue)=>{
    if(checkedValue==question[index].correct){
        // console.log("right");
        right++;
    }else{
        wrong++;
    }
    index++;
}



const submitQuiz=()=>{
    inputChecked.forEach((item)=>{
        if(item.checked){
            return answerChecked(item.value);
        }
        // }else{
        //     return;
        // }
    })
}

 
document.querySelector(".btn").addEventListener('click',()=>{
  submitQuiz();
    if(index<question.length){
        loadQustion()
        inputChecked.forEach((item)=>{
            item.checked=false;
       })
    }else{
      Box.innerHTML=`<h2> you have correct ${right} out of ${question.length}</h2>
                     <h3> Thank you so much for the playing</h3>`
    }
})



loadQustion()