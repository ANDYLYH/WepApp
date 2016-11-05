document.addEventListener('DOMContentLoaded',function(){
	
	var username=localStorage.getItem('username');
	if(username){
		$('.layout-main .tel').text(username);
	}else{
		$('.layout-main .tel').text('12345678901');
	}
	
	
	$('.add ul:last-child').on('singleTap',function(){
		window.location = "address.html";
	})
	
	$('.add ul:first-child').on('singleTap',function(){
		window.location = "indent.html";
	})
	$('.add ul').eq(1).on('singleTap',function(){
		window.location = "my_Vault.html";
	})
})