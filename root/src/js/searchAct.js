var sTxt = document.getElementById('SearchTxt');
var sBox = document.getElementById('SearchBox');
var iBox=document.getElementById('inputBox');
var lang=document.getElementById('language');
var log=document.getElementById('log');
var langTxt=document.getElementById('languageTxt');
var width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

sTxt.onclick = function(){
	if(sBox.style.display == 'none'){
		sTxt.style.display = 'none';
		log.style.display = 'none';
		langTxt.style.display = 'none';
		sBox.style.display = 'table';
		lang.style.display = 'none';
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
document.onclick = function(){
	if(sTxt.style.display == 'none'){
		sBox.style.display = 'none';
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
}