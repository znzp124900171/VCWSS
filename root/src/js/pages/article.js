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

// 解析文章信息
var api = getParameterByName('url');
var archive = getParameterByName('type');
var ip = 'http://vcwss.de/'
var fullUrl = ip +api;

// 更新页面内容
$('#article-content').html('');
$('#article-content').load(fullUrl);
$('.breadcrumb .active').text(archive);

