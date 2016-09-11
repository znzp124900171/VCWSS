function activaTab(tab){
    $('.nav-tabs a[href="#' + tab + '"]').tab('show');
};

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


activaTab('vcwss-intro');
