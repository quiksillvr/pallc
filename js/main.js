if (typeof console === "undefined") {
    console = {
        log:function () {
        },
        log:function (msg) {
        }
    };
}

var MAIN = function() {
    //Private vars
	
return {

	slideShow : "HOME",
	
	//Public vars/methods
	init:function(){
		$("#header_logo").hide();
		var outerLayout = $("body").layout({
		   defaults: {
				fxName: "slide",
				fxSpeed: "slow",
				resizable: false,
				closable: false,
				spacing_closed: 0,
				spacing_open: 0,
				togglerLength_closed: "100%"
		   },center: {
				overflow: "auto"
		   },north: {
				size: 135,    // auto
				initClosed: false,
				hide: false
		   },south: {
				size: 28,    // auto
				initClosed: false,
				hide: false
		   },east: {
				initClosed: true,
				hide: true
		   },west: {
				initClosed: true,
				hide: true
		   }
		});	
		
		NAV.init();
		$("#header_logo").fadeIn(1000);
	
	},
	
	waitingGif:function(){
		var gif = "<div class='waitingGif'><img src='img/ajax-loader.gif' height='50' width='50'></div>";
		return gif;
	}
	
}}();
$(document).ready(function () {
	console.log("PALLC MAIN - START");
	MAIN.init();
	console.log("PALLC MAIN - END");
});