/**
 * $Author:M. Roberts
 * $Date: Aug. 31st 2014
 *
 * Description: Contains implementation logic for the Palloc navigation.
 */
var NAV = (function () {

    //--------------------------------
    // Private Variables and Methods
    //--------------------------------

    return {

        // -----------------------------
        // Public Variables and Methods
        // -----------------------------

        bindNavClicks:function () {
            $("#nav_home").on("click", function (event) {
                event = null;
				$.cookie("currPage", "HOME");
                HOME.init();
            });
            $("#nav_gallery").on("click", function (event) {
                event = null;
				$.cookie("currPage", "GALLERY");
                GALLERY.init();
            });			
            $("#nav_partners").on("click", function (event) {
                event = null;
				$.cookie("currPage", "PARTNERS");
                PARTNERS.init();
            });
            $("#nav_careers").on("click", function (event) {
                event = null;
				$.cookie("currPage", "CAREERS");
                CAREERS.init();
            });
            $("#nav_test").on("click", function (event) {
                event = null;
				$.cookie("currPage", "TEST");
                TEST.init();
            });			
        },

        /**
         * Initialization of the Pallco Navigation Menu.
         */
        init:function () {
            NAV.bindNavClicks();
			var cookieCurrPage= $.cookie("currPage");
			if(cookieCurrPage){
			   if(cookieCurrPage == "HOME"){
			      HOME.init();
			   }else if(cookieCurrPage == "GALLERY"){
				  GALLERY.init();
			   }else if(cookieCurrPage == "PARTNERS"){
				  PARTNERS.init();
			   }else if(cookieCurrPage == "CAREERS"){
				  CAREERS.init();
			   }else if(cookieCurrPage == "TEST"){
				  TEST.init();
			   }
			}else{
			   HOME.init();
			}
        }
    };
})();
