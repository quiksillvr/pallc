var GALLERY = function() {
	
	function TBD() {

	}
	
return {
	
	init:function(){
		//$("#center-div").empty();
		$("#center-div").load('html/home.html', function() {
			console.log("gallery - start");
			
			$(".nav_div").removeClass("nav_selected");
			$("#nav_div_gallery").addClass("nav_selected").fadeIn();
			$("#home_content").hide();
			$("#gallery_content").hide().fadeIn(1000);			
			
			console.log("gallery - end");			
		});
	
}}}();