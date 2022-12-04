
const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "0123456789"
const symbolSet = "!@#$%^&*()/"


const textArea = document.getElementById("text-content")
// const totalChar = document.getElementById("total-char")
const upperInput = document.getElementById("upper-case")
const lowerInput = document.getElementById("lower-case")
const numberInput = document.getElementById("numbers")
const symbolInput = document.getElementById("symbols")

const getRandomData = (dataSet) => {
  return dataSet[Math.floor(Math.random() * dataSet.length)]
}

const strongGeneratePassword = (password = "") => {
  if (upperInput.checked) {
    password += getRandomData(upperSet)
  }
  if (lowerInput.checked) {
    password += getRandomData(lowerSet)
  }
  // if (numberInput.checked) {
  //   password += getRandomData(numberSet)
  // console.log("hello")
  // }
  // if(symbolInput.checked){
  //     password += getRandomData(symbolSet)
  // }

  if (password.length < 10) {
    return strongGeneratePassword(password)
  }
  //  console.log(truncateString(password),10)
  textArea.value = truncateString(password, 10);
}



const dangerGeneratePassword = (password ="") => {
 
  if (upperInput.checked) {
    password += getRandomData(upperSet)
  }
  if(symbolInput.checked){
    password += getRandomData(symbolSet)
  }
  if (lowerInput.checked) {
    password += getRandomData(lowerSet)
  }
  if (numberInput.checked) {
    password += getRandomData(numberSet)
    // console.log("hello")
  }

  if (password.length < 10) {
    return dangerGeneratePassword(password)
  }
  textArea.value = truncateString(password, 10);
}


const weakGeneratePassword = () => {
  const name = ["sameer","harry", "carry", "perry", "sorry", "dairy", "milky", "strong", "weak", "pajama", "kaja", "khana","hasnain","rohan","pari","gobhi","anda","danda","girlfriend","boyfriend"]
  textArea.value = name[Math.floor(Math.random() * name.length)]
}


document.getElementById("strBtn").addEventListener('click', () => {
  strongGeneratePassword()
})
document.getElementById("danBtn").addEventListener('click', () => {
  dangerGeneratePassword()
})
document.getElementById("weakBtn").addEventListener('click', () => {
  console.log('hello world')
  weakGeneratePassword()
})

function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num);
  } else {
    return str;
  }
}
// console.log(generatePassword(upperSet))

// document.getElementById("btn").addEventListener('focusout', ()=>{
//     window.location.reload();
// })


// window.location.reload();
// window.location.href="www.google.com"




// i have make this project using helping the other source..is there any problem if i take helps other source to improve myself....

// but i learned many things to make this project..

// thanks harry bhai

