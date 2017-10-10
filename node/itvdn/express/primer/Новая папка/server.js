let express=require("express");
let app = express();
let path = require("path");
let fs = require("fs");

let people=[
	{ firstname:"Vlad", secondname:"Manakov", age:"27" },
	{ firstname:"Anna", secondname:"Agafonova",age:"22"},
	{ firstname:"Alex", secondname:"Kakahin", age:"35" }
];
let log="log.txt"

app.use("/", express.static(path.join(__dirname)))

app.post("/test", function(req,res){
	req.on("data", function(arr){
		people=JSON.parse([arr.toString()]);
	})
	res.send(JSON.stringify(people));; //конвертируем массив в jsonа а на клиенте конвертируем обратно
})

app.post("/send", function(req,res){
	req.on("data", function(chunk){
		people.push(JSON.parse([chunk.toString()]));
		let logger="address: " + req.ip + " data: " + chunk + "\n";
		fs.appendFile(log,logger,function(){
			console.log("write log");
		})
	})
})


app.listen("8080", function(){
	console.log("server run")
});
