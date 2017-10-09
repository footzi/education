let http=require("http");

//request - запрос от клиента. response -ответ от сервера.
let server=http.createServer(function(request,response){
	//возвращает массив с загаловками
	//console.log(request.rawHeaders); // выведет при запуске сервера

	//в ответ записывает в указанный заголовок значение
	response.setHeader("content-type", "text/vlad")

	//получаем указанный заголовок
	let title=response.getHeader("content-type");
	console.log(title);

	response.end("<h1>First</h1>")
}).listen(8080)