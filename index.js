const EventsEmitter = require("events");
const emitter = new  EventEmitter();
emitter.on("FILE_IS_READING", function () {
    console.log("L'�v�nement FILE_IS_READING a �t� d�tect�!");
});

emitter.emit("FILE_IS_READING");

console.log(new Date(1983,4,2));