
//go to top 
document.querySelector("#click-to-top").onclick = function(){
    document.querySelector("body").scrollIntoView();
}

//type submit function
const sendMessage = document.getElementById("sendMessage")
let requiridElements = document.querySelectorAll("form *[required]")

sendMessage.addEventListener("submit", (e)=>{
    e.preventDefault()
    document.getElementById("messageSuccess").classList.remove("display-none")
    for (let index = 0; index < requiridElements.length; index++) {
        requiridElements[index].value = ""
    }
    setTimeout(() => {    
        document.getElementById("messageSuccess").classList.add("display-none")
    }, 2500);
})
