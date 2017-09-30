//метод call - вызов функции с явным указанием this

const user={
	name:"Vlad",
	sername:"Manakov",
	patronym:"Sergeevich"

}
const showName=function(){
	return "Имя: " + this.name + ", Фамилия:" +this.sername
}
console.log(showName.call(user))


const showFullName=function(first,second) {
	return "Привет! " + this[first] + " " + this[second]
}
console.log(showFullName.call(user,"name","sername"))
console.log(showFullName.call(user,"sername","patronym"))

//отдалживание метода с помощью call(записать аргументы функции в массив)
const arg = function(){
	let join=[].join;
	let funcArg=join.call(arguments,",")
	console.log(funcArg);
}
arg(1,2,3)


