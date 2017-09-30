let xhr = new XMLHttpRequest();//инициализация объекта

xhr.open("GET","header.html",false); //конфигурация запрос get на файл

xhr.send() //непосрелственно отправка запроса

//document.write(xhr.responseText)
if (xhr.status != 200) {     alert( xhr.status + ': ' + xhr.statusText ); 
	} else {     alert( xhr.responseText )


