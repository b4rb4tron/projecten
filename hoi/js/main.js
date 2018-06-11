$(document).ready(function() {
	$("#mainPage").html("Loading...");
	
	var pagelink = "pages/firstpage/";
	var url = pagelink + "index.html";
	
	$.ajax({
		url : url,
		type : "GET",
		dataType : "html"
	}).done(function(data) {		
		$("#mainPage").html(data);
		$("#mainPage link").each(function() {
			var cssLink = pagelink + $(this).attr('href');
			$("head").append("<link rel='stylesheet' href='" + cssLink + "' />")
		});
		$("#mainPage script").each(function() {
			var jsLink = pagelink + $(this).attr('src');
			$("head").append("<script src='" + jsLink + "' ></script>")
		});

	}).fail(function(jqXHR, textStatus, errorThrown) {
		$("#mainPage").html("Error!! File is not loaded");
	});

});
