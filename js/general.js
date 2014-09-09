$(document).ready(function() {
	//initial
	$('#content').load('main_page.html');
	
	//handle menu clicks
	$('ul#nav li a').click(function() {
		var page = $(this).attr('href');
		$('#content').load(page + '.html');
		return false;
	});
});