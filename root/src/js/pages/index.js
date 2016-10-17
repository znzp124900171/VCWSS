$(document).ready(function() {
	$('#navPage-home').addClass('active');
});

// 灯箱效果
$('.show-image').magnificPopup({type: 'image'});

// 广告栏
$(window).stellar({
    horizontalScrolling: false,
    responsive: true,
    scrollProperty: 'scroll',
    parallaxElements: false,
    horizontalOffset: 0,
    verticalOffset: 0
});

var sysLan = window.navigator.language;

$('#lang-cn').click(function() {
	sysLan = 'zh-CN';
});

$('#lang-de').click(function() {
	sysLan = 'de-DE';
});

var api = 'http://vcwss.de/';
var apiEvent = 'http://vcwss.de/events/post_contents.html';
var apiNews = 'http://vcwss.de/news/post_contents.html'


if(sysLan === 'zh-CN' || sysLan === 'zh-cn') {
	// 轮播框
	$.getJSON('http://vcwss.de/vcwss/f/carouselContents?lang=0', function(carousel) {
		if (carousel.success) {
			$.each(carousel.data.list, function(i,list){
				var id = '#carousel-'+i;
				var imgUrl = list.img.replace('/_thumbs','');
				$(id+' .carousel-title').text(list.title);
				$(id+' .carousel-text p').text(list.subtitle);
				if(list.type === 'event') {
					$(id+' .carousel-text a').attr('href', apiEvent+'?url=vcwss'+list.url+'&type='+list.type);
				} else {
					$(id+' .carousel-text a').attr('href', apiNews+'?url=vcwss'+list.url+'&type='+list.type);
				}
				$(id+' img').attr('src', api+imgUrl);
			});
		}
	});

	// 近期活动
	$.getJSON('http://vcwss.de/vcwss/f/recentEvents?lang=0', function(recentEvents){
		if(recentEvents.success) {
			var count = 0;
			$.each(recentEvents.data.list, function(i, list) {
				switch(list.type) {
					case 1:
						eventType = '学联活动';
						break;
					case 2:
						eventType = '斯图活动';
						break;
					case 3:
						eventType = '全德活动';
						break;
				}
				var li = $('<li class="col-md-3 col-sm-6 col-xs-12 event-block"></li>');
				var eventUrl = apiEvent+'?url=vcwss'+list.url+'&type='+eventType;
				var imgUrl = list.img.replace('/_thumbs','');
				$(li).append('<div class="img-wrapper"><a href="'+eventUrl+'"><img src="'+imgUrl+'"></a></div>');
				$(li).append('<h4 class="title-block" ><a href="'+eventUrl+'">'+list.title+'</a></h4>');
				$(li).append('<span class="col-md-12 col-sm-12 col-xs-12 time-block">'+list.eventTime+'</span>');
				$(li).append('<span class="col-md-12 col-sm-12 col-xs-12 location-block">'+list.eventAddress+'</span>');
				$(li).appendTo('#eventsList');
				count++;
				if (count > 3) {
					return false;
				}
			});
		};
	});

	// 近期新闻
	$.getJSON('http://vcwss.de/vcwss/f/recentNews?lang=0', function(recentNews) {
		if(recentNews.success) {
			var count = 0;
			$.each(recentNews.data.list, function(i, list) {
				switch(list.type) {
					case 1:
						newsType = '学联新闻';
						break;
					case 2:
						newsType = '斯图新闻';
						break;
					case 3:
						newsType = '全德新闻';
						break;
				}
				var li = $('<li class="col-md-3 col-sm-6 col-xs-12 event-block"></li>');
				var newsUrl = apiNews+'?url=vcwss'+list.url+'&type='+newsType;
				var imgUrl = list.img.replace('/_thumbs','');
				$(li).append('<div class="img-wrapper"><a href="'+newsUrl+'"><img src="'+imgUrl+'"></a></div>');
				$(li).append('<h4 class="title-block" ><a href="'+newsUrl+'">'+list.title+'</a></h4>');
				$(li).append('<span class="col-md-12 col-sm-12 col-xs-12 time-block-news">'+list.releaseTime+'</span>')
				$(li).appendTo('#newsList');
				count++;
				if (count > 3) {
					return false;
				}
			});
		};
	});

	// 广告框
	$.getJSON('http://vcwss.de/vcwss/f/ads/?lang=0', function(ads) {
		if(ads.success) {
			$.each(ads.data.list, function(i,list) {
				var imgUrl = list.img.replace('/_thumbs','');
				$('.parallax .heading h2').text(list.title);
				$('.parallax .subheading h4').text(list.subtitle);
				$('#inner-section').css('background-image', 'url('+api+imgUrl+')');
				$('#inner-section .btn-custom').attr('href', 'http://47.90.202.48/vcwss'+list.url);
			});
		}
	});

	// 画廊
	$.getJSON('http://vcwss.de/vcwss/f/galleries?lang=0', function(galleries) {
		if (galleries.success) {
			$.each(galleries.data.list, function(i,list){
				var id = '#gallery-'+i;
				$(id+' .work-desc a').text(list.title);
				$(id+' .img').attr('src', api+list.coverImage);
				$(id+' .img-responsive').attr('src', list.coverImage);
				$(id+' .item-img-overlay a').attr('href', api+list.coverImage);
				$(id+' .work-desc a').attr('href', api+'vcwss'+list.url);
			});
		}
	});

};