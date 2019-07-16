const EventsEmitter = require("events");
const emitter = new  EventEmitter();
emitter.on("FILE_IS_READING", function () {
    console.log("L'événement FILE_IS_READING a été détecté!");
});

emitter.emit("FILE_IS_READING");

console.log(new Date(1983,4,2));