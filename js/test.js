var TEST = function() {
	
	function bindDialog(){
		 $( "#careersDialog" ).dialog({
		 autoOpen: false,
			modal: true,
			width: 545,
			buttons: {
				Ok: function() {
					$( this ).dialog( "close" );
				}
			}
		});	
	}
	
	function bindFormSubmit() {
		$("#resumeSubmitButton").button();
	
		$("#resume_form").submit(function(event) {
			console.log("Handler for single submit() called.");
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
				uploadResult("Your resume or application has been successfully sent.<br>Thank you.");
			}).error(function(msg) {
				console.log(msg);
				uploadResult("Error sending resume or application.<br>Try sending your application and/pr resumer manually to <b>info@pallc.co</b>.");
			});
			event.preventDefault();
		});	    
	}
	
	function bindKeyUp(){
		//reset previously set border colors and hide all message on .keyup()
		$("#contact_form  input[required=true], #contact_form textarea[required=true]").keyup(function() { 
			$(this).css('border-color',''); 
			$("#result").slideUp();
		});	
	}
	
	function uploadResult(msg){
		$( "#careersDialog" ).dialog({ width: 345 });
		$( "#careersDialogMsg" ).html(msg);
		$( "#careersDialog" ).dialog("open");	
	}
	
return {
	//Public vars/methods
	
	init:function(){
		//var my_ip = codehelper_ip.IP;
		//var test_ip = "69.255.137.125";
		//if(test_ip == my_ip){
			$("#center-div").empty();
			$("#center-div").load('html/test.html', function() {
				bindFormSubmit();
				bindKeyUp();
				bindDialog();
			});
		//}
	}
	
}}();