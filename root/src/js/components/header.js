/* 添加html代码
****************************************************************************************************************************************/

var logoUrl = '../favicon.ico';

$('.animationload').after('<div class="alert alert-warning text-center" style="margin-bottom:0;"><a href="#" class="close" data-dismiss="alert" onclick="closeclick()">&times;</a><strong>请注意: </strong>为了更好地访问体验，本网站会使用浏览器缓存来存储您的登录和访问信息，如不希望使用Cookies缓存内容，请在浏览器设置中关闭</div>')

// 生成导航栏
var div = $('<div class="container"></div>');
$(div).append('<div class="navbar-header"><button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#vcwss-navbar-collapse"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button>'+'<a class="navbar-brand logo" href="#"><img alt="Brand" src="'+logoUrl+'" class="img-responsive logo"></a></div>');

var collapse = $('<div class="collapse navbar-collapse" id="vcwss-navbar-collapse"><div>');

/* 导航栏左侧*/
var navLeft = $('<ul class="nav navbar-nav navbar-left"></ul>');
$(navLeft).append('<li id="navPage-home"><a href="../index.html">首页</a></li>');
$(navLeft).append('<li id="navPage-event"><a href="../events/events.html">活动</a></li>');
$(navLeft).append('<li id="navPage-news"><a href="../news/news.html">新闻</a></li>');
$(navLeft).append('<li id="navPage-info" class="dropdown-custom"><a href="#">实用信息<span class="caret"></span></a><div class="submenu"><ul class="submenu-dropdown"><li><a href="#">新生手册</a></li><li><a href="../resource/download.html">下载资源</a></li></ul></div></li>');
$(navLeft).append('<li id="navPage-vcwss" class="dropdown-custom"><a href="#">关于学联<span class="caret"></span></a><div class="submenu"><ul class="submenu-dropdown"><li><a href="../about/vcwss-intro.html#vcwss-intro">学联介绍</a></li><li><a href="../about/vcwss-intro.html#vcwss-organisation">组织架构</a></li><li><a href="../about/vcwss-intro.html#vcwss-team">职能部门</a></li><li><a href="../gallery/gallery.html">学联画廊</a></li></ul></div></li>');
$(navLeft).append('<li id="navPage-contact" class="dropdown-custom"><a href="../contact/contact.html" class="active">联系我们<span class="caret"></span></a><div class="submenu"><ul class="submenu-dropdown"><li><a href="../contact/contact.html">联系方式</a></li><li><a href="#">常见问题</a></li></ul></div></li>');
$(navLeft).append('<li id="languageTxt" class="dropdown-custom navbar-langtxt"><a href="#">语言<span class="caret"></span></a><div class="submenu"><ul class="submenu-dropdown"><li><a href="#" id="lang-cn">中文</a></li><li><a href="#" id="lang-de">德语</a></li></ul></div></li>');
$(navLeft).appendTo(collapse);

/* 导航栏右侧 */
/* 登录按钮 */
$(collapse).append('<ul id="log" class="nav navbar-nav navbar-right"><li class="signup"><a>登陆</a></li></ul>');

/* 已登录 */
$(collapse).append('<ul class="nav navbar-nav navbar-right" style="display:none;" id="logDone"><li class="loginSuccess" data-toggle="modal" data-target="#userInterface"><a></a></li></ul>')
/* 搜索 */
// $(collapse).append('<ul id="searchTxt" class="nav navbar-nav navbar-right"><li class="signup"><a>搜索</a></li></ul>');
/* 切换语言 */
$(collapse).append('<ul id="language" class="nav navbar-nav navbar-right nav-language"><li><a href="#">中文<img src="../../img/China.png" class="lang-img"></a></li><li><a href="#">DE<img src="../../img/Germany.png" class="lang-img"></a></li></ul>');
$(collapse).append('<ul id="language-sm" class="nav navbar-nav navbar-right nav-language"><li><a href="#">中文<img src="../../img/China.png" class="lang-img"></a><a href="#">DE<img src="../../img/Germany.png" class="lang-img"></a></li></ul>');
/* 搜索框 */
/*
$(collapse).append('<form id="searchBox" class="nav navbar-nav navbar-right navbar-form inputbox"  method="get" action="http://www.google.com/search" target="_blank" role="search" style="opacity:0;width:0px;"><div id="inputBox" class="input-group"><input type="text" class="form-control" placeholder="Search" style="height:34px;"><input type="hidden" name="sitesearch" value="stu-cn.de"><span class="input-group-btn"><button class="btn btn-default" type="submit"><span class=" glyphicon glyphicon-search"></span></button></span></div></form>');
*/

