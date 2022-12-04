const starClick = document.querySelectorAll(".fa-star");
const ratingContainer= document.querySelector(".rating-container")
const emojiContainer= document.querySelector(".emoji-container")
const emohiChange= document.querySelectorAll(".far")
// let number=0;
const colorsImoji=["red","orange","lightblue","lightgreen","green"]
     emohiChange[0].style.color="red";
// let counter=0;
// colorsImoji.forEach((item)=>{
//     console.log(item)
// })

starClick.forEach((star,index)=>{
    star.addEventListener("click",()=>{
        colorStar(index+1)
    })
})

// ratingContainer.addEventListener("click",(e)=>{
//     if(e.target.classList.contains("one")){
//         colorStar(1)
//         // emojiChange(0);
//     } 
//     if(e.target.classList.contains("two")){
//         colorStar(2)
//         // emojiChange(1);
        
//     } 
//     if(e.target.classList.contains("three")){
//         colorStar(3)
//         // emojiChange(2);

//     } 
//     if(e.target.classList.contains("four")){
//         colorStar(4)
//         // emojiChange(3);

//     } 
//     if(e.target.classList.contains("five")){
//         colorStar(5)
//         // emojiChange(4);

//     } 
// })

const colorStar = (num)=>{
    // if(num>number){
        starClick.forEach((star,index)=>{
            if(index<num){
                star.classList.add("active")
            }else{
                star.classList.remove("active")
            }
            // emojiChange();
            // counter++;
        })
    // }else{
        // starClick.forEach((star,index)=>{
            //   if(index>=num){
                // counter--;
                // emojiChange()
            //   }
        // })
    // }
    // number=num;
    emojiChange(num-1)
}


const emojiChange=(num)=>{
    
    emohiChange.forEach((emoji)=>{
            emoji.style.transform=`translateX(-${num*100}%)`
            emoji.style.color=colorsImoji[num]
        })

}
// const disColorStar = (num)=>{}
// colorStar(num)

//  starClick.addEventListener("click",(e)=>{
//     console.log(e.target)
//  })