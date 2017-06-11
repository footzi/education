var jsonData = {
	"name":"Vlad",
	"secondName":"Manakov",
	"age":28,
	"maried":false
}
console.log("чистый json=", jsonData)
console.log("преобразованный=", JSON.stringify(jsonData))

var arr=[];
var results = JSON.stringify(jsonData) //преобразованый записываем в переменную
console.log("преобразованный обратно=", JSON.parse(results)) //преобразуем обратно

console.log("key and value=", JSON.parse(results, function(key, value){ //получаем key и value и кладем в массив
	console.log(key, value)
	arr.push(value);
	return arr
}))

var z = JSON.parse(results, function(key, value){
			if (key==="name") {
				return "Vladislav"
			}
			if (key==="maried") {
				return true
			}
			return value
		})
console.log("замена", z)

console.log("вывод отпределенного ключа", JSON.stringify(jsonData, ['name']))

//////////////////////////////////////

var c1=$.Deferred() //ожидание выполнения
var c2=$.Deferred()

$(".c1").slideUp(2000, c1.resolve) //показывает что делать в результате выполнения
$(".c2").fadeOut(1500, c2.resolve)

c1.done(function(){					
	$(".c1-show").show()
})
c2.done(function(){
	$(".c2-show").show()
})

$.when(c1,c2).done(function(){
	$(".all-show").show()
})