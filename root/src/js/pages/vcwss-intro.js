$(document).ready(function() {
	$('[data-toggle="popover"]').popover({
		html:true,
		placement: 'top',
		trigger: 'click',
		content: function(){
			var name = $(this).data().name;
			var path = $(this).find('.team-pic-small').attr('src');
			var content_wrapper = ['<img src="',path,'" alt="members"><h5>',name,'</h5>'].join('');
			return content_wrapper;
		}
	});

	$('html').on('mouseup', function(e) {
	    if(!$(e.target).closest('.popover').length) {
	        $('.popover').each(function(){
	            $(this.previousSibling).popover('hide');
	        });
	    }
	});

	$('.nav-tabs li a').click(function(event) {
		if($(this).parent().hasClass('disabled')) {
			event.preventDefault();
			return false;
		}
		$('.breadcrumb .active').text($(this).text());
	});

});