$(collapse).appendTo(div);
$(div).appendTo('#nav-header');

/* 生成登录注册界面
****************************************************************************************************/
// 加载登录注册页面
$('#nav-header').after('<div id="loginWrapper" style="display:none;"></div>');
// 生成选项卡页面
	var loginWrapper = $('<div id="loginWrapper" style="display:none;"></div>');
// 生成页面容器
	var loginBox = $('<div id="Form" class="form loginBox"></div>');
// 生成页面背景
	var loginLayer = $('<div class="loginLayer"></div>');
// 生成页面选项卡
	var tabs = $('<ul class="tab-group"><li class="tab active"><a href="#login">登录</a></li><li class="tab"><a href="#signup">注册</a></li></ul>');
// 生成选项卡容器
	var tabContent = $('<div class="tab-content"></div>');
// 生成登录选项卡
	var loginTab = $('<div id="login"></div>');
// 生成登录选项卡标题
	$(loginTab).append('<h1>欢迎回来</h1>');
// 生成登录选项卡表格内容
	var loginForm = $('<form onsubmit="return login();" role="form" id="loginForm"></form>');
	$(loginForm).append('<div class="field-wrap"><input type="text" required autocomplete="on" autofocus="on" placeholder="用户名"></div>');
	$(loginForm).append('<div class="field-wrap"><input type="password" required autocomplete="off" placeholder="密码"></div>');
	$(loginForm).append('<p class"forget"><a href="#">忘记密码？</a></p>');
	$(loginForm).append('<button type="submit" class="button button-block" data-toggle="modal" data-target="#alertDialog">登录</button>');
	$(loginForm).appendTo(loginTab);
// 生成注册选项卡
	var registerTab = $('<div id="signup"></div>');
// 生成注册选项卡标题
	$(registerTab).append('<h1>注册您的账户</h1>');
// 生成注册选项卡表格内容
	var registerForm = $('<form onsubmit="return register();" role="form" id="registerForm""></form>');
	$(registerForm).append('<div class="field-wrap"><input type="text" required autocomplete="on" autofocus="on" id="registerName" placeholder="输入账户名"></div>');
	$(registerForm).append('<div class="field-wrap"><input type="email" required autocomplete="on" id="registerEmail" placeholder="输入邮箱"></div>');
	$(registerForm).append('<div class="field-wrap"><input type="password" required autocomplete="off" id="registerPassword" placeholder="输入密码"></div>');
	$(registerForm).append('<div class="checkbox"><label><input type="checkbox" name="" required>我已阅读过<a href="../user/privacy.html#privacy">隐私条款和法律声明</a></label></div>');
	$(registerForm).append('<button type="submit" class="button button-block">注册</button>');
	$(registerForm).appendTo(registerTab);
// 整合选项卡
	$(loginTab).appendTo(tabContent);
	$(registerTab).appendTo(tabContent);
	$(tabs).appendTo(loginBox);
	$(tabContent).appendTo(loginBox);
	$(loginBox).appendTo('#loginWrapper');
	$(loginLayer).appendTo('#loginWrapper');


/* 生成用户界面
****************************************************************************************************/
// 弹出用户信息页面
$('#nav-header').after('<div class="modal fade" id="userInterface" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"></div>');

// 生成对话框
	var dialog = $('<div class="modal-dialog" role="document"></div>');
