//добавляем событие спереди
let evt = require("events").EventEmitter;

let emitter = new evt;

emitter.addListener("click", ()=>{
    console.log("click 1")
})

emitter.prependListener("click", ()=>{
    console.log("click 2")
})

emitter.emit("click")