var api = 'http://47.90.202.48/vcwss/f/recentEvents';
var apiUrl = 'http://47.90.202.48'
var urlEvent = 'http://47.90.202.48/events/post_contents.html';
var sysLan = window.navigator.language;

var pageNo=getParameterByName('pageNo');
console.log('currentPageNo:'+pageNo);

if(!pageNo) {
	pageNo = 1;
}

if(sysLan === 'zh-CN' || sysLan === 'zh-cn') {
	$.getJSON(api+'?pageNo='+pageNo+'&pageSize=10&lang=0', function(eventsList) {
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
				$(article).append('<h3 class="article-title"><a href="'+urlEvent+'?url=vcwss'+list.url+'">'+list.title+'</a></h3>');
				$(article).append('<div class="index-author-comments-date"><span class="author-name">'+list.author+'</span>&nbsp;&nbsp;<a href="'+'#'+'" class="archive">'+eventType+'</a>&nbsp;&nbsp; '+list.eventTime+'</div>');
				$(article).append('<div class="article-image"><a href="'+urlEvent+'?url=vcwss'+list.url+'"><img src="'+apiUrl+imgUrl+'"></a></div>');
				$(article).append('<p>'+list.subtitle+'</p>');
				$(article).append('<a href="'+urlEvent+'?url=vcwss'+list.url+'" class="btn btn-custom btn-readmore">阅读更多</a>');
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

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}