function activaTab(tab){
    $('.nav-tabs a[href="#' + tab + '"]').tab('show');
};

$(".team-pic-small").click(function(event) {
	var offset = $(event.target).position();
	var path = $(this).src;
	var name = $(this).attr("alt");
	var title = $(this).data('title');

	$(".team-pic-detail h4").html('<h4>'+name+'&nbsp<small>'+title+'</small></h4>')
	$(".team-pic-detail").css({
		top: offset.bottom,
		left: offset.left-15+"px"
	});
	$(".team-pic-detail img").attr('src', path);
	$(".team-pic-detail").toggle("slow");

	console.log(name);
});
activaTab('vcwss-team');