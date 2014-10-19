$(document).ready(function(){
		$('.scrollbar-inner').scrollbar();

		$('.bWidget__eTabPanel').on('click', 'li:not(.active)',
			function() {
					$(this).addClass('active').siblings().removeClass('active')
					.parents('div.bWidget__eContainer')
					.find('.bWidget__eContainerText')
					.eq($(this).index()).fadeIn(150).siblings('div.bWidget__eContainerText').hide();
		});

		$('.title').text($("#lang").val());

		$('#lang').on('change', function(){
				var value = $(this).val() || $(this).text();
				$('.title').text(value);
		});

		$('#eCheckbox').on('change', function(){

				if ($(this).prop('checked')) {
						$('#eCheckboxIcon').addClass('active');
				} else {
						$('#eCheckboxIcon').removeClass('active');
				};
		});
})