const qrFormEl = document.querySelector("#qrForm")
const qrImageEl=document.querySelector("#qrImage")
const qrContainerEl=document.querySelector("#qrContainer")
const qrInputTextEl=document.querySelector("#qrInputText")
const generateBtn=document.querySelector("#generate-btn")


const randerQRCode = (url)=>{
    if(!url) return;
    generateBtn.innerText="Generating QR Code....";
   qrImageEl.src=url;
   
   const onImageLoad = ()=>{
    const interval = setTimeout(() => {
        qrContainerEl.classList.add("show")
        clearTimeout(interval);
        generateBtn.innerText="Generating QR Code"
    }, 500);
  }
    
   qrImageEl.addEventListener("load",onImageLoad)
}




qrFormEl.addEventListener("submit",(e)=>{
    e.preventDefault();
    const formData = new FormData(qrFormEl)
    const text = formData.get("qrText")
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;
    randerQRCode(qrCodeUrl)
})



qrInputTextEl.addEventListener("keyup",(e)=>{
    console.log("hello")
    if(!qrInputTextEl.value.trim()){
        qrContainerEl.classList.remove("show")
    }
})