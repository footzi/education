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


//Упражнение 1. Вернуть все числа между заданными в массив и ввывести их сумму.
//(самостоятельно на 90%.Не мог понять как работать с отрицательным шагом.)
const range=(start, end, step) => {
    if (step==undefined) {
        step=1;
    }
    let result = [];
    if(step>0) {
        for (var i = start; i <= end; i=i+step) {
            result.push(i);
        }
    } else {
        for (var i = start; i >= end; i=i+step) {
            result.push(i);
        }
    }
    return result;
}
const sum = (result) => {
    let total=0;
    for (var i=0; i<result.length; i++) {
        total=total+result[i];
    }
    return total;
};
//console.log(range(5,2,-1));
//console.log(sum(range(5,2,-1)));

//
const reverseArray = (data)=>{
    let newArray=[];
    for(i=0; i<data.length;i++) {
        newArray.unshift(data[i]);
    }
    return newArray;
}
//console.log(reverseArray(["A","B","C"]))


const reverseArrayInPlace = (array)=>{
    array=['jhhg']
    return array;
}
let array = ["X", "Y", "Z"];
reverseArrayInPlace(array);
console.log(array);