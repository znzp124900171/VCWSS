var api = 'http://vcwss.de/vcwss/f/recentEvents';
var ip = 'http://vcwss.de/'
var sysLan = window.navigator.language;

var pageNo=getParameterByName('pageNo');
var typeSelect = getParameterByName('eventType');

if(!pageNo) {
	pageNo = 1;
}


if(sysLan === 'zh-CN' || sysLan === 'zh-cn') {
	if (typeSelect == 1 || typeSelect == 2 || typeSelect == 3) {
		jsonUrl = 'http://vcwss.de/vcwss/f/recentEvents?pageNo='+pageNo+'&pageSize=10&lang=0&eventType='+typeSelect;
	} else {
		jsonUrl = 'http://vcwss.de/vcwss/f/recentEvents?pageNo='+pageNo+'&pageSize=10&lang=0';
	}
	$.getJSON(jsonUrl, function(eventsList) {
		if(eventsList.success) {
			$('#event-list').html('');
			var totalPageNo = Math.ceil(eventsList.data.count/8);
			var currentPageNo = eventsList.data.pageNo;
			var previousPageNo = currentPageNo-1;
			var nextPageNo = currentPageNo+1;
			$.each(eventsList.data.list,function(i,list){
				var imgUrl = list.img.replace('/_thumbs','');
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
				var li = $('<li></li>');
				var article = $('<div class="article"></div>');
				articleUrl = ip+'events/post_contents.html?url=vcwss'+list.url+'&type='+eventType;
				$(article).append('<h3 class="article-title"><a href="'+articleUrl+'">'+list.title+'</a></h3>');
				$(article).append('<div class="index-author-comments-date"><span class="author-name">'+list.author+'</span>&nbsp;&nbsp;<a href="'+'#'+'" class="archive">'+eventType+'</a>&nbsp;&nbsp; '+list.eventTime+'</div>');
				$(article).append('<div class="article-image"><a href="'+articleUrl+'"><img src="'+ip+imgUrl+'"></a></div>');
				$(article).append('<p>'+list.subtitle+'</p>');
				$(article).append('<a href="'+articleUrl+'" class="btn btn-custom btn-readmore">阅读更多</a>');
				$(article).appendTo(li);
				$(li).appendTo('#event-list');
			});

			$('.pager .previous a').attr('href', 'http://47.90.202.48/events/events.html'+'?pageNo='+previousPageNo);
			$('.pager .next a').attr('href', 'http://47.90.202.48/events/events.html'+'?pageNo='+nextPageNo);

			if (previousPageNo === 0) {
				$('.pager').find('.previous').remove();
			}
			if (currentPageNo === totalPageNo) {
				$('.pager').find('.next').remove();
			}

		}
	});

}

$(document).ready(function() {
	$('#event-vcwss a').attr('href', 'http://vcwss.de/events/events.html?eventType='+1);
	$('#event-stuttgart a').attr('href', 'http://vcwss.de/events/events.html?eventType='+2);
	$('#event-de a').attr('href', 'http://vcwss.de/events/events.html?eventType='+3);

	if(typeSelect==1) {
		$('.breadcrumb li:nth-child(2)').after('<li><a class="active">学联活动</a></li>');
		$('.breadcrumb li:nth-child(2) a').removeClass('active');
		$('.breadcrumb li:nth-child(2) a').attr('href', 'http://vcwss.de/events/events.html');
	} else if (typeSelect==2) {
		$('.breadcrumb li:nth-child(2)').after('<li><a class="active">斯图活动</a></li>');
		$('.breadcrumb li:nth-child(2) a').removeClass('active');
		$('.breadcrumb li:nth-child(2) a').attr('href', 'http://vcwss.de/events/events.html');
	} else if (typeSelect==3) {
		$('.breadcrumb li:nth-child(2)').after('<li><a class="active">全德活动</a></li>');
		$('.breadcrumb li:nth-child(2) a').removeClass('active');
		$('.breadcrumb li:nth-child(2) a').attr('href', 'http://vcwss.de/events/events.html');
	}


});

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}