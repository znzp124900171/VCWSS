var urlList = ['../img/homepage/event3.jpg','../img/homepage/event2.jpg','../img/homepage/event3.jpg','../img/homepage/event4.jpg']; //已经解析过的jsons

$('.event-block-list .img-wrapper img').each(function(index) {
	$(this).attr('src', urlList[index]);
});