//возведение в степень через функцию
function getPower(number, power) {
	var result=1;
	for(var n=0;n<power;n++) {
		result *=number;
	}
	return result;
}
//console.log(getPower(2,10));

//пейзаж (примеп передачи локальной переменной)
function landscape(){
	var result="";
	function land(width){
		result=result+"_";
		for (var n=0; n<width; n++) {
			result=result+"_"
		}
	}
	function mountain(height) {
		result=result+"/";
		for (var n=0; n<height; n++) {
			result=result+"'";
		}
		result=result+"\\";
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
		return number*power
	}
}
var pult = go(5);
//console.log(pult(2));

//возведение в степень с помощью рекрусии
function getPowerRec(number, power) {
	if (power==1) {
		return number
	} else {
		return number*getPowerRec(number, power-1);
	}
}
console.log(getPowerRec(3,3));