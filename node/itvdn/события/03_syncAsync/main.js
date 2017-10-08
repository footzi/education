//все события выполняются синхронно
let evt = require("events").EventEmitter; //тоже самое что и в первых примерах

let emitter = new evt; //создаем объект с помощью конструктора evt

emitter.on("click", function(){
    console.log("click №1")
})

emitter.on("click", function(){
    setImmediate(function(){    //асинхронное выполнение - было отложенно до момента выполнения остальных событий
        console.log("click №2")
    })
})

emitter.on("click", function(){
    console.log("click №3")
})

emitter.emit("click");