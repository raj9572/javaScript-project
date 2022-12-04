const slides = document.querySelectorAll(".slide")
let counter=0;

slides.forEach((slide,index)=>{
    slide.style.left=`${index*100}%`
})

const slideImage=()=>{
      slides.forEach((slide)=>{
        slide.style.transform=`translateX(-${counter*100}%)`
      })

    }
      


const goNext=()=>{
    // console.log(counter)
    if(counter< slides.length-1){
        counter++;
        slideImage();
    }
    return;
}
const goPrev=()=>{
    // console.log(counter)
    if(counter>=1){
        counter--;
        slideImage();
    }
    return;
}



