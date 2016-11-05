document.addEventListener('DOMContentLoaded',function(){
	var local=localStorage.getItem('local');
	local=local?JSON.parse(localStorage.getItem('local')):[];
	//手机注册
	var tel=false;
	var yzm=true;
	var psw=true;
	var queren=false;
	$('.layoyt-body input').eq(1).on('blur',function(){
		if(/^[1-3]\d{10}$/.test($(this).val())){
			tel=true;
		}else{
			alert('请输入正确的手机号码')
			
			tel=false;

			
		}
		console.log(tel);
		
	})
	
	//获取短信验证码
	var j=60;
	var arr='1234567890';
	$('.layoyt-body button').eq(0).on('singleTap',function(){
		if(tel!=true){
		}else{
		var num='';
		for(var i=0;i<4;i++){
		 num+=arr.charAt(parseInt(Math.random()*4));
	    }
		$('.layoyt-body input').eq(2).val(num);
		
		$('.layoyt-body button').eq(0).text(j);
		
		var timer=setInterval(function(){
			j--;
		$('.layoyt-body button').eq(0).text(j);
			if(j<=0){
				clearInterval(timer);
				
			}else{
				$('.layoyt-body button').eq(0).disabled='true';
			}
		},1000);
		}
	})
    //确认密码
    $('.layoyt-body input').eq(4).on('blur',function(){
    	if($('.layoyt-body input').eq(3).val()==$(this).val()){
    		
    		queren=true;
    	}else{
    	    alert('两次密码不一致')
    		queren=false;
    	}
    })
    
    //提交
    $('.layoyt-body button').eq(1).on('singleTap',function(){
    	if($('.layoyt-body input').eq(1).val()=="" || $('.layoyt-body input').eq(2).val()==""  || $('.layoyt-body input').eq(3).val()==""  ||   $('.layoyt-body input').eq(4).val()==""  ){
    		$('.layoyt-body li div').show();
    	}else{
    		$('.layoyt-body li div').hide();
    	}
    	
    	if(tel && yzm && psw && queren){
    		var user={};
    		user.name=$('.layoyt-body input').eq(1).val();
    		user.psw=$('.layoyt-body input').eq(3).val();
    		for(var i=0;i<local.length-1;i++){
    			if(local[i].name==user.name){
    				local.splice(i,i+1);
    			}
    		}
    		local.unshift(user);
    		localStorage.setItem('local',JSON.stringify(local));
    		window.location = 'logins.html';
    	}
    	
    })
	
    
	
})