// 生成对话框内容
	var dialogContent = $('<div class="modal-content"></div>');
// 生成对话框头
	var dialogHeader = $('<div class="modal-header"></div>');
// 向对话框头中添加内容
	$(dialogHeader).append('<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title" id="myModalLabel">'+getCookie("username")+'你好</h4>');
// 生成对话框主体
	var dialogBody = $('<div class="modal-body"></div>');
// 向对话框主体中添加内容
	$(dialogBody).append('<h5>账户名: </h5><p>'+getCookie("username")+'</p><h5>电子邮件地址:</h5><p>'+getCookie("email")+'</p><h5>性别:</h5><p>'+getCookie('sex')+'</p><h5>专业:</h5><p>'+getCookie('major')+'</p><h5>常住地址:</h5><p>'+getCookie('live')+'</p>');
// 生成对话框尾
	var dialogFooter = $('<div class="modal-footer"></div>');
// 向对话框尾添加内容
	$(dialogFooter).append('<button type="button" class="btn btn-default" data-dismiss="modal" onclick="javascrip:window.location.href="#"">修改账户资料</button><button type="button" class="btn btn-primary" onclick="delCookie(\'username\');">退出登录</button>');
// 输出对话框
	$(dialogHeader).appendTo(dialogContent);
	$(dialogBody).appendTo(dialogContent);
	$(dialogFooter).appendTo(dialogContent);
	$(dialogContent).appendTo(dialog);
	$(dialog).appendTo('#userInterface');

/***************************************************************************************************************************************/
$(window).load(function() {
	// 导航栏固定
    $(".sticky").sticky({topSpacing: 0});

    // 判断cookies提示条是否已经显示
    alertClosed();
});


$(document).ready(function() {
	// 打开页面显示的短暂停留图标
	$(".loader").delay(150).fadeOut();
    $(".animationload").delay(300).fadeOut("slow");

    // 检查用户是否已登录
    checkCookie();

    // 设置登录事件
	$('.loginLayer').click(function() {
		/* Act on the event */
		$('#loginWrapper').modal('hide');
	});

	$('.signup').click(function(event) {
		/* Act on the event */
		$('#loginWrapper').modal('show');
	});

	//
	$('.logDone').modal('#userInterface');
});

// 用户注册
function register() {
	$.ajax({
		url: 'http://47.90.202.48/vcwss/f/validateLoginName?loginName='+$('#registerName').val(),
		type: 'GET',
		success: function(data) {
			if (data == true) {
				$.get('http://47.90.202.48/vcwss/f/validateEmail?email='+$('#registerEmail').val(), function(data) {
					if (data == true) {
						$.post('http://47.90.202.48/vcwss/f/register', {loginName: $('#registerName').val(),password: $('#registerPassword').val(),email: $('#registerEmail').val()}, function(data) {
								if (data.success == true) {
									$('.animationload').after('<div class="alert alert-success text-center" role="alert" style="margin-bottom:0px;">注册成功<div>');
							    	$('.alert-success').fadeTo(2000,500).slideUp(500,function(){
							    		$('.alert-success').slideUp(500);
							    	});
							    	$('#loginWrapper').modal('hide');

							    	// 注册成功后直接登录
							    	setCookie('username',escape(data.user.loginName),"h1");
							    	setCookie('email',escape(data.user.email),"h1");
							    	var username = getCookie('username');
							    	$('#log').hide();
							    	$('#logDone').show();
							    	$('.loginSuccess a').html('<i class="fa fa-user" style="padding-right:10px;color:inherit !important;"></i>'+username);
								} else {
									$('.animationload').after('<div class="alert alert-danger text-center" role="alert" style="margin-bottom:0px;">注册失败<div>');
							    	$('.alert-danger').fadeTo(2000,500).slideUp(500,function(){
							    		$('.alert-danger').slideUp(500);
							    	});
									$('#loginWrapper').modal('hide');
								}
						});
					} else {
						alert('邮箱已被使用');
					}
				});
			} else {
				alert('用户名已被使用');
			}
		}
	});

	return false;
}


