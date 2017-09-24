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
//передача с помощью this ссылки на объект
let user={
	name:"Vladislav",
	sayHi:function(){
		showName(this)
	}
};
const showName=(nameObj)=>console.log(nameObj.name);
user.sayHi();

//this(контекст вызова) функции известен только в момент вызова.
let user1={name:"Vladislav"};
let admin={name:"Alex"};
function func(){
	console.log(this.name)
}
user1.a=func
admin.b=func
user1.a();
admin.b();

// const happy=(str)=>{

// 	let left=String(str).substring(0,3);
// 	let right=String(str).substring(3,6);
// 	let leftS=0;
// 	let rightS=0;
// 	for (let i=0; i<left.length; i++) {
// 		leftS=leftS+Number(left[i]);
// 	}
// 	for (let i=0; i<right.length; i++) {
// 		rightS=rightS+Number(right[i]);
// 	}
// 	if(leftS==rightS) {
// 		return true
// 	} else return false
// }
//console.log(happy("054702"));
