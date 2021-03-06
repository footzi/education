//сброс действия по умолчанию
$(".btn-1").on("click", function(e) {
	e.preventDefault
})

//this указывает на именно то по котоному произошло событие
$(".link").on("click", function(){
	alert($(this))
})

//прелоадер

$(window).ready(function(){
	var imgs=[];
	$("*").each(function(){
		var img=$(this).is("img");
		if (img) {
			var src=$(this).attr("src")
			if (src) {
				imgs.push(src)
			}
		}
		var percents=1;
		for (var i=0; i<imgs.length;i++) {
			var image=$("<img>",{
				attr:{
					src:imgs[i]
				}
			})

			image.load(function(){
				set(imgs.length, percents);
				percents++;
			})
		}

		function set (total, current){
			var percent=current/total*100;

			if (percent>=100) {
				$(".images").show()
			}

			$(".loader-bar").css({
				"width":percent+"%"
			}).text(percent+"%");
			
		}
	})	
})

//слайдер
var counter = 1;
$(".slider-controls-next").on("click", function(e){
	e.preventDefault();

	var slider = $(".slider")
	var item = $(".slider-item")
	var active = $(".slider-item.active")

	if (counter>=item.length) {
		counter = 0;
	}

	var reqItem=item.eq(counter)

	active.animate({
		"top":"100%"
	},300)

	reqItem.animate({
		"top":"0"
	},300, function(){
		active.removeClass("active").css("top","-100%");
		$(this).addClass("active");
	})

	counter++
	
})