// 用户登录
function login() {
	$.post('http://47.90.202.48/vcwss/f/login', {loginName: $('#loginForm input[type=text]').val(), password: $('#loginForm input[type=password]').val()}, function(data) {
		/*optional stuff to do after success */
		if (data.success == true) {
			$('#loginWrapper').modal('hide');
			setCookie("username",escape(data.user.loginName),"h1");
			setCookie('email',escape(data.user.email),"h1");
			var username = getCookie("username");
			$('#log').hide();
	    	$('#logDone').show();
	    	$('.loginSuccess a').html('<i class="fa fa-user" style="padding-right:10px;color:inherit !important;"></i>'+username);
	    	$('.animationload').after('<div class="alert alert-success text-center" role="alert" style="margin-bottom:0px;">登录成功<div>');
	    	$('.alert-success').fadeTo(2000,500).slideUp(500,function(){
	    		$('.alert-success').slideUp(500);
	    	});
		} else {
			$('.animationload').after('<div class="alert alert-danger text-center" role="alert" style="margin-bottom:0px;">登录失败<div>');
	    	$('.alert-danger').fadeTo(2000,500).slideUp(500,function(){
	    		$('.alert-danger').slideUp(500);
	    	});
			$('#loginWrapper').modal('hide');
		}
	});

	return false;
}


// 设置cookies
function setCookie(name, value, time) {
	var strsec = getsec(time);
	var exp = new Date();
	exp.setTime(exp.getTime() + strsec*1);
	document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString()+';path=/;domain=vcwss.de';
}

// 获取cookies
function getCookie(name) {
	var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg)) {
    	var username = unescape(arr[2]);
        return username;
    } else {
        return null;
    }
}

// 检查用户登录状态
function checkCookie() {
	var username = getCookie("username");
	if(username != null) {
		$('#log').hide();
    	$('#logDone').show();
    	$('.loginSuccess a').html('<i class="fa fa-user" style="padding-right:10px;color:inherit !important;"></i>'+username);
	} else {
		return null;
	}
}

// 删除cookie
function delCookie(name) {
	console.log(name);
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);
    if(cval!=null) {
    	// 清空cookie
        document.cookie= name + "="+cval+";expires="+exp.toGMTString()+';path=/;domain=vcwss.de';
        // 关闭用户界面
        $('#userInterface').modal('hide');
        // 修改导航栏状态
	    $('#logDone').hide();
	    $('#log').show();
        // 弹出提示
        $('.animationload').after('<div class="alert alert-info text-center" role="alert" style="margin-bottom:0px;">成功退出登录<div>');
    	$('.alert-info').fadeTo(2000,500).slideUp(500,function(){
    		$('.alert-info').slideUp(500);
    	});

    }
}

// 设置cookie时间的格式
function getsec(str) {
	var str1 = str.substring(1,str.length)*1;
	var str2 = str.substring(0,1);
	if(str2 == "s"){
		return str1*1000;
	} else if(str2 == "h") {
		return str1*60*60*1000;
	} else if (str2 == "d") {
		return str1*24*60*60*1000;
	}
}

// 关闭cookie提示条后记录状态
function closeclick(){
 $('.alert-warning').css('display', 'none');
 setCookie('closeclick','closeclick',"d30");
}

// 判断cookie提示条是否已经显示，显示过则隐藏
function alertClosed(){
	if(getCookie('closeclick')=='closeclick'){
		$('.alert-warning').css('display', 'none');
	}else{
		$('.alert-warning').css('display', 'block');;
	}
}

// 切换注册登录选项卡
$('.tab a').on('click', function (e) {
  e.preventDefault();
  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');
  target = $(this).attr('href');

  $('.tab-content > div').not(target).hide();
  $(target).fadeIn(600);
});

// Google Analytics

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-69767227-3', 'auto');
ga('send', 'pageview');

