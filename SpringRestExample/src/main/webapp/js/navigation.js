

$(function() {
	//set the user name in the navigation
	var user = $.cookie("user");
	if (typeof user != 'undefined') {
		$("#userName ").empty();
		$("#userName").append("<option value='"+user+"'>"+user+"</option>");
	}
	
	$(".logoutBtn").click(function() {
		logout();
		return false;
	});
	
	$(".menuLink").click(function(e) {
		swithMenu(this.innerHTML);
		return false;
	});
	
	
});



function logout(){
	$.removeCookie("user")
	location.href = "../SpringRestExample/index.html";	
}

function swithMenu(menu){
	if(menu === 'Home'){
		location.href = "../SpringRestExample/home.html";	
	}else{
		location.href = "../SpringRestExample/dashboard.html";	
	}
}

