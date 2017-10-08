let evt = require("events").EventEmitter;
let emitter = new evt;

//функция срабатывает при добавлении нового события
emitter.on("newListener",function(event,listener){
	if(event=="click") {
		console.log("new listener")
	}
})

emitter.on("click",test)
emitter.emit("click")

console.log("Кол-во обркботчиков на 'click'= "+emitter.listenerCount("click"))
function test (){
	console.log("test")
} 