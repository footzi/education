//добавление значений в массив через цикл
let journal = [];

function addEvent() {
    let add = { events: [] };
    for (i = 0; i < arguments.length; i++) {
        add.events.push(arguments[i]);
    }
    journal.push(add);
    console.log(journal)
}
//addEvent("1", "2", "30");


/*определение случайной точки в круге.
Происходит путем умножения случайного числа на П*2.
Координата "x" это радиус умноженный на косинус на этого числа. 
А "y" это радиус умноженный на синус этого числа.*/
function getPoint(radius) {
    let angle = Math.random() * Math.PI * 2;
    return {
        x: Math.round(radius * Math.cos(angle)),
        y: Math.round(radius * Math.sin(angle))
    };
}
//console.log(getPoint(125))


//Задание 1. Вернуть все числа между заданными в массив и ввывести их сумму.
//(самостоятельно на 90%.Не мог понять как работать с отрицательным шагом.)
const range = (start, end, step) => {
    if (step == undefined) {
        step = 1;
    }
    let result = [];
    if (step > 0) {
        for (var i = start; i <= end; i = i + step) {
            result.push(i);
        }
    } else {
        for (var i = start; i >= end; i = i + step) {
            result.push(i);
        }
    }
    return result;
}
const sum = (result) => {
    let total = 0;
    for (var i = 0; i < result.length; i++) {
        total = total + result[i];
    }
    return total;
};
//console.log(range(5,2,-1));
//console.log(sum(range(5,2,-1)));

//Задание 2.1 Вернуть значение масива в обратном порядке, используя новый массив.
//(Самостоятельно на 100%)
const reverseArray = (data) => {
        let newArray = [];
        for (i = 0; i < data.length; i++) {
            newAaaaarray.unshift(data[i]);
        }
        return newArray;
    }
    //console.log(reverseArray(["A","B","C"]))

var array = [1, 2, 3, 4, 5];

//Задание 2.2 Вернуть значение масива в обратном порядке, используя тот же массив.
//(Самостоятельно на 0%)
function reverseArrayInPlace(array) {
    for (var i = 0; i < Math.floor(array.length / 2); i++) {
        var old = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = old;
    }
    return array;
}
reverseArrayInPlace(array);
//console.log(array);

//Задание 3.1. Построить список используя в качестве аргумента массив.
//cамостоятельно на 50%;
const arrayToList = (array)=>{
    let list=null;
    for (i=array.length-1;i>=0;i--) {
        list={name:array[i], link:list}
    }
    return list;
}
//console.log(arrayToList(["Vlad", "Anna"]));

//Задание 3.2 Вернуть массив из списка предыдущей функции
//самостоятельно на 20%
const listToArray = (list)=>{
    let arr=[];
    for(i=list;i;i=i.link) {
        arr.push(i.name)
    }
    return arr;
}
//console.log(listToArray(arrayToList(["Vlad", "Anna"])));

//Задание 3.3 Добавить полученный элемент к существуюшему списку
//самостоятельно на 100%
const prepend = (value,list)=>{
    let result={};
    return result={value:value, rest:list}
}
//console.log(prepend(10,prepend(20,null)));

//Задание 3.4 Функция принимает список и число, и должна вернуть Элемент под заданным номером
//Не доделано
const nth=(list,n)=>{
    return list.name
}
//console.log(nth(arrayToList([10,20,30]),1));

//Задание 4. Написать функцию котораяя сравнивает два значения и выдает true если Эти два значения одинаковы,
//либо если Эти значния объекты их значения свойств одинаковы.

const obj={name:"Vlad",female:"Manakov"};
const deepEqual=(a,b)=>{
    if(a===b) {
        return true
    } 
    if((typeof a=="object")||(typeof b=="object")) {
        return false
    }
    // let propsInA=0;
    // for(var i in a) {
    //     propsInA=propsInA+1;
    // }
    // console.log(propsInA);
}
//console.log(deepEqual(obj,obj));
//console.log(deepEqual(obj,{name:"Manakov",female:"Vladislav"}));
console.log(deepEqual(obj,{name:"Vlad",female:"Manakov"}));