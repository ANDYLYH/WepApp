;$(function($){
	var $datalist = $('.dataList');
	//读取本地存储
	var goodlist = localStorage.getItem('GoodsData');
	goodlist = goodlist ? JSON.parse(goodlist) : [];
	//创建购物车
	for(var i = 0;i <goodlist.length;i++){
		var li = $('<li/>');
		//复选框
		var choice = $('<div/>').addClass('iconfont icon-yuan choice col-xs-1');
		li.append(choice);
		//商品图片
		var img = $('<div/>').addClass('goods col-xs-2');
		$('<img/>').attr('src',goodlist[i].image).appendTo(img);
		img.appendTo(li);
		
		//商品标题和价格
		var info = $('<div/>').addClass('info col-xs-5');
		var title = $('<div/>').addClass('title');
		$('<p/>').html(goodlist[i].title).appendTo(title);
		$('<span/>').addClass('price').html('&yen;'+goodlist[i].price).appendTo(title);
		title.appendTo(info);
		info.appendTo(li);
		
		//数量
		var num = $('<div/>').addClass('num col-xs-3');
		$('<input type="button" value="-" class="cut" />').appendTo(num);
		$('<input type="text" value="1" class="count" />').val(goodlist[i].num).appendTo(num);
		$('<input type="button" value="+" class="add" />').appendTo(num);
		num.appendTo(li);
		
		//删除
		$('<span/>').addClass('iconfont icon-lajixiang del col-xs-1').appendTo(li);
	
		//将li追加到购物车列表中
		li.appendTo($datalist);
	}

   var $oli =  $('.dataList li');
   var $choice = $('.dataList li .choice');
  //点击单选
   $oli.on('singleTap','.choice',function(){
   	if($(this).is('.icon-yuan')){
   		 $(this).removeClass('icon-yuan').addClass('icon-gou');
   	}else{
   		$(this).removeClass('icon-gou').addClass('icon-yuan');
   	}   
   	 //判断还是否是全部全选
     	Noall();
   })
   //获取元素节点
   var $allpick = $('.allPick');
   var $allchoice =  $('.allPick .choice');
   var allpay = $('.pay a span');
   var Gopay = $('.pay');//前往支付
    //点击全选
   $allpick.on('singleTap','.choice',function(){
   	 if($(this).is('.icon-yuan')){
   		 $(this).removeClass('icon-yuan').addClass('icon-gou');
   		 //遍历每个li
   		 $.each($choice,function(idx,item){
   		 	$(this).removeClass('icon-yuan').addClass('icon-gou');
   		 })
   		Noall(); 
   	}else{
   		$(this).removeClass('icon-gou').addClass('icon-yuan');
   		 $.each($choice,function(idx,item){
   		 	$(this).removeClass('icon-gou').addClass('icon-yuan');
   		 })
   		Noall(); 
   	} 
   	  
   })
   //封装一个判断是否全选
   function Noall(){
   	  var allprice = 0;
   	  var flag1 = false;
   	  
   	  $.each($choice, function(idx,item) {
   	  	  //统计总额
   	  	  if($(this).is('.icon-gou')){
   	  	  	allprice += goodlist[idx].price*goodlist[idx].num;
   	  	  	
   	  	  }
   	  	  allpay.html(allprice);
   	  	 if($(this).is('.icon-yuan')){
   	  	 	flag1 = true;
   	  	 }
   	  });
   	  //如果不是全选，即把钩钩去掉
   	  if(flag1){
   	  	$allchoice.removeClass('icon-gou').addClass('icon-yuan');
   	  }
   }
    
    //数量减少
	$datalist.on('singleTap','.cut',function(){
		var $count = $(this).siblings('.count').val();
		var $che = $(this).closest('li').find('.che');
		if($count == 1){
			$(this).siblings('.count').val(1);
			//禁选按钮
//			$('.cut').attr({'disabled':'disabled'});
		}else{
			$(this).siblings('.count').val(--$count);
		}
		if($che.prop('checked')){
			total();
		}
		var title = $(this).closest('li').find('.title p').html()
		local($count,title);
		Noall();
	});
	
   //数量增加
	$datalist.on('singleTap','.add',function(){
		var $count = $(this).siblings('.count').val();
		var $che = $(this).closest('li').find('.che');
		$(this).siblings('.count').val(++$count);
		if($che.prop('checked')){
			total();
		}
		var title = $(this).closest('li').find('.title p').html()
		local($count,title);
		Noall();
	});
	
	
	
	//	//更改本地存储
	function local(num,title){
		goodlist = JSON.parse(localStorage.getItem('GoodsData'));
		for(var i in goodlist){  //遍历localStorage数组更改商品数量
			if(goodlist[i].title == title){
				goodlist[i].num = num;
				localStorage.setItem('GoodsData',JSON.stringify(goodlist));
			}
		}
	}
	
	//	//删除
	$datalist.on('singleTap','.del',function(){
		var $count = $(this).closest('li').find('.price i').html()*$(this).closest('li').find('.count').val();
		$(this).closest('li').remove();
		var $total=$('span','.pay').html() - $count;
		$('span','.pay').html($total);
		//更改本地存储
		goodlist = JSON.parse(localStorage.getItem('GoodsData'));
		for(var i in goodlist){  //遍历localStorage数组更改商品数量
			if(goodlist[i].title == $(this).closest('li').find('.title p').html()){
				goodlist.splice(i,1);
				localStorage.setItem('GoodsData',JSON.stringify(goodlist));
			}
		}
		
	});
	

	//确认支付
	Gopay.on('singleTap',function(){
                         
                         if(parseInt(allpay.html()) !== 0){
                         	   var dingdan ={};
                       
                          var Dlist= [];
                   
                          var hwlist = localStorage.getItem('GoodsData')?JSON.parse(localStorage.getItem('GoodsData')):[];
                          var hwlist1 = localStorage.getItem('GoodsData')?JSON.parse(localStorage.getItem('GoodsData')):[];

                          $.each($choice,function(idx,item){
                          	if($(this).is('.icon-gou')){  
                                               	    dingdan = {"price":hwlist[idx].price,"title":hwlist[idx].title,"image":hwlist[idx].image,"num":hwlist[idx].num};    
                                               	    hwlist1.splice(idx-1,1); 
                                               	    Dlist.push(dingdan);
                                               	   } 
                                               	  
                                               })
                                            
                                           
                               localStorage.setItem("dlist",JSON.stringify(Dlist));
                               localStorage.setItem("GoodsData",JSON.stringify(hwlist1));
   
		      window.location = 'indent.html';
                         }else{
                         	      window.location = 'indent.html';
                         }
                         
	})

});
