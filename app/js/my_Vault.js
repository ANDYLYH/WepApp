document.addEventListener('DOMContentLoaded',function(){
	//右侧菜单
	$(function(){
		
		$(".icon-gou").tap(function(){
			var a = $(this).attr('class').indexOf('gougou');
			if(a<0){
				$(this).addClass('gougou');
			}else{
				$(this).removeClass('gougou')
			}	
		})		
	})
})