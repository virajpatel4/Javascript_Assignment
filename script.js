/*
	WEB 303 Assignment 1 - jQuery
	{Viraj Patel}
	0791762
*/
$(document).ready(function(){
	$("input").change(function(){
	   let salary = $("#yearly-salary").val();
	   let percentage = $("#percent").val(); 

	   
	   let amount = ((salary*percentage)/100).toFixed(2); 
	   $('#amount').text ('$'+ amount);
	}
	);
}
);