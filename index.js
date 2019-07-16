const EventsEmitter = require("events");
const emitter = new  EventsEmitter();

const months = ["Janvier","Février","Mars","Avril","Mai","Juin", "Juillet", "Août","Septembre", "Octobre", "Novembre", "Décembre"];

emitter.on("date", function (date) {
    console.log("Date: %d %s %d", date.getDate(),months[date.getMonth()], date.getFullYear());
});

emitter.emit("date", new Date(1983,4,2));
console.log(new Date(1983,4,2));

emitter.emit("date", new Date());
console.log(new Date());