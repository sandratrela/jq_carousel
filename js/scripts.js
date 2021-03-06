$(function() {
	var carouselList = $("#carousel ul");

	var slidesInterval = setInterval(changeSlides, 2000);

	function changeSlides() {
		carouselList.animate({
			'marginLeft': '-400px'
		}, 500, moveFirstSlide);
	}
	
	function moveFirstSlide() {
		var firstItem = carouselList.find("li:first"),
			lastItem = carouselList.find("li:last");

		lastItem.after(firstItem);
		carouselList.css({'marginLeft': 0});
	};

	carouselList.mouseover(function() {
		clearInterval(slidesInterval);
	});
	carouselList.mouseout(function() {
  		slidesInterval = setInterval(changeSlides, 2000);
 	});

	var prev = $("prev");
	var next = $("next");

	$prev.on('click', changePrev);
	$next.on('click', changeNext);

});