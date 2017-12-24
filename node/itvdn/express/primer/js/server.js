let express = require("express");
let app = express();
let path = require("path");
let fs = require("fs");

let people = fs.readFileSync("data.json");
let log = "log.txt"

people = JSON.parse(people);

app.use("/", express.static(path.join(__dirname)))

app.post("/test", function(req, res) {
    req.on("data", function(arr) {
        people = JSON.parse(arr);

        fs.writeFile("data.json", JSON.stringify(people), function(err) {
            if (err) throw err;
            console.log("write data file");
        })
    })
    res.send(people);
})

app.post("/send", function(req, res) {
    req.on("data", function(chunk) {
        people.push(JSON.parse(chunk));

        fs.writeFile("data.json", JSON.stringify(people), function(err) {
            if (err) throw err;
            console.log("write data file");
        })

        let logger = "address: " + req.ip + " data: " + chunk + "\n";

        fs.appendFile(log, logger, function(err) {
            if (err) throw err;
            console.log("write log");
        })
    })
})

app.listen("8080", function() {
    console.log("server run")
});