var api = 'http://vcwss.de/vcwss/f/galleries';
var ip = 'http://vcwss.de';
var sysLan = window.navigator.language;

var pageNo= getParameterByName('pageNo');
console.log('currentPageNo:'+pageNo);

if(!pageNo) {
	pageNo = 1;
}

if(sysLan === 'zh-CN' || sysLan === 'zh-cn') {
	$.getJSON(api+'?pageNo='+pageNo+'&pageSize=10&lang=0', function(galleryList) {
		if(galleryList.success) {
			$('.gallery-wrapper').html('');
			var totalPageNo = Math.ceil(galleryList.data.count/8);
			var currentPageNo = galleryList.data.pageNo;
			var previousPageNo = currentPageNo-1;
			var nextPageNo = currentPageNo+1;
			$.each(galleryList.data.list,function(i,list){
				var themaWrapper = $('<li class="thema-wrapper row"></li>');
				var galleryThema = '<h3 class="page-header">'+list.title+'</h3>';
				$(themaWrapper).append(galleryThema);
				for(var j=1;j<4;j++) {
					var imgUrl = ip+list.galleryImages[j];
					$(themaWrapper).append('<div class="col-md-4 col-sm-4 col-xs-6"><div class="item-img-wrap"><img src="'+imgUrl+'" class="img-responsive" alt="图片"><div class="item-img-overlay"><a href="'+imgUrl+'" class="show-image"><span></span></a></div></div><div class="work-desc"></div></div>');
				}
				$(themaWrapper).append('<div class="col-md-12 col-sm-12 com-xs-12 text-center" style="margin-top: 30px;"><a href="http://vcwss.de/gallery/galleryImages.html?title='+list.title+'" class="btn btn-custom btn-custom-outline">更多</a></div>');
				$(themaWrapper).appendTo('.gallery-wrapper');
			});

			$('.pager .previous a').attr('href', 'http://vcwss.de/gallery/gallery.html'+'?pageNo='+previousPageNo);
			$('.pager .next a').attr('href', 'http://vcwss.de/gallery/gallery.html'+'?pageNo='+nextPageNo);

			if (previousPageNo === 0) {
				$('.pager').find('.previous').remove();
			}
			if (currentPageNo === totalPageNo) {
				$('.pager').find('.next').remove();
			}

		}
	});
}

$( document ).ready(function() {
    $('.show-image').magnificPopup({type: 'image'});
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