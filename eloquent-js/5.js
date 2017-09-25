let rabbit={};
rabbit.speak=(line)=>{
	console.log("Кролик говорит: "+line);
}
rabbit.speak("Привет!");

// const speak=(line)=>{
// 	console.log("A "+this.type+" кролик говорит: "+line)
// }
function speak(line) {
	console.log("A "+this.type+" кролик говорит: "+line)	
}
let whiteRabbit={type:"Белый",speak:speak};
let fatRabbit={type:"Толстый",speak:speak};
whiteRabbit.speak("Привет как дела?");

let protoRabbis={
	speak:function(line){
		console.log(this.type+" кролик говорит: "+line);
	}
}
let killerRabbits=Object.create(protoRabbis);
killerRabbits.type="Убийственный"
killerRabbits.speak("хрясь!!!")

function Rabbits(type){
	this.type=type;
}
let blackRabbit=new Rabbits("black");
console.log(blackRabbit.type)

console.log("////////////////////////////////////")



