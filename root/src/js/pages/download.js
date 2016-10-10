var sysLan = window.navigator.language;
var api = 'http://47.90.202.48/vcwss/f/downloads';
var url = 'http://47.90.202.48';
var urlDownload = 'http://47.90.202.48/resource/download.html';

var pageNo=getParameterByName('pageNo');
console.log('currentPageNo:'+pageNo);

if(!pageNo) {
	pageNo = 1;
}

if(sysLan === 'zh-CN' || sysLan === 'zh-cn') {
	$.getJSON(api+'?pageNo='+pageNo, function(downloads) {
		if (downloads.success) {
			$('#file-list').html('');
			var totalPageNo = Math.ceil(downloads.data.count/8);
			var currentPageNo = downloads.data.pageNo;
			var previousPageNo = currentPageNo-1;
			var nextPageNo = currentPageNo+1;
			$.each(downloads.data.list, function(i, list) {
				var li = $('<li></li>');
				if(list.weight === 0) {
					$(li).append('<a href="'+url+list.url+'" target="view_window" >'+list.thema+'</a><span>'+list.uploadDate+'</span>');
					$(li).appendTo('#file-list');
				} else {
					$(li).append('<a href="'+url+list.url+'" class="vcwss" target="view_window" >'+list.thema+'</a><span>'+list.uploadDate+'</span>');
					$(li).appendTo('#file-list');
				}
			});

			$('.pager .previous a').attr('href', urlDownload+'?pageNo='+previousPageNo);
			$('.pager .next a').attr('href', urlDownload+'?pageNo='+nextPageNo);

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