//impoprtacion firebase y de user
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, get } from 'firebase/database';
import {  getFirebaseConfig } from './firebase-config';
import { Event } from './eventClass';

const firebaseAppConfig = getFirebaseConfig();
const firebaseApp = initializeApp(firebaseAppConfig);

const db = getDatabase();
const localstorage = window.localStorage;
var userid = localstorage.getItem('userID');
const cont = document.getElementById('listaEvents')
//barra de arriba

const events = document.getElementById("eventsTxt");
const newEvent = document.getElementById("newEventTxt");
const user = document.getElementById("user");

//navegación

function go2Events(){
    window.location.assign("events.html")
}

function go2NewEvent(){
    window.location.assign("newEvent.html")
}
events.addEventListener("click",go2Events);
newEvent.addEventListener("click",go2NewEvent);

//contenido abajo 
    const username = document.getElementById("username");
    const usermail = document.getElementById("usermail");
    const userpoints = document.getElementById("userpoints")

function createEvents(){
    
    const eventosRef = ref(db,  userid + '/'+"myEvents");
    console.log(userid);
 
    onValue(eventosRef,(snapshot)=>{
        
        const datos = snapshot.val();
        
        
        
        loadUserinfo();
        addEvent(datos);
    });
}
function loadUserinfo(){

    const userRef = ref(db,  userid);

    onValue(userRef,(snapshot)=>{

      const  datosuser = snapshot.val()
          

                username.innerHTML= datosuser.username
                usermail.innerHTML = datosuser.email;
                userpoints.innerHTML = datosuser.points + " points";

            
         
            
        });
    
}

function addEvent(datos){
    if(datos){
        cont.innerHTML = "";
        const title = document.createElement('h1');
        title.innerHTML = "Events created";
        cont.appendChild(title);
        Object.keys(datos).forEach((k,i) => {
            console.log(k);
            const eventoRef = ref(db,  userid +"/myEvents/"+ k);
        onValue(eventoRef,(snapshot)=>{
        const event = new Event(snapshot.val());
        cont.appendChild(event.render());
           
            console.log("evento:"+ event.name)})
           

        });
    }
}

createEvents();