var HOME = function() {
	function TBD() {

	}
	
return {
	
	init:function(){
		$("#center-div").load('html/home.html', function() {
			console.log("home - start");
			
			$(".nav_div").removeClass("nav_selected");
			$("#nav_div_home").addClass("nav_selected").fadeIn();
			$("#gallery_content").hide();
			$(".home-quote-container").hide();
			$("#home_content").hide().fadeIn(1000);	
			$("#quote1").show('slide',{direction:'left'},1000);
			$("#quote2").delay( 400 ).show('slide',{direction:'left'},1000);
			$("#quote3").delay( 800 ).show('slide',{direction:'left'},1000);
			
			console.log("home - end");				
		});
	
}}}();