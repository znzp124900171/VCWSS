var api = 'http://vcwss.de/vcwss/f/galleries';
var ip = 'http://vcwss.de';
var sysLan = window.navigator.language;

var title = getParameterByName('title');
$('.breadcrumb .active').text(title);
if(sysLan === 'zh-CN' || sysLan === 'zh-cn') {
	$.getJSON(api, function(galleryList) {
		if(galleryList.success) {
			for (var i=0; i<galleryList.data.list.length;i++) {
				if(galleryList.data.list[i].title == title) {
					var imageList = galleryList.data.list[i].galleryImages
					$.each(imageList, function(index, urls) {
						console.log('step4');
						var pin = $('<div class="pin"><img src="'+ip+imageList[index]+'"></div>');
						$(pin).appendTo('#columns');
					});
				}
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