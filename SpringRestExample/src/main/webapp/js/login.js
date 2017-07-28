

$(function() {
	
	$("a").click(function() {
		var user = $("#user").val();
		var psd = $("#password").val();
		var markers = {
			UserId : user,
			Password : psd,
			redirect : "",
		};

		$.ajax({

			type : "POST",
			url : "/SpringRestExample/rest/login",
			// The key needs to match your method's input parameter
			// (case-sensitive).
			data : JSON.stringify(markers),
			contentType : "application/json; charset=utf-8",
			dataType : "json",
			success : function(data) {
				if (data.redirect != '') {
					$.cookie("user", data.UserId);
					location.href = data.redirect;					
					return true;
				} else {
					alert("Invalid User and password!");
				}

			},
			failure : function(errMsg) {
				alert(errMsg);
			}
		});
		return false;
	});
});

