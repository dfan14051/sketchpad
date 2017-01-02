$(document).ready(function(){
	makeTable(16);
});

function makeTable(sideLen){
	var row = "<div class='row'></div>";
	var $container = $(".container");
	for(var i = 0; i < sideLen; i++){
		$container.append(row);	
	}
	var $rows = $(".row");
	for(var i = 0; i < sideLen; i++){
		$rows.append("<div class='square'></div>");
	}
	var $squares = $(".square");
	$squares.css("height", dimensionCalc(sideLen));
	$squares.css("width", dimensionCalc(sideLen));
	$squares.mouseenter(function(){
		$(this).addClass("black");
	});
}

function dimensionCalc(sideLen){
	return 550/(sideLen);
}

function newTable(){
	clearTable();
	var tableSize = prompt("Please enter a new table size (default is 16)", "16");
	makeTable(tableSize);
}

function clearTable(){
	$(".container").empty();
}
