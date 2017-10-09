let evt = require("events").EventEmitter;
let emitter = new evt;

//передача параметров
emitter.on("click",function(a,b){
	console.log(a+b)
})
emitter.emit("click",5,10)