//firebase import
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, get,update,set } from 'firebase/database';
import {  getFirebaseConfig } from './firebase-config';


const firebaseAppConfig = getFirebaseConfig();
const firebaseApp = initializeApp(firebaseAppConfig);

const db = getDatabase();

//barra de arriba

const events = document.getElementById("eventsTxt");
const newEvent = document.getElementById("newEventTxt");
const user = document.getElementById("user");

//user id 
const localstorage = window.localStorage;
var userid = localstorage.getItem('userID');


//navegación

function go2NewEvent(){
    window.location.assign("events.html")
}

function go2User(){
    window.location.assign("user.html")
}
events.addEventListener("click",go2NewEvent);
user.addEventListener("click",go2User);

//formulario

const eventname = document.getElementById("name");
const eventdate = document.getElementById("date");
const eventlocation = document.getElementById("location");
const eventpurpose = document.getElementById("purpose");
const eventgoals = document.getElementById("goals");
const eventcapacity = document.getElementById("capacity");
const eventpoints = document.getElementById("points");


const registerBtn = document.getElementById("registerBtn");





    


registerBtn.addEventListener("click",(e,ev)=>{
    if(eventname.value==""||eventdate.value==""||eventlocation.value==""||
    eventpurpose.value==""||eventgoals.value==""||eventcapacity.value==""||
    eventpoints.value==""){
        alert("Fill all the fields to continue");
        return;
    }
    let eventNew =  {
        name: eventname.value,
        date: eventdate.value,
        location: eventlocation.value,
        purpose: eventpurpose.value,
        goals: eventgoals.value,
        capacity: eventcapacity.value,
        attendants: 0,
        points: eventpoints.value,
        user: userid
    };

    const event2Add = ref(db,userid+"/myEvents/"+eventname.value)
    update(event2Add, eventNew);
    console.log(eventNew);
    crearQr(eventNew);

});
