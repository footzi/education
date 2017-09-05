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
        number = number + "Fizz";
    }
    if (counter % 5 == 0) {
        number = number + "Buzz";
    }
    //console.log(number || counter);
}

//задача 3. Шахматная доска (1 решение)
var board="";
for (var n=0; n<8; n++) {
    for (var s=0; s<8; s++) {
        if ((n+s)%2==0) {
            board=board+"#";
        } else {
            board=board+" ";
        }
    }
    board=board+"\n"
}
//console.log(board);

//задача 3. Шахматная доска (2 решение)
for (i=0; i<4; i++) {
    var line1="";
    var line2="";
    for (n=0; n<4; n++) {
     line1+="#"+" ";
     line2+=" "+"#";
    }
    console.log(line1);
    console.log(line2);    
}

