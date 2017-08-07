 //работа с аргументами.
 function openarg() {

 }
 function arg () {
 		var val1 = document.querySelector(".arguments #input1").value,
 			val2 = document.querySelector(".arguments #input2").value,
 			val3 = document.querySelector(".arguments #input3").value,
 			inputs=document.querySelectorAll(".arguments input"),
 			arr=[];

 		//перебор введеных значение	
 		for(var i=0; i<inputs.length; i++) {
 			if(inputs[i].value!=="") {
 				arr[i]=inputs[i].value;	
 			}
 		}

 		//вызов функий взависимрсти от кол-ва аргументов
 		switch(arr.length) {
 			case 0:
 				argrun();
 				break;
 			case 1:
 				argrun(val1);
 				break;
 			case 2:
 				argrun(val1, val2);
 				break;
 			case 3:
 				argrun(val1, val2, val3);
 				break;
 		}
 		function argrun () {
 			var sum=0;
 			for (var i=0; i<arguments.length; i++) {
 				sum=sum+parseInt(arguments[i]);
 			}
 			document.querySelector(".arguments #output1").innerHTML=arguments.length;
 			document.querySelector(".arguments #output2").innerHTML=sum;
 		}
 }

 //работа с рекурсией
 // функция возведения числа в степень

 function rec() {
 	var val1=document.querySelector(".rec #input1").value,
 		val2=document.querySelector(".rec #input2").value,
 		result=document.querySelector(".rec #output1");
 	if ((val1 && val2)!="") {
 		var pow=function (val1, val2) {
	 		if (val2 != 1) {
	 			return val1*pow(val1, val2-1);
	 		} else {
	 			return val1;
	 		}
 		}
 		result.innerHTML=pow(val1,val2);
 	} else {
 		result.innerHTML="ошибка";
 	}
 	
 }
 //функция подсчета суммы чисел до заданного
 function rec2() {
 	var val1=parseInt(document.querySelector(".rec #input3").value),
 		result=document.querySelector(".rec #output2");
 		var a = function(val1) {
 			if(val1 !== 1 ) {
 				return val1+a(val1-1) 
 			} else {
 				return 1 ;
 			}
 		}
 		result.innerHTML=a(val1);
 	}

 //Функция расчета факториала числа
function rec3() {
	var val1=parseInt(document.querySelector(".rec #input4").value),
 		result=document.querySelector(".rec #output3");
 		var b=function  (val1) {
 			if (val1 !=1) {
 				return val1*b(val1-1)
 			} else {
 				return 1;
 			}
 		}
 		result.innerHTML=b(val1);
}