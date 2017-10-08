let evt = require("events").EventEmitter;

let emitter = new evt;

const test = ()=>{
    console.log("add listener")
}

//вешаем событие click
emitter.on("click", test);
console.log("complite click")

//выполняем событие
emitter.emit("click");

//удаляем событие
emitter.removeListener("click",test);
console.log("delete listener")

//выполняем событие
emitter.emit("click", test); //не выполнится 
