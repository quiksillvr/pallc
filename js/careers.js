var CAREERS = function() {
	
	function bindDialog(){
		 $( "#careersDialog" ).dialog({
		 autoOpen: false,
			modal: true,
			width: 400,
			buttons: {
				Ok: function() {
					$( this ).dialog( "close" );
				}
			}
		});	
	}
	
	function bindInputs(){
		$(".formRow input, textarea").on("focus", function(){
			$(this).addClass("inputHighlight");
		});
		$(".formRow input, textarea").on("blur", function(){
			$(this).removeClass("inputHighlight");
		});		
	}
	
	function bindFormSubmit() {
		$("#resumeSubmitButton").button();
	
		$("#resume_form").submit(function(event) {
			console.log("Handler for single submit() called.");
			$('#submitDiv').append(MAIN.waitingGif());
			var formData = new FormData(this);
			$.ajax({
				url : $(this).attr("action"),
				type : "post",
				data : formData,
				processData : false, // Required, jQuery bug
				contentType : false
			// Required, jQuery bug
			}).done(function(msg) {
				console.log("Upload received");
				$('#resume_form').trigger("reset");
				resetCharCounter();				
				uploadResult("Your resume or application has been successfully sent.<br>Thank you.");
			}).error(function(msg) {
				console.log(msg);
				uploadResult("Error sending resume or application.<br>Try sending your application and resume manually to <b>info@pallc.co</b>.");
			});
			event.preventDefault();
		});	    
	}
	
	function bindKeyUp(){
		//reset previously set border colors and hide all message on .keyup()
		$("#resume_form  input[required=true], #resume_form textarea[required=true]").keyup(function() { 
			$(this).css('border-color',''); 
		});	
	}
	
	function resetCharCounter(){
		var maxChars = $("#message").attr("maxlength");
		$("#charsRemaining").html(maxChars);	
	}
	
	function bindCharCounter(){
		var maxChars = $("#message").attr("maxlength");
		$("#charsRemaining").html(maxChars);
		$("#message").keyup(function(e){
                var textlength = $("#message").val().length;
                if (textlength >= maxChars + 1) {
                    this.value = this.value.substring(0, maxChars);
                    e.preventDefault();
                } else{
					var charsLeft = maxChars - textlength;
                    $("#charsRemaining").html(charsLeft);
                }		
		});
	}
	
	function uploadResult(msg){
		$('.waitingGif').empty();
		$( "#careersDialogMsg" ).html(msg);
		$( "#careersDialog" ).dialog("open");	
	}
	
return {
	
	init:function(){
		$("#center-div").empty();
		$("#center-div").load('html/careers.html', function() {
			$(".nav_div").removeClass("nav_selected");
			$("#nav_div_careers").addClass("nav_selected").fadeIn();
			$("#careersAccordion").accordion({
			  heightStyle: "content",
			  animate: 500 
			});
			bindInputs();
			bindFormSubmit();
			bindKeyUp();
			bindDialog();
			bindCharCounter();
		});
	}
	
}}();