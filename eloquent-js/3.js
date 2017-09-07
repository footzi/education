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
function range(start, end) {
    var result = [];
    for (i = 0; i < arguments.length; i++) {
        result.push(start++)

    }
    console.log(result)
}
range(2, 10)