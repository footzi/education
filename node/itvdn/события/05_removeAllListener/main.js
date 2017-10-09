let evt = require("events").EventEmitter;

let emitter = new evt;

emitter.on("click", ()=>{
    console.log("click 1")
})

emitter.on("click", ()=>{
    console.log("click 2")
})

emitter.on("click", ()=>{
    console.log("click 3")
})

//удаляем все обработчики
emitter.removeAllListeners("click");
emitter.emit("click")