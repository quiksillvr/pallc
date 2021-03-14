var PARTNERS = function() {
    //Private vars
	var oTable;
	
	function initTable() {
		oTable = $("#partnersTable").dataTable({
			//"sDom": '<"H">t<"F">'
			"iDisplayLength": -1,
			"aLengthMenu": [[25, 50, 100, -1], [25, 50, 100, "All"]],			
			"bLengthChange": false
		});		
		
		$("#partnersTable th").hide();
		$("#partnersTable_info").hide();
		$("#partnersTable_paginate").hide();
	}
	
return {
	//Public vars/methods
	
	init:function(){
		$("#center-div").empty();
		$("#center-div").load('html/partners.html', function() {
			$(".nav_div").removeClass("nav_selected");
			$("#nav_div_partners").addClass("nav_selected").fadeIn();
			initTable();
		});
	}
	
}}();