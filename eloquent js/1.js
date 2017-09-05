//возведение в степень
var result = 1;
for (var counter = 0; counter < 10; counter++) {
    result = result * 2;
    //console.log(result);
}

//задача 1. Вывод решеток.
var sharp = "#";
for (var counter = 0; counter < 7; counter++) {
    sharp = sharp + "#";
    //console.log(sharp);
}

//задача 2. FizzBuzz
for (var counter = 1; counter <= 100; counter++) {
    var number = "";
    if (counter % 3 == 0) {
        number += "Fizz";
    }
    if (counter % 5 == 0) {
        number += "Buzz";
    }
    //console.log(number || counter);
}

//задача 3. Шахматная доска
var size = 8;

var board = "";

for (var y = 0; y < size; y++) {
    for (var x = 0; x < size; x++) {
        if ((x + y) % 2 == 0)
            board += " ";
        else
            board += "#";
    }
    board += "\n";
}

console.log(board);