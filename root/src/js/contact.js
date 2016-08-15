function sendForm() {
	var ref = new Wilddog("https://vcwss2016.wilddogio.com/form");
	var name=document.getElementById("formName").value;
	var email=document.getElementById("formEmail").value;
	var thema=document.getElementById("formThema").value;
	var title=document.getElementById("formTitle").value;
	var contents=document.getElementById("formContents").value;
	alert('消息已成功发送');
	ref.set({
		"Name" : name,
		"E-mail" : email,
		"Thema" : thema,
		"Title" : title,
		"Contents" :contents
	});
}