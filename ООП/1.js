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
    this.width=w;
    this.height=h;
    //метод:
    this.getArea=function(){
        return this.width*this.height
    };
}

let rec=new Rectangle(10,20);
let rec2=new Rectangle(30,40)

//создание метода с помощью прототипа
Rectangle.prototype.getSum=function(){
    return this.width+this.height
}
//добавление свойствв в прототип
Rectangle.prototype.name="Rectangle"

//использование глобального метода toString (возвращает объект в виде строки)
Rectangle.prototype.toString=function() {
    return "ширина= " + this.width + ", высота= " + this.height;
}

//использование метода valueOf (при вызове rec или rec2 - вызовется явно указанный метод valueOf, если его нет то вызывается метод toString)
Rectangle.prototype.valueOf=function(){
    return this.getArea();
}
console.log(" c методом valueOf выводится сразу площадь " + rec)
console.log(" c методом valueOf выводится сразу площадь (тоже самое) " + rec.valueOf())



console.log("площадь прямоугольника " + rec.name + "  = " + rec.getArea() + ", сумма сторон = " + rec.getSum())
console.log(rec2.toString())

//Задача из ljs. Напишите функцию-конструктор Accumulator(startingValue) . Объекты, которые она создает, должны хранить текущую сумму и прибавлять к ней то, что вводит посетитель.
const Accum=function(startValue){
    this.value=startValue;
    this.read=function(number){
        console.log(this.value=this.value+number);
    }

}
const accum=new Accum(1);
accum.read(5)//прибавляет к нач значению
accum.read(10)
console.log(accum.value)//выводит тек значение

//задача 2.Напишите конструктор Calculator, который создаёт расширяемые объекты-калькуляторы.

const Calculator=function() {
    let method={};
    this.calculate=function(str){
        let first=Number(str[0]);
        let oper=str[2]
        let second=Number(str[4]);
    }
    this.addMethod=function(name,func) {
        method[name]=func;
    }
    console.log(method)
}
const calc = new Calculator;

calc.addMethod("*", function(a, b) {   return a * b; });
//console.log(calc.calculate("3 - 2"))


//Дескрипторы. Сетторы и гетторы

let user1={};
user1.name="Vlad"//простое присваивание
user1.female="";
Object.defineProperty(user1,"female",{
    value:"Anna",
    writable:false,//запрет на удаление
    configurable:false//запрет на изменение
        })//присваевание с помощью дескриптора
console.log(user1)

//геттеры и сеттеры
let user2={
    firstName:"Vlad",
    secondName:"Manakov"
}
Object.defineProperty(user2,"fullName",{
    get:function(){ //свойство работает как функция
        return this.firstName+" "+this.secondName
    },
    set:function(str) {
        let split=str.split(" ");//функция меняет значения
        this.firstName=split[0];
        this.lastName=split[1];
    }
})
console.log(user2.fullName) //свойство работает как функция

user2.fullName="Anna Agafonova"
console.log(user2.firstName+" "+user2.lastName)


//Задача
const UserTask=function(fullName){
    this.fullName=fullName;
    this.split=this.fullName.split(" ");
    
}

const userTask=new UserTask("Vlad Agafonov");
Object.defineProperties(userTask, {
    firstName: {
        get: function() {
            return this.split[0];
        },
        set: function(newFirstName) {
            this.fullName=newFirstName+" "+this.lastName;
        }
    },
    lastName: {
        get: function() {
            return  this.split[1];
        },
        set: function(newLastName) {
            this.fullName=this.firstName+" "+newLastName
        }
    }
})
userTask.firstName="Anna"
userTask.lastName="Manakova"
console.log(userTask.fullName)//видимо нет записи в сами свойства first и lastname


//bind-жесткое привязывание this.

const people1={
    name:"Alex",
    sayHi:function(){
        return "Hello "+this.name
    }
}
const greet=function(){
    let h=
    console.log(h)
}
greet()