import { initializeApp } from 'firebase/app';
import {getAuth, signInWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth';
import {  getFirebaseConfig } from './firebase-config';

const firebaseConf = getFirebaseConfig();
const app = initializeApp(firebaseConf);
const auth = getAuth();

var usermail= document.getElementById('usermail');
var password = document.getElementById('password');
const logBtn = document.getElementById('logBtn');
var userID = "";
const localstorage = window.localStorage;

logBtn.addEventListener("click",function(){
    signInWithEmailAndPassword(auth, usermail.value, password.value)
    .then((userCredentials)=>{
       
       window.location.href="events.html";
    })
    .catch((error)=>{
        console.log(error.message);
        alert("Incorrect email or password")

    });
 
});

onAuthStateChanged(auth, (user_account)=>{
    if(user_account){
        userID= user_account.uid;
        userID.replace(".","");
        console.log(userID);
         localstorage.setItem('userID', userID);
        window.location.href="events.html";   
    }
});