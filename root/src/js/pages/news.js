var api = 'http://47.90.202.48/vcwss/f/recentNews';
var apiUrl = 'http://47.90.202.48/';
var apiNews = 'http://47.90.202.48/news/post_contents.html'
var sysLan = window.navigator.language;

var pageNo=getParameterByName('pageNo');

if(!pageNo) {
	pageNo = 1;
}

if(sysLan === 'zh-CN' || sysLan === 'zh-cn') {
	$.getJSON(api+'?pageNo='+pageNo+'&pageSize=8&lang=0', function(newsList) {
		if(newsList.success) {
			$('#news-list').html('');
			var totalPageNo = Math.ceil(newsList.data.count/8);
			var currentPageNo = newsList.data.pageNo;
			var previousPageNo = currentPageNo-1;
			var nextPageNo = currentPageNo+1;
			$.each(newsList.data.list,function(i,list){
				var imgUrl = list.img.replace('/_thumbs','');
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
				var li = $('<li></li>');
				var article = $('<div class="article"></div>');
				$(article).append('<h3 class="article-title"><a href="'+apiNews+'?url=vcwss'+list.url+'">'+list.title+'</a></h3>');
				$(article).append('<div class="index-author-comments-date"><span class="author-name">'+list.author+'</span>&nbsp;&nbsp;<a href="'+'#'+'" class="archive">'+newsType+'</a>&nbsp;&nbsp; '+list.releaseTime+'</div>');
				$(article).append('<div class="article-image"><a href="'+apiNews+'?url=vcwss'+list.url+'"><img src="'+apiUrl+imgUrl+'"></a></div>');
				$(article).append('<p>'+list.subtitle+'</p>');
				$(article).append('<a href="'+apiNews+'?url=vcwss'+list.url+'" class="btn btn-custom btn-readmore">阅读更多</a>');
				$(article).appendTo(li);
				$(li).appendTo('#news-list');
			});

			$('.pager .previous a').attr('href', 'http://47.90.202.48/news/news.html'+'?pageNo='+previousPageNo);
			$('.pager .next a').attr('href', 'http://47.90.202.48/news/news.html'+'?pageNo='+nextPageNo);

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