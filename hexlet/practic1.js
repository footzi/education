//Функция меняет регистр в строке на противоположный
const invertCase=(str)=>{
	let stroke="";
	for(let i=0;i<str.length;i++) {
		if(str[i]>"Z")
			stroke=stroke+str[i].toUpperCase()
		else {
			stroke=stroke+str[i].toLowerCase()
		}
	}
	return stroke

}
//console.log(invertCase("hEllO cAt")); 


//Функция проверяет является ли номер билета счастливым (666666=666=666)
const isHappyTicket =(str)=>{
	let string=String(str);
	let left=0, right=0;
	for (let i=0; i<string.length;i++){
		if(i<3) {
			left=left+Number(string[i]);
		} else {
			right=right+Number(string[i])
		}
	}
	if(left==right){
		return true
	} else return false
}
//console.log(isHappyTicket(054702));


//Функция проверяет является ли число "идеальным"(6=1+2+3)
const isPerfect=(num)=>{
	let result=0;
	for(let i=1; i<num; i++) {
		if(num%i==0) {
			result=result+i;
		}
	}
	if(result==num) {
		return true 
	}
	else return false
} 
//console.log(isPerfect(496));


//Функция возвращает строку задом на перед
const reverce=(str)=>{
	let result="";
	for(let i=0;i<str.length;i++) {
		result=str[i]+result
	}
	return result
}
//console.log(reverce("hello, i am cat"));

//не доделанное решение с помощью итерративного процесса
const testik=(str)=>{
	let string="";
	let leng=str.length;
	const t=(str,a,z)=>{
		string=str.substring(z,a);

		if(string.length==str.length){
			return string
		} else {
			return t(str,a-1,z-1);
		}
	}
	return t(str,leng,leng)

}
//testik("hello")
//console.log(testik("hello"))


const sumSquare=(n)=>{
	let a=0;
	let s=0;
	const ab=(n)=>{
		for(let i=1; i<=n; i++){
			s=s+i*i
		}
		return s
	}
	return ab(n);
}
console.log(sumSquare(10))