/*
Originally found at https://cssdeck.com/labs/login-form-using-html5-and-css3

by: https://cssdeck.com/user/kamalchaneman




*/

$(function(){  
    $("a").click(function(){  

    	var markers = { user: "128.3657142857143", password: "7" };

		$.ajax({

			type : "POST",
			url : "/SpringRestExample/rest/login",
			// The key needs to match your method's input parameter
			// (case-sensitive).
			data : JSON.stringify({
				Markers : markers
			}),
			contentType : "application/json; charset=utf-8",
			dataType : "json",
			success : function(data) {
				alert(data);
			},
			failure : function(errMsg) {
				alert(errMsg);
			}
		});
        return false;  
    });  
});  