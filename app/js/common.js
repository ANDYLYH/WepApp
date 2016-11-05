document.addEventListener('DOMContentLoaded',function(){
	$('.layout-header a').eq(1).on('singleTap',function(){
		$('.caidan').toggle();
		
	})
	//头部做菜单栏的隐藏及显示
	$('.search-bar .d_logo').eq(1).on('singleTap',function(){
		$('.detail_menu').toggle();
		
	})
	//头部做菜单栏的隐藏及显示
	$('.header_top .h_logo').eq(1).on('singleTap',function(){
		$('.menu').toggle();
		console.log(111);
		
	})
	
	//高亮
	gaoliang();
	function gaoliang(){
		for(var i=0;i<5;i++){
			if($('.foot span').eq(i).find('dt').text()==$('body').attr('name')){
				$('.foot span dl').eq(i).css('color',"darkmagenta");
				$('.foot span dl').eq(i).find('dt').css('color',"darkmagenta");
			}
		   
		}
		
		
	}
	//当点击底部的个人中心时，如果用户尚未注册，则跳转到注册页面，否则跳转到个人中心
	$('.foot .geren').on('singleTap',function(){console.log(1);
                   if(localStorage.getItem('local')){
                   	
                   	window.location ='html/personal_information.html';
                   }else{
                   	window.location ='html/register.html';
                   }

	})
	    
          $('.ret_myself').on('singleTap',function(){
          	window.location ='personal_information.html';
          })

       $('.foot .com').on('singleTap',function(){
                   if(localStorage.getItem('local')){
                   	
                   	window.location ='personal_information.html';
                   }else{
                   	window.location ='register.html';
                   }

	})
       //顶部菜单栏的个人中心选项，判断此用户是否已注册，若未注册，则跳到注册页面
        $('.com').on('singleTap',function(){
                   if(localStorage.getItem('local')){
                   	
                   	window.location ='personal_information.html';
                   }else{
                   	window.location ='register.html';
                   }

	})
     
     //顶部菜单栏的购物车选项和底部购车按钮，判断此用户是否已注册，若未注册，则跳到注册页面
     //首页
        $('.shopCar').on('singleTap',function(){
                   if(localStorage.getItem('local')){
                   	
                   	window.location ='html/shoppingCar.html';
                   }else{
                   	window.location ='html/register.html';
                   }

	})
    //列表页   ,详情页，
     $('.com_shoppingcar').on('singleTap',function(){
                   if(localStorage.getItem('local')){
                   	
                   	window.location ='shoppingCar.html';
                   }else{
                   	window.location ='register.html';
                   }

	})
})