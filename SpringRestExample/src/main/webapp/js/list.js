/*
 * fetch data from restful service and populate into list
 */
$(function() {
	//fetch all log data by default	
	$.ajax({
		type : "GET",
		url : "/SpringRestExample/rest/logs",
		// The key needs to match your method's input parameter
		// (case-sensitive).
		// data : JSON.stringify(markers),
		contentType : "application/json; charset=utf-8",
		dataType : "json",
		success : function(data) {
			$.each(data, function(i, n) {
				$("#datas").append(
						"<tr><td>" + n.TimeStamp + "</td><td>" + n.LogMarker
								+ "</td><td>" + n.Logger + "</td><td>"
								+ n.LogLevel + "</td><td>" + n.CurrentThread
								+ "</td><td>" + n.LogMessage + "</td></tr>");
			});

		},
		failure : function(errMsg) {
			alert(errMsg);
		}
	});
	
	//fetch data by type
	$("#logLevelFiter").change(function(){
		var selectedVal = $("#logLevelFiter").val();
		//remove all list record first
		$("#datas>tbody").empty();
			$.ajax({
				type : "GET",
				url : "/SpringRestExample/rest/log/"+selectedVal,
				// The key needs to match your method's input parameter
				// (case-sensitive).
				// data : JSON.stringify(markers),
				contentType : "application/json; charset=utf-8",
				dataType : "json",
				success : function(data) {
					$.each(data, function(i, n) {
						$("#datas").append(
								"<tr class='item'><td>" + n.TimeStamp + "</td><td>" + n.LogMarker
										+ "</td><td>" + n.Logger + "</td><td>"
										+ n.LogLevel + "</td><td>" + n.CurrentThread
										+ "</td><td>" + n.LogMessage + "</td></tr>");
					});
	
				},
				failure : function(errMsg) {
					alert(errMsg);
				}
			});
		});
	

});
