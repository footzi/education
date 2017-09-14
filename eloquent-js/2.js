//возведение в степень через функцию
function getPower(number, power) {
    var result = 1;
    for (var n = 0; n < power; n++) {
        result *= number;
    }
    return result;
}
//console.log(getPower(2,10));


//пейзаж (пример работы с локальной переменной)
function landscape() {
    var result = "";

    function land(width) {
        result = result + "_";
        for (var n = 0; n < width; n++) {
            result = result + "_"
        }
    }

    function mountain(height) {
        result = result + "/";
        for (var n = 0; n < height; n++) {
            result = result + "'";
        }
        result = result + "\\";
    }
    land(2);
    mountain(5);
    land(3);
    mountain(2);
    land(1);
    return result
}
//console.log(landscape());


//пример замыкания
function go(power) {
    return function(number) {
        return number * power
    }
}
var pult = go(5);
//console.log(pult(2));


//возведение в степень с помощью рекрусии
function getPowerRec(number, power) {
    if (power == 1) {
        return number
    } else {
        return number * getPowerRec(number, power - 1);
    }
}
//console.log(getPowerRec(3, 3));


//поиск последовательности сложений и умножений. (умножаем на 5, прибавляем 3)
function findSequence(target) {
    function find(start, history) {
        if (start == target) {
            return history;
        } else if (start > target) {
            return null;
        } else {
            return find(start * 5, "(" + history + "*5)") || find(start + 3, "(" + history + "+3)")
        }
    }
    return find(1, "1");
}
//console.log(findSequence(28));


//пример с фермой. 1 вариант
function farm(pig, cow) {
    var pigString = String(pig);
    while (pigString.length < 5) {
        pigString = 0 + pigString;
    };
    //console.log(pigString+" свиней");
    var cowString = String(cow);
    while (cowString.length < 5) {
        cowString = 0 + cowString;
    };
    //console.log(cowString+" коров");

}
farm(278, 35);

//Второй вариант
function addZero(number) {
    var numberString = String(number);
    while (numberString.length < 5) {
        numberString = 0 + numberString;
    }
    return numberString;
}

function farmInventory(pig, cow, chiken) {
    //console.log(addZero(pig)+" хрюш");
    //console.log(addZero(cow)+" бурёнок");
    //console.log(addZero(chiken)+" курочек");
}
farmInventory(180, 78, 555);


//Задача 1.Найти миниум.
//(Самостоятельнр на 100%.)
function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}
//console.log(min(1883,564));


//Задание 2. Определение четности/нечетности числа с помощью рекрусии
//(Самостоятельно на 60%.)
function isEven(n) {
    if (n == 0) {
        return true
    } else if (n == 1) {
        return false
    } else {
        return isEven(n - 2);
    }
}
//console.log(isEven(1023));


//Задание 3. Расчет количества определенной буквы в строке
//(Самостоятельно на 100%)
function countChar(data, symbol) {
    var result = 0;
    for (var n = 0; n < data.length; n++) {
        if (data.charAt(n) == symbol) {
            result++
        }
    }
    return result;
}
//console.log(countChar("VlVVVkjhgfgu ViuyyyyV", "V"));


//не доделано
function sum(n) {
    var result
    if (n == 1) {
        return n
    } else {
        return n*sum(n - 1)
    }
}
console.log(sum(1));