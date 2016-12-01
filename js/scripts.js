$(function() {
	var carouselList = $("#carousel ul");

	var slidesInterval = setInterval(changeSlides, 3000);

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
		setInterval(changeSlides, 3000);
	});


	//var prev = $("prev");
	//var next = $("next");

	//prev.click()
	//next.click()
});