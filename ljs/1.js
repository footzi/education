//Методы объектов и контекст вызова

//метод у объекта
const user={
    name:"Влад",
    sayHi:function() {
        console.log(this.name+" Привет!")
    }
}
user.sayHi();

user.sayGoodbay=function() { //объявление метода используя явное присваивание
    console.log("Пока, "+this.name)
}
user.sayGoodbay()

//передача ссылки на объект
user.show=function() {
    showName(this)
}
function showName(nameObj) {
    console.log("Меня зовут "+nameObj.name)
}
user.show()


//создание объекта через конструктор

function People(name,female){
    this.name=name
    this.female=female
    this.show=function() {
        console.log("Фамилия: " + this.female + " и имя: " + this.name)
    }
}
let people=new People("Vlad", "Manakov")
people.show()

//пример 2

const Friend = function(mood) {
    this.mood=mood;
    if(mood=="nice") {
        this.talk=function(){
            console.log("Привет, у меня хорошее настроение")
        }
    }
    else if(mood="bad") {
        this.talk=function() {
            console.log("Иди в баню")
        }
        
    } else {
        this.talk=function() {
            console.log("О чем ты?")
        }
    }
}
let david = new Friend("bad")
david.talk()

//пример с треугольником
const Rectangle=function(w,h){
    //cвойства:
    this.w=w;
    this.h=h;
    //метод:
    this.getArea=function(){
        return this.w*this.h
    };
}
let rec=new Rectangle(10,20);
console.log("площадь прямоугольника = " + rec.getArea())
