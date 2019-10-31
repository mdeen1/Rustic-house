$(document).ready(function(){

	/*menu bar and cross function*/

	$("#menu-icon").click(function(){
		$("#nav-bar-slide").addClass("show");
		$("#nav-bar-slide").removeClass("hide");
		$("#menu-icon").removeClass("display");
		$("#menu-icon").addClass("remove");
		$("#cross-icon").removeClass("remove");
		$("#cross-icon").addClass("display");
	});

	$("#cross-icon").click(function(){
		$("#nav-bar-slide").addClass("hide");
		$("#nav-bar-slide").removeClass("show");
		$("#cross-icon").removeClass("display");
		$("#cross-icon").addClass("remove");
		$("#menu-icon").removeClass("remove");
		$("#menu-icon").addClass("display");
	});


	/*menu listing functioning*/

	$("#beers").click(function(){
		$(".menu-opt").addClass("selected");
		$("#cocktails").removeClass("selected");
		$("#vino").removeClass("selected");
		$("#burgers").removeClass("selected");

		$(".beers").addClass("show");
		$(".beers").removeClass("hide");

		$(".burgers").addClass("hide");
		$(".burgers").removeClass("show");

		$(".vino").addClass("hide");
		$(".vino").removeClass("show");

		$(".cocktails").addClass("hide");
		$(".cocktails").removeClass("show");
	});

	$("#vino").click(function(){
		$(".menu-opt").addClass("selected");
		$("#cocktails").removeClass("selected");
		$("#beers").removeClass("selected");
		$("#burgers").removeClass("selected");

		$(".vino").addClass("show");
		$(".vino").removeClass("hide");

		$(".burgers").addClass("hide");
		$(".burgers").removeClass("show");

		$(".beers").addClass("hide");
		$(".beers").removeClass("show");

		$(".cocktails").addClass("hide");
		$(".cocktails").removeClass("show");
	});

	$("#cocktails").click(function(){
		$(".menu-opt").addClass("selected");
		$("#beers").removeClass("selected");
		$("#vino").removeClass("selected");
		$("#burgers").removeClass("selected");

		$(".cocktails").addClass("show");
		$(".cocktails").removeClass("hide");

		$(".beers").addClass("hide");
		$(".beers").removeClass("show");

		$(".vino").addClass("hide");
		$(".vino").removeClass("show");

		$(".burgers").addClass("hide");
		$(".burgers").removeClass("show");
	});

	$("#burgers").click(function(){
		$(".menu-opt").addClass("selected");
		$("#cocktails").removeClass("selected");
		$("#vino").removeClass("selected");
		$("#beers").removeClass("selected");

		$(".burgers").addClass("show");
		$(".burgers").removeClass("hide");

		$(".beers").addClass("hide");
		$(".beers").removeClass("show");

		$(".vino").addClass("hide");
		$(".vino").removeClass("show");

		$(".cocktails").addClass("hide");
		$(".cocktails").removeClass("show");
	});


});

function initMap(){
	var location = {lat: 51.513171, lng: -0.137846};
	var map = new google.maps.Map(document.getElementById("map"),{
		zoom: 12,
		center: location,
	});
	var marker = new google.maps.Marker({
		position: location,
		map: map
	});
};
