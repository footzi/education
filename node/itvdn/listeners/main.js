//получение списка всех обработчиков
let evt = require("events").EventEmitter;
let emitter = new evt;

emitter.on("click", function(){
	console.log("click 1")
})

emitter.on("click", function(){
	console.log("click 2")
})

//emitter.emit("click");

let arr=emitter.listeners("click");

//метод listeners возвращает массив обработчиков
//arr[i]()-т.к Элемент массива - функция то сразу происходит ее выполнения
for(let i=0; i<arr.length; i++) {
	arr[i]();
}