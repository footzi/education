let evt = require("events");

let emitter = new evt.EventEmitter;

//создание функции счетчика. При каждом вызове count + 1
let count = 0;

const enter = ()=>{
    count = count + 1;
    console.log("вывод равен = " + count);
}

//добавляем слушатель события run, при выполнении события запуститься функция enter
emitter.on("run",enter);

emitter.addListener("run",enter) //тоже самое что и on

emitter.once("run",enter)//добавляет обработчик всего 1 раз

//выполняем событие
emitter.emit("run")
emitter.emit("run")