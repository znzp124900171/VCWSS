// 读取局部加载的url地址
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
var realUrl = getParameterByName('url');
var api = 'http://47.90.202.48/'
var fullUrl = api +realUrl;
$('#article-content').html('');
$('#article-content').load(fullUrl);
$('.content-wrapper').load();