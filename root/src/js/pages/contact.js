var timestamp = new Date().getTime();

function sendForm() {

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
		}
	});

	return false;
}