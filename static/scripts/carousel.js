
$(document).ready(function(){
	var timer;//will be interval timer
	var transition_time = 1000; // 1 second
	var time_between_slides = 4000; // 4 seconds
	var counter = 1; //use to set slide ids
	var numslides = $("div.carousel__items div.carousel__item").length; //count the number of slides
	var current = $("div.carousel__item[aria-hidden='false']");
	$('#focuspoint').text("Showing Slide "+counter+" of "+numslides);
	autoPlay = "off";

	//Add ids to all carousel items
	$("div.carousel__items div.carousel__item").each(function (){
		$(this).attr("id","slide"+counter);
		$(this).attr("data-slidenumber",counter);
		counter++;
		});

	$(window).on('load', function(){
		$("div.carousel__item").first().attr("aria-hidden","false");
		if(autoPlay == "on"){
			if(!timer){
				timer=setInterval(function(){shownext(numslides);},time_between_slides); // every 4 secs next slide
			}
		}
	});

// add keyboard accessibility for all buttons, enter makes it click...
				  $("button").keypress(function(ev) {
					if (ev.which ==13)  {
						 $(this).click();
						  ev.preventDefault();
						  return (false);
						 }
				  });

  $("button#next").click(function(){
		$('#focuspoint').focus();
		shownext(numslides);
  });

    $("button#prev").click(function(){
		$('#focuspoint').focus();
		showprevious(numslides);
  });


$("#pause").click(function(ev){
	timer= window.clearInterval(timer);
	autoPlay = "off";
	return (false);
});

$('#carousel, .carousel__items div.carousel__item').hover(function(ev) {
	timer=window.clearInterval(timer);

	return (false);
},
function(){
	if(autoPlay == "on"){
		var hasfocus  = $("#carousel").children().has(":focus").length
		if(!timer && !hasfocus){
		timer=window.setInterval(function(){shownext(numslides);},time_between_slides);
		}
	}
	return (false);
});

$('#carousel').focusin(function(ev) {
	timer=window.clearInterval(timer);

	return (false);
});

$('#carousel').focusout(function(ev) {
	if(autoPlay == "on"){
		if(!timer){
		timer=window.setInterval(function(){shownext(numslides);},time_between_slides);
		}
	}
	return (false);
});


});

//Function to show the next slide
function shownext(numslides){
	var current = $("div.carousel__item[aria-hidden='false']");
	var next = current.next("div");
	if(next.length)
	{
		current = next;
		$(current).attr("aria-hidden","false");
		$(current).removeClass("hidden");
		$(current).siblings("div.carousel__item").attr("aria-hidden","true");
		$(current).siblings("div.carousel__item").addClass("hidden");
	}
	else
	{
		current = $("div.carousel__items div.carousel__item:first");
		$(current).attr("aria-hidden","false");
		$(current).removeClass("hidden");
		$(current).siblings("div.carousel__item").attr("aria-hidden","true");
		$(current).siblings("div.carousel__item").addClass("hidden");
	}
	$('#focuspoint').text("Showing Slide "+current.attr('data-slidenumber')+" of "+numslides);
}

//Function to show the previous slide
function showprevious(numslides){
	var current = $("div.carousel__item[aria-hidden='false']");
	var previous = current.prev("div.carousel__item");
	if(previous.length)
	{
		current = previous;
		$(current).attr("aria-hidden","false");
		$(current).removeClass("hidden");
		$(current).siblings("div.carousel__item").attr("aria-hidden","true");
		$(current).siblings("div.carousel__item").addClass("hidden");
	}
	else
	{
		current = $("div.carousel__items div.carousel__item:last");
		$(current).attr("aria-hidden","false");
		$(current).removeClass("hidden");
		$(current).siblings("div.carousel__item").attr("aria-hidden","true");
		$(current).siblings("div.carousel__item").addClass("hidden");
	}
	$('#focuspoint').text("Showing Slide "+current.attr('data-slidenumber')+" of "+numslides);

}
