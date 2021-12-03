import { initializeApp } from 'firebase/app';
import {getAuth, signInWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth';
import {  getFirebaseConfig } from './firebase-config';

const firebaseConf = getFirebaseConfig();
const app = initializeApp(firebaseConf);
const auth = getAuth();

var user= document.getElementById('usermail');
var password = document.getElementById('password');
const logBtn = document.getElementById('logBtn');
var userID = "";
const localstorage = window.localStorage;

logBtn.addEventListener("click",function(){
    signInWithEmailAndPassword(auth, user.value, password.value)
    .then((userCredentials)=>{
       userID= user.value;
       console.log(userID);
        localstorage.setItem('id', userID);
       window.location.href="events.html";
    })
    .catch((error)=>{
        console.log(error.message);
        alert("Correo o contraseña invalidos")

    });
 
});
/*
onAuthStateChanged(auth, (user_account)=>{
    if(user_account){
        window.location.href="index.html";   
    }
});*/