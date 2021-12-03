

//barra de arriba

const events = document.getElementById("eventsTxt");
const newEvent = document.getElementById("newEventTxt");
const user = document.getElementById("user");

//navegación

function go2NewEvent(){
    window.location.assign("newEvent.html")
}

function go2User(){
    window.location.assign("user.html")
}
newEvent.addEventListener("click",go2NewEvent);
user.addEventListener("click",go2User);