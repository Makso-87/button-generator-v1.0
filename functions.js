/*Объявляем локальные переменные*/ 
var padding_vertical;
var padding_horizontal;
var font_s;
var font_fam;
var border_width;
var sh_x;
var sh_y;
var sh_blur;
var sh_strach;
var rad;
var tsh_x;
var tsh_y;
var tsh_blur;
var text_shadow_color;
/*Функция устанавливает цвет текста кнопки*/
function button(){
	$("a.custom").css({"color":font_color});
}
/*Функция устанавливает цвет фона кнопки*/
function backgroundColor(){
	$("a.custom").css({"background-color": bg_color});
}
/*Функция устанавливает рамку кнопки*/
function border(){
	var bord =  document.getElementById("1");
	/*Проверяем стоит ли флажок "Рамка*/
	if(bord.checked) {
		$("a.custom").css({"border": border_width + "px solid " + border_color});
		$("span#prop_1").text(border_width + " px");
		var el = $("<span id='sp1'>border: " + border_width + "px solid " + border_color + ";<br></span>");
		el.appendTo("p.source");
	}
	else 
		{
			$("a.custom").css({"border":"none"});
			$("span#prop_1").empty();
		}
}
/*Функция устанавливает тень кнопки*/
function shadow(){
	var bord =  document.getElementById("2");
	/*Проверяем стоит ли флажок "Тень"*/
	if(bord.checked) {
		$("a.custom").css({"box-shadow":sh_x + "px "+ sh_y + "px " + sh_blur + "px " + sh_strach+"px "+shadow_color});
		$("span#prop_2").text(sh_x +" px");
		$("span#prop_3").text(sh_y +" px");
		$("span#prop_4").text(sh_blur +" px");
		$("span#prop_5").text(sh_strach +" px");
		var el = $("<span id='sp2'>box-shadow: " + sh_x + "px "+ sh_y + "px " + sh_blur + "px " + sh_strach +"px " + shadow_color + ";<br></span>");
		el.appendTo("p.source");
	}
	else {
		$("a.custom").css({"box-shadow":"none"});
		$("span#prop_2").empty();
		$("span#prop_3").empty();
		$("span#prop_4").empty();
		$("span#prop_5").empty();
	}
}
/*Функция устанавливает тень кнопки*/
function textShadow(){
	var bord =  document.getElementById("4");
	/*Проверяем стоит ли флажок "Тень текста*/
	if(bord.checked) {
		$("a.custom").css({"text-shadow": tsh_x + "px "+ tsh_y + "px " + tsh_blur + "px " + text_shadow_color});
		$("span#text_1").text(tsh_x +" px");
		$("span#text_2").text(tsh_y +" px");
		$("span#text_3").text(tsh_blur +" px");
		var el = $("<span id='sp3'>text-shadow: " + tsh_x + "px "+ tsh_y + "px " + tsh_blur + "px " + text_shadow_color + ";<br></span>");
		el.appendTo("p.source");
	}
	else {
		$("a.custom").css({"text-shadow":"none"});
		$("span#text_1").empty();
		$("span#text_2").empty();
		$("span#text_3").empty();
	}
}
/*Функция устанавливает ширину и высоту кнопки*/
function dimentionButton(){
	$("a.custom").css({"padding": height + "px " + width + "px" });
	var w = $("a").width();
	var h = $("a").height();
	$("span#main_1").text(w +" px");
	$("span#main_2").text(h +" px");
}
/*Функция устанавливает скругление углов кнопки*/
function radius(){
	var bord =  document.getElementById("3");
	/*Проверяем стоит ли флажок "Скругление углов*/
	if(bord.checked) {
		$("a.custom").css({"border-radius": rad + "px "});
		$("span#main_3").text(rad +" px");
		var el = $("<span id='sp4'>border-radius: " + rad + "px;<br></span>");
		el.appendTo("p.source");
	}
	else {
		$("a.custom").css({"border-radius":"0px"});
		$("span:nth-child(16)").empty();
	}
}
/*Функция выводит готовый код кнопки в окно для копирования пользователем*/
function output(){
			$("p.source").html(
				" a {<br>"+
					"	color: " + font_color + ";" + "<br>" +
					"   background-color: " + bg_color + ";" + "<br>" +
					"   padding: " + height +"px " + width + "px;<br>" +
					"   text-decoration: none;<br>" +
					"   font-size: 1.3em;<br>" +
					"   font-family: Helvetica;<br>"
				);
		}
/*Данная вызывает функции установки параметров при именении любого значения любого элемента формы*/
function change(){
	font_color = $("input[name='font']").val();
	bg_color = $("input[name='bg']").val();
	border_color = $("input[name='border_color']").val();
	shadow_color = $("input[name='shadow_color']").val();
	border_width = $("input[name='brd_width']").val();
	sh_x = $("input[name='sh_x']").val();
	sh_y = $("input[name='sh_y']").val();
	sh_blur = $("input[name='sh_blur']").val();
	sh_strach = $("input[name='sh_strach']").val();
	rad = $("input[name='rad']").val();
	tsh_x = $("input[name='tsh_x']").val();
	tsh_y = $("input[name='tsh_y']").val();
	tsh_blur = $("input[name='tsh_blur']").val();
	text_shadow_color = $("input[name='text_shadow_color']").val();
	width = $("input[name='width']").val();
	height = $("input[name='height']").val();
	output();
	button();
	backgroundColor();
	border();
	shadow();
	radius();
	textShadow();
	dimentionButton();
}

function clipBoard(){
	/*нашли наш контейнер*/
	var cont = document.getElementById('container'); 
	/*производим его выделение*/
	var range = document.createRange();
	range.selectNode(cont); 
	window.getSelection().addRange(range); 
	/*пытаемся скопировать текст в буфер обмена*/
	try { 
	    document.execCommand('copy'); 
	    var parent = document.getElementById('cont_right');
	    var el;
	    var chil = parent.childNodes;
	    /*Проверяем есть ли уже элемент span*/
	    if(chil.length < 1) {
	 	el = $("<span></span>");
	  	el.appendTo(parent);
	  }
	  el.empty();
	  el.text("Код успешно скопирован!");
	  el.css({"position":"relative", "top":"10px", "opacity":"0","border":"0 solid","padding":"10px 20px","border-radius":"20px"});
	  el.animate({opacity: 1, top: 0, borderWidth: "1px"}, 250);
	} catch(err) { 
	  console.log('Can`t copy, boss'); 
	} 
	/*очистим выделение текста, чтобы пользователь "не парился"*/
	window.getSelection().removeAllRanges();
}

