//подключение модуля event
let evt = require("events");

// все обЪекты которые генерируют события должны быть экземплярами класса EventEmmiter
let emitter = new evt.EventEmitter()

//на объекте emitter устанавливается обработчик "create"
emitter.on("create",function(){
    console.log("Была создана папка")
})

//метод emit предназначен для генерации событий на которые он установлен
emitter.emit("create")