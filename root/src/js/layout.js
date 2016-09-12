var sTxt = document.getElementById('SearchTxt');
var sBox = document.getElementById('SearchBox');
var iBox=document.getElementById('inputBox');
var lang=document.getElementById('language');
var log=document.getElementById('log');
var langTxt=document.getElementById('languageTxt');
var logLayer=document.getElementById('loginDiv');
var logBox=document.getElementById('Form');
var width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;


log.onclick = function(){
	logLayer.style.display = 'block';
		event.cancelBubble=true;
}

sTxt.onclick = function(){
	if(sBox.style.width == '0px'){
		sTxt.style.display = 'none';
		log.style.display = 'none';
		langTxt.style.display = 'none';
		lang.style.display = 'none';
		sBox.style.opacity = '1';
		sBox.style.width = 'auto';
/*
		if(lang.style.display == 'none'){
			langTxt.style.display = 'none';
			document.write('abcd');
		}else{
			lang.style.display = 'none';
		}*/
	}
	event.cancelBubble=true;
}
iBox.onclick = function(){
	event.cancelBubble=true;
}
logBox.onclick=function(){
	event.cancelBubble=true;
}
document.onclick = function(){
	if(sTxt.style.display == 'none'){
		sBox.style.opacity = '0';
		sBox.style.width = '0px';
		sTxt.removeAttribute('style');
		log.removeAttribute('style');
		langTxt.removeAttribute('style');
		lang.removeAttribute('style');
/*		sBox.style.display = 'none';
		sTxt.style.display = 'table';
		log.style.display = 'table';
		if(width>768 && width<990){
			langTxt.style.display = 'table';
		}else{
			lang.style.display = 'table';
		}*/
	}
	if(logLayer.style.display == 'block'){
		logLayer.style.display = 'none';
	}
}