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






let index=0;
let right=0,wrong=0;
let total=question.length;
let quesBox = document.getElementById("quesBox")
let optionInputs = document.querySelectorAll(".option")
//   console.log(quesBox)


let loadQustion =()=>{
    if(total == index){
        endQuiz()
        return
    }
    const data=question[index]
     reset();
      quesBox.innerHTML=`${index+1}) ${data.que}`; 
      optionInputs[0].nextElementSibling.innerText=data.a    
      optionInputs[1].nextElementSibling.innerText=data.b    
      optionInputs[2].nextElementSibling.innerText=data.c    
      optionInputs[3].nextElementSibling.innerText=data.d    
}


const submitQuiz=()=>{
    const ans = getAnswer()
    const data=question[index]
    if(ans === data.correct){
        right++
    }else{
        wrong++
    }
    index++;
    loadQustion()
}


const getAnswer=()=>{
    let answer;
    optionInputs.forEach((input)=>{
        if(input.checked){
            answer = input.value;
            return
        }
    })
    return answer;
}

function reset(){
    optionInputs.forEach((input)=>{
        input.checked=false;
    })
}

function endQuiz(){
    document.querySelector(".box").innerHTML=`
    <div style="text-align:center">
    <h3> Thank for your submission</h3>
    <h2> ${right} out of ${total} are correct </h2>
    </div>
    `
    
}


// initial call
loadQustion();
