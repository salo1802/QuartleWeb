const firebaseConfig = {
    apiKey: "AIzaSyCmT0hAjgjLuO1-ptK-ebDUGk0NWQXK7Ak",
    authDomain: "quartle.firebaseapp.com",
    databaseURL: "https://quartle-default-rtdb.firebaseio.com",
    projectId: "quartle",
    storageBucket: "quartle.appspot.com",
    messagingSenderId: "147245827450",
    appId: "1:147245827450:web:58493d1eed9bea190182c3"
};

export function getFirebaseConfig(){
    if(!firebaseConfig || ! firebaseConfig.apiKey){
        throw new Error("Firebase configuration error");
    } else {
        return firebaseConfig;
    }
}