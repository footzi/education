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
            newArray.unshift(data[i]);
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

var test = [2, 3, 4, 5];

//Задание 3.1. Построить список используя в качестве аргумента массив.
//cамостоятельно на 50%;
const arrayToList = (array) => {
    let list = null;
    console.log("len" + array.length)
    for (var i = array.length - 1; i >= 0; i--) { //обход массива в обратную сторону
        console.log(array[i]);
        list = { value: array[i], rest: list };
    }
    return list

}
console.log(arrayToList([10, 20]))