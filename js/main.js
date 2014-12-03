$(document).ready(function(){
	$( "#datepicker" ).datepicker({
		showOn: "button",
		buttonImage: "img/calendar.gif",
		buttonImageOnly: true,
		dateFormat: "dd.mm.yy"
	});

	$('#photo').click( function() {
		var src = $(this).attr('href');
		var img = $('<img src="' + src + '">').load(function(){
				var img = $(this);
				img.css({marginLeft: -img.width()/2, marginTop: -img.height()/2});
		});

		$('.overlay')
			.empty()
			.append(img)
			.show(500)
			.click(function(){
				$(this).hide(500);
			});

		return false;
	})
});