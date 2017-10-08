//получение тек папки и название файла
console.log("путь= "+__dirname);
console.log("файл= "+__filename)

//модуль path дает право работы с путями файлов и директории
let path = require("path");

//basename - получение полного имени файла с расширением
let filename = path.basename(__filename);
console.log("текущий файл: "+filename);

//resolve - преобразование относительного пути в абсолютный
console.log(path.resolve("./main.js"))

//extname - возвращает расширение файла
let extension = path.extname(__filename);
console.log("расширение тек файла: "+extension)
