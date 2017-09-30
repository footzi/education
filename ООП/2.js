//инкапсуляция--сокрытие данных и реализаций

const Incaps = function() {
	const privateMethod=function(text){
		console.log(text+"Приватный/скрытый метод")
	}
	this.publicMethod=function(){
		console.log("Публичный метод")
		let text="Запуск скрытого метода= ";
		privateMethod(text);
	}
}

let inc = new Incaps;
inc.publicMethod();
//inc.privateMethod(); ошибка



//наследование

//базовая функция конструктор
const Human=function(name){
	this.name=name;
	this.talk=function(){
		console.log("Этого человека звать: "+this.name)
	}
}

//объекты которые будут наследовать свойства базовой.
const Worker=function(name){
	this.name=name;
	this.work="Microsoft"
}

const Student=function(name){
	this.name=name;
	this.work="LevelUp"
}

//создаем родительский экземпляр
let human=new Human;

//наследуем свойства от human

Student.prototype=human;
Worker.prototype=human

let alex=new Student("Alex");
alex.talk()

