let express=require("express");
let app = express();
let path = require("path");
let fs = require("fs");

let people=fs.readFileSync("data.json");
people=JSON.parse(people);

let log="log.txt"

app.use("/", express.static(path.join(__dirname)))

app.post("/test", function(req,res){
	req.on("data", function(arr){
		people=JSON.parse(arr);
		console.log(people);
		fs.writeFile("data.json",JSON.stringify(people),function(err) {
			if (err) throw err;
			console.log("write data file");
		})
	})
	//res.send(JSON.stringify(people));; //конвертируем массив в jsonа а на клиенте конвертируем обратно
	res.send(people);
})

app.post("/send", function(req,res){
	req.on("data", function(chunk){
		people.push(JSON.parse(chunk));
		fs.writeFile("data.json",JSON.stringify(people),function(err) {
			if (err) throw err;
			console.log("write data file");
		})

		let logger="address: " + req.ip + " data: " + chunk + "\n";
		fs.appendFile(log,logger,function(err){
			if (err) throw err;
			console.log("write log");
		})
	})
})


app.listen("8080", function(){
	console.log("server run")
});
