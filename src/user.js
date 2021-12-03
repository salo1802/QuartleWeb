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

//impoprtacion firebase y de user
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, get } from 'firebase/database';
import {  getFirebaseConfig } from './firebase-config';
import { Event } from './eventClass';

const firebaseAppConfig = getFirebaseConfig();
const firebaseApp = initializeApp(firebaseAppConfig);

const db = getDatabase();
const localstorage = window.localStorage;
var userid = localstorage.getItem('id');

