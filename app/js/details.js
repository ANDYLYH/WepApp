
 document.addEventListener('DOMContentLoaded',function(){
    //统计购物车数量的一个变量
    var AllCount = 0
    
    //获取底部购物车的显示购物车货物数量的节点
    var $count = $('.buy-car .item-count');

    //获取轮播图框架元素
    var $div = $('.lunbo');
   
    //标题
    var $title = $('.title_Price .title');
    var $price = $('.price_lyh');
    //
    var $span = $('.goosList span');
//  console.log($span.eq(0).html())
     //下标
     var id;
     if(localStorage.getItem("id")){
     	id=parseInt(localStorage.getItem("id"));
     }else{
     	id = 0;
     }
     
 	$.ajax({
 		type:"get",
 		url:"./../data/details.json",
   		dataType:'json',
 		success:function(item){
 				$div[0].innerHTML ='<img src='+item[id].images1+'>';
   				$div[1].innerHTML ='<img src='+item[id].images2+'>';
   				$div[2].innerHTML ='<img src='+item[id].images3+'>';
   				$div[3].innerHTML ='<img src='+item[id].images4+'>';
   				$div[4].innerHTML ='<img src='+item[id].images5+'>';
   				$div[5].innerHTML ='<img src='+item[id].images6+'>';
   				$span.eq(0).html(item[id].p1);
   				$span.eq(1).html(item[id].p2);
   				$span.eq(2).html(item[id].p3);
   				$span.eq(3).html(item[id].p4);
   				$span.eq(4).html(item[id].p5);
   				$title.html(item[id].title);
   				$price.html('&yen;'+item[id].price);
   				obj = {"price":item[id].price,"image":item[id].images1,"title":item[id].title};
 			  //轮播图  利用swiper插件
 			  var mySwiper = new Swiper ('#concansel', {
		 		pagination: '.swiper-pagination',
		 		loop:true,
		 		autoplay:3000,
		 		speed:1000,	
		 	})
 		}
 	});
 	
//******************************点击计入购物车***********************************// 
   GoodsData =localStorage.getItem("GoodsData")? JSON.parse(localStorage.getItem("GoodsData")):[];
   //统计购物车货物数量
      if(GoodsData){  //每次刷新都要判断货物是否为空
      	AllCount = 0;
      	$.each(GoodsData, function(idx,item) {
			AllCount += parseInt(item.num);
		});
      }
    //显示
	$count.html(AllCount);
  
  
    //获取节点  点击加入购物车按钮，立即购买按钮
    var $btngroud = $('.detail_bar a');
    //设置放置货物信息的一个全局变量
    var GoodsData;
    var obj = {};
    
     //判断原购物车里面是否有相同信息
   var bGoods = true;
  
   $btngroud.eq(1).on('singleTap',function(){
 
        obj.num = 1;
		GoodsData =localStorage.getItem("GoodsData")? JSON.parse(localStorage.getItem("GoodsData")):[];
		$.each(GoodsData, function(idx,item){
			if(item.title == obj.title){
				var num = parseInt(item.num)+1;
				item.num = num;
				bGoods = false
			}
		});
		//如果信息不重复
		if(bGoods){
			GoodsData.push(obj);
		}
		AllCount = 0; //每次遍历前都要清空一下
		//统计购物车货物数量
		$.each(GoodsData, function(idx,item) {
			AllCount += parseInt(item.num);
		});
		$count.html(AllCount);
    	localStorage.setItem("GoodsData",JSON.stringify(GoodsData))
    	
    	alert("成功添加商品！")
    })
 	
 	//获取节点，详情与评论切换
 	
 	var $btnChanges = $('.search-bar div .tag');
 	var flag= false;
 	//详情页和评论页左右切换
 	var mySwiper1 = new Swiper ('#all_content', {
		         freeMode : false, 
		         onSlideChangeStart: function(){ 
		         if(!flag){
		         	 $btnChanges.eq(1).addClass('active').siblings('a').removeClass('active');
		             flag =!flag;
		         }else{
		         	$btnChanges.eq(0).addClass('active').siblings('a').removeClass('active');
		             flag =!flag;
		         }
			    
			 }
		 	})
 	//点击切换
    $btnChanges.on('singleTap',function(){
    	flag =!flag;
    	var index = $(this).index();  //获取下标
    	$(this).addClass('active').siblings('a').removeClass('active');
    	mySwiper1.slideTo(index, 1000, false);
    })

    //评论内容获取
    var data = new Date();
    var $list = $('.review_List');
    $.ajax({
    	type:'get',
    	url:"../data/ReView.json",
    	dataType:'json',
    	success:function(res){
    		$.each(res,function(idx,item){
    			var $NameDiv = $('<div/>').addClass('viewName');
	    		var $MainView = $('<div/>').addClass('main_view');
	    		var $li = $('<li/>');
	    		$('<img src='+item.imgs+'>').appendTo($NameDiv);
	    		$('<span/>').html(item.name).appendTo($NameDiv);
	    		$('<time/>').html(data.toLocaleDateString()+data.toLocaleTimeString()).appendTo($NameDiv);
	    		for(var i= 0;i <parseInt(item.good);i++){
	    	    	$('<span/>').addClass('iconfont icon-xing').appendTo($MainView);
	    		}
	    		$('<p/>').addClass('view').html(item.view).appendTo($MainView);
	    		$('<p/>').addClass('time').html("购买日期:"+item.time).appendTo($MainView);
	    		
	    		$NameDiv.appendTo($li);
	    		$MainView.appendTo($li);
	    		$li.appendTo($list);
    		})
    		
    	}
    })
    
    $(window).on('scroll',function(){
		var scrollTop = $(window).scrollTop();

		//显示回到顶部按钮
		if(scrollTop >= 500){
			$('.scroll_top').show();
		}else{
			$('.scroll_top').hide();
		}

	});

  //回到顶部
   $('.scroll_top').on('singleTap',function(){
		$('html,body').animate({'scrollTop':0});
	});

 })