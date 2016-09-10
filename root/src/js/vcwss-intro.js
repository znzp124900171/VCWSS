function activaTab(tab){
    $('.nav-tabs a[href="#' + tab + '"]').tab('show');
};

$('[data-toggle="popover"]').popover({
	html:true,
	placement: 'top',
	trigger: 'click',
	content: function(){
		var name = $(this).data().name;
		var content_wrapper = ['<img src="../../img/team-1.jpg">','<h5>',name,'</h5>'].join('');
		return content_wrapper;
	}
});


console.log($('[data-toggle="popover"]').data().name);
activaTab('vcwss-team');