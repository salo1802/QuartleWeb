import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, set, onValue, get } from 'firebase/database';
import { getFirebaseConfig } from './firebase-config';

//Inicializar firebase
const firebaseAppConfig = getFirebaseConfig();
const firebaseApp = initializeApp(firebaseAppConfig);

//Elements
const candidateID = document.getElementById("idCandidate");
const candidateName = document.getElementById("nameCandidate");
const registerBtn = document.getElementById("registerBtn");
const seeCandidatesBtn = document.getElementById("seeCandidateBtn");
const voteID = document.getElementById("idVote");
const voteBtn = document.getElementById("voteBtn");
const seeVoteBtn = document.getElementById("seeVoteBtn");

let votesList = [];
let candidatesList = [];

//Adding objects to firebase
function registerCandidate(candidate){
    //Get database
    const database = getDatabase();
    const newCandidateRef = push(ref(database, 'candidates'));
    //Add candidate
    set(newCandidateRef, candidate);
}

function registerVote(vote){
    //Get database
    const database = getDatabase();
    const newVoteRef = push(ref(database, 'votes'));
    //Add vote
    set(newVoteRef, vote);
}

//Get the candidates with every update on the firebase
const getCandidates = (e, event) => {
    //Get database
    const database = getDatabase();
    const newCandidateRef = ref(database, 'candidates');

    //Get the candidates from the firebase
    onValue(newCandidateRef, (snapshot)=>{
        const data = snapshot.val();
        updateCandidates(data);
    });
}

//Organize the variable that shows the list in the alert
function updateCandidates(data){
    let list = "";
    Object.keys(data).forEach((key, index)=>{
        list += data[key].id + " " + data[key].name + "\n";
        candidatesList.push(data[key]);
    });
    alert(list);
}

//Get the candidates with every update on the firebase
const getVotes = (e, event) => {
    //Get database
    const database = getDatabase();
    const newVoteRef = ref(database, 'votes');
    const candidateRef = ref(database, 'candidates');

    //Get the votes from the firebase
    onValue(newVoteRef, (snapshot)=>{
        const dataVotes = snapshot.val();
        const total = Object.keys(dataVotes).length;
        console.log(dataVotes);
        console.log(candidatesList);

        //Get candidates from firebase
        get(candidateRef).then((snapshot)=>{
            const dataCan =  snapshot.val();

            //Go through list of candidates
            let finalVotes = "";
            Object.keys(dataCan).forEach((key, index)=>{
                let votesCandidate = 0;
                Object.keys(dataVotes).forEach((keyV, indexV)=>{
                    if (dataVotes[keyV].id === dataCan[key].id){
                        votesCandidate++;
                    }
                });
                //Create alert with vote porcentage
                let candidatePercent = votesCandidate/total * 100;
                finalVotes+=(dataCan[key].name + " - " + candidatePercent + "%" + "\n");
                
            });
            alert(finalVotes);
        });
    });
}

//Method to add candidate to an object
const registerEvent = (e, event) => {
    //Create object candidate
    const candidate = {
        id: candidateID.value,
        name: candidateName.value
    }
    registerCandidate(candidate);
}

//Method to add vote to an object
const voteEvent = (e, event) => {
    //Create object vote
    const vote = {
        id: voteID.value
    }
    registerVote(vote);
}

//BUTTONS
//Register button to create candidate
registerBtn.addEventListener("click", registerEvent);
//Vote button to create vote
voteBtn.addEventListener("click", voteEvent);
//See candidates list button
seeCandidatesBtn.addEventListener("click", getCandidates);
//See number of votes
seeVoteBtn.addEventListener("click", getVotes);
