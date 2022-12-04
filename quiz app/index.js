const questions=[
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
    }
    
]


let index = 0;
let total = questions.length;
let right =0, wrong=0;
const question = document.getElementById("quesBox")
const optionInputs=document.querySelectorAll(".option");
// console.log(input[0])
const loadQustion =()=>{
    if(index == total){
        return endQuiz();
    }
    reset();
      const data = questions[index];
      question.innerText = `${index+1}) ${data.que}`;
      optionInputs[0].nextElementSibling.innerText=data.a;
      optionInputs[1].nextElementSibling.innerText=data.b;
      optionInputs[2].nextElementSibling.innerText=data.c;
      optionInputs[3].nextElementSibling.innerText=data.d;
}



const submitQuiz =()=>{
    const data = questions[index]
    const ans =getAnswer();
    // console.log(ans, data.correct)
    if(ans == data.correct){
        right++
    }else{wrong++;}
    
    index++;
    loadQustion();
    return;
}

const getAnswer= ()=>{
    let answer;
    optionInputs.forEach((input)=>{
        if(input.checked){
            answer=input.value
        }
    })
    return answer;
}


const reset=()=>{
    optionInputs.forEach((input)=>{
        input.checked=false;
    })
}


const endQuiz=()=>{
    document.getElementById("box").innerHTML=`
    <div style="text-align:center">
    <h3>Thank you for playing the Quiz </h3>
    <h2> ${right} out of ${total} are correct </h2>
    </div>
    `
}

//initial call
loadQustion();
