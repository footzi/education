function f1(a,b,c) {
	return a*b+c
}
console.log("f1=", f1(5,10,15))

function f2(a,b,c) {
	console.log("f2=", (a*b+c)/(a+b))
}
f2(3,5,8)
f2(199,255,987)


/***** Аргументы ******/
function f3() {
	console.log("f3=", arguments) //arguments - объект(почти массив) переданных аргументов
	console.log("f3=", arguments[3]) //вызов четвертого аргумента
	console.log("f3=", arguments.length) //количество агрументов
	for(var i=1; i < arguments.length; i++) {// вывод каждого аргумента
		console.log("f3-аргументы=", arguments[i]) 
	}

	var sum=0; // вывод cуммы аргументов
	for(var i=1; i < arguments.length; i++) {
		sum = sum + arguments[i] 
	}
	console.log("f3-сумма=", sum)

}
f3(10,15,20,25)

/***** Задачка на сортировку ******/
function f4(source, number) {
	var newarr = [];  //создаем массив результатов
	for(var i=1; i<source.length; i++) {
		if (source[i]>number) { //перебираем кажлый зл и вномис его в массив рез
			newarr.push(source[i])
		}
	}  
	return newarr;
}
var arr = [1,2,3,4,5,6,7,8,9]
console.log("f4-сорт=", f4(arr,5)) 

/***** Передача функции в функцию пример замыкание ******/
function f5(source, fn) {
	var newarr = [];
	for (var i=1; i<source.length; i++) {
		if (fn(source[i])==true) {
			newarr.push(source[i])
		}
	}
	return newarr;
}

function fn(then) {
	return function(value) {
		return value > then;
	}
}
var arr = [1,2,3,4,5,6,7,8,9]
console.log("f5-замык=", f5(arr, fn(8)))

/***** Возврат функцией в функцию ******/
var a = 1;
function f6 (b){
	var c = 5;
	function f61() {
		var d = 10;
		return a*b*c*d
	}
	return f61
}
console.log("f6-возр=", f6(2)())

/***** объявлние и вызов анонимной функции ******/
// (function(a,b){
// 	console.log("f7-анонм=", a+b)
// }(5,10))