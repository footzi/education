let http=require("http");
let fs=require("fs");
let url=require("url");
let path=require("path");

//данные которые передаются клиенту по запросу на кнопку
let person=[
	{
		firstname:"Vlad", secondname:"Manakov", age:"27"
	},
	{
		firstname:"Anna", secondname:"Agafonova", age:"22"
	}
]

let server = http.createServer(function(req,res){
	if(req.url=="/") { //проверка на путь с которого уходит запрос
		let indexHtml = path.join(__dirname, "index.html") //записываем в переменную путь к файлу индекс
		fs.readFile(indexHtml, function(err,data) {

			if(err) {
				console.log(err) //выводит ошибку
			} else {
				res.write(data) //чтение файла в поток
			}
		
		res.end();	//вывод результата
		})
	} else if(req.url=="/person") {
		req.on("person", function() {
			console.log("ok")
			res.wrireHead(200,{"Content-Type":"application/json"})
			res.write(person);
			res.end();	
		})
		
	}

});

server.listen(8080, ()=>{
	console.log("server running")
})