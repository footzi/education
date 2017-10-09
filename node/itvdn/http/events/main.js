let http=require("http");

//request - запрос от клиента. response -ответ от сервера.
let server=http.createServer(function(request,response){

	//метод writeHead позыоляет записать в ответ загрловки и статус код
	response.writeHead(200,{"Content-Type":"text/plain"})

	//метод write позволяет создать ответ в виде потока
	response.write("hello!")

	//завершает конфигурацию ответа и отправляет его
	response.end()

	//объект request выводится при обращению к серверу(отправки запроса)
	console.log(request.httpVersion, request.method, request.statusCode, request.statusMessage, request.url)

	//headers- объект который содержит заголовки
	for(let key in request.headers) {
		console.log(key+":"+request.headers[key])
	}
})

server.listen(8080, function(){
	console.log("server running on port 8080")
}) 