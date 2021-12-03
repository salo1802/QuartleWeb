


export class Event{
    constructor(event){
        this.event = event
       
        console.log("entro el constructor")}

render(){
    let eventConteiner = document.createElement('div');
    eventConteiner.className = "eventConteiner";

    let textleft = document.createElement('div');
    textleft.className = "textleft";

    let eventName = document.createElement('p');
    eventName.className = "eventname";
    eventName.innerHTML = this.event.name;

    let eventDate = document.createElement('p');
    eventDate.className = "eventinfo";
    eventDate.innerHTML = this.event.date;

    let eventLocation = document.createElement('p');
    eventLocation.className = "eventinfo";
    eventLocation.innerHTML = this.event.location;

    let eventCapacity = document.createElement('p');
    eventCapacity.className = "eventinfo";
    eventCapacity.innerHTML = this.event.attendants + "/" + this.event.capacity + "Attendants";

    let eventsPoints = document.createElement('p');
    eventsPoints.className = "points";
    eventsPoints.innerHTML = this.event.points + " Points"

    textleft.appendChild(eventName);
    textleft.appendChild(eventDate);
    textleft.appendChild(eventLocation);
    textleft.appendChild(eventCapacity);

    eventConteiner.appendChild(textleft);
    eventConteiner.appendChild(eventsPoints);

    return eventConteiner;
}




}