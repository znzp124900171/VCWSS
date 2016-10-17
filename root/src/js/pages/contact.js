var validateCodeImg = 'http://vcwss.de/vcwss/servlet/validateCodeServlet?';

$(document).ready(function() {
    $('#navPage-contact').addClass('active');
    refresh();
});

function refresh() {
	var t = new Date().getTime();
	$('.validateImg').attr('src', validateCodeImg+t);
};

function sendForm() {

	var validateUrl = validateCodeImg+'validateCode='+$('#validateCode').val();
	$.ajax({
		url: validateUrl,
		type: 'GET',
		success: function(data) {
			if(data === 'true') {
				$.ajax({
					url: $('#contactForm').attr('action'),
					type: 'POST',
					data: {
						name: $('#formName').val(),
						email: $('#formEmail').val(),
						phone: $('#formTel').val(),
						type: $('#formThema').val(),
						title: $('#formTitle').val(),
						content: $('#formContents').val()
					},
					success: function(data){
						alert(data.data);
						refresh();
					}
				});
			} else {
				alert('验证码错误，请重新输入');
				refresh();
			}
		}
	});
	return false;
}