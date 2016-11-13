var resp = "-";
var last_five = [0,0,0,0,0];
$(document).ready(function() {
	$.getJSON("resources/js/json/phrases.json", function(json) {
		resp = json;
		$(".panel-body").hide();
		random_phrase();
	});

});

function random_phrase() {
	var i = Math.floor((Math.random() * 25) + 1);
	if(last_five.indexOf(i) !== -1){
		random_phrase();
	}else{
		last_five.shift();
		last_five.push(i);
		$(".panel-body").fadeOut(1000, "linear", function() {
			$(".panel-body").attr("class", "panel-body " + random_color());
			$("p + h3").text(resp[i].phrase);
			$("cite").text(resp[i].author);
			$("cite").attr("title", resp[i].author);
			$("img").attr("src", "resources/img/"+resp[i].photo);
			$("#shareOnTwitter").attr("href", 
					"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=\""+resp[i].phrase+"\" "+resp[i].author+" ");
		});
		$(".panel-body").fadeIn(1000);
	}
}

function random_color() {
	var x = Math.floor((Math.random() * 4) + 0);
	var arr = [ "bg-danger", "bg-success", "bg-warning", "bg-info", "" ];
	return arr[x];
}