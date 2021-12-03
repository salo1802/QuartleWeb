const firebaseConfig = {
    apiKey: "AIzaSyD2NCb3ren0ZUB-YQ-kOcc2XKQL3Caf3R0",
  authDomain: "eco-actividad10.firebaseapp.com",
  databaseURL: "https://eco-actividad10-default-rtdb.firebaseio.com",
  projectId: "eco-actividad10",
  storageBucket: "eco-actividad10.appspot.com",
  messagingSenderId: "402032649270",
  appId: "1:402032649270:web:d073835a30d590ebc62497"
};

export function getFirebaseConfig(){
    if(!firebaseConfig || ! firebaseConfig.apiKey){
        throw new Error("Firebase configuration error");
    } else {
        return firebaseConfig;
    }
}