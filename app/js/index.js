document.addEventListener("DOMContentLoaded",function(){
	
  	//轮播图S
    var swiper = new Swiper('.swiper-container', {
    	//页面高亮
        pagination: '.swiper-pagination',
        //图片居中显示
        centeredSlides: true,
        //页面点击效果
        paginationClickable: true,
        //自动轮播
        autoplay: 3000,
        autoplayDisableOnInteraction: false,
        //loop,设置为true 则开启loop模式,用于无限循环切换。
    	loop:true
    });
    
//  //json数据加载
//	var xhr=new XMLHttpRequest();
//	
//	xhr.onreadystatechange=function(){
//		if(xhr.readyState === 4 && xhr.status === 200){
//			var ele = JSON.parse(xhr.responseText);
//			datalist = ele;
//			
//			var oindex_josn=document.querySelector(".index_json");
//			var ul = document.createElement("ul");
//			
//			ele.forEach(function(item,idx){
//				//创建节点
//				var li = document.createElement('li');
//				var img=document.createElement("img");
//				var oexplain=document.createElement("p");
//				var otitle=document.createElement("span");
//				var ocontent=document.createElement("span");
//				var oprice=document.createElement("p");
//				
//				//添加样式
//				img.src=item.url;
//				li.appendChild(img);
//				
//				otitle.innerHTML=item.title;
//				ocontent.innerHTML=item.content;
//				oprice.innerHTML=item.price;
//				oprice.classList.add("price");
//				
//				//添加入页面
//				oexplain.appendChild(otitle);
//				oexplain.appendChild(ocontent);
//				li.appendChild(oexplain);
//				oexplain.classList.add("explain");
//				
//				li.appendChild(oprice);
//				
//				
//				ul.appendChild(li);
//			});
//			//写入页面
//			oindex_josn.appendChild(ul);
//		}
//	}
//	xhr.open('get','data/index.json',true);
//	xhr.send(null);


    //json数据加载
	;$(function(){
		//图片淡入效果
		$("img").lazyload({effect:'fadeIn'});
		$(function(){
			var $index_json=$(".index_json");
			var $ul=$("<ul/>");
			
			$.ajaxSetup({
				url:"data/index.json",
				success:function(ele){
					ele.forEach(function(item,idx){
						//创建节点
						var $li=$("<li/>");
						var $img=$("<img/>");
						var $explain=$("<p/>");
						var $title=$("<span/>");
						var $content=$("<span/>");
						var $price=$("<p/>");
						//添加样式
						//添加图片淡入效果
						$img.attr({src:item.url}).attr({"data-original":item.url}).appendTo($li);
		
						$title.html(item.title).appendTo($explain);
						$content.html(item.content).appendTo($explain);
						$explain.addClass("explain").appendTo($li);
						$price.html(item.price).addClass("price").appendTo($li);
						$ul.append($li);
						$img.lazyload({ effect:'fadeIn'});
					})
					$ul.appendTo($index_json);
				}
			});
//			$.ajax();
			//懒加载
			$(window).on("scroll", function() {
				$index_json=$(".index_json");
				var sum=$index_json.find("li").length;
				var scrollTop = $(window).scrollTop();
				if(scrollTop >= $(document).height() - $(window).height() - 400) {
					if(sum<30){
						$.ajax();
					}
					
				}
			});
			
		})
		
	});
	
	
	
	//回到顶部
	window.onscroll=function(){
		var obackToTop=document.querySelector(".backToTop");
		var height=document.body.clientHeight/6;
		//滚动条与浏览器顶部的距离
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;	
		
		if(scrollTop>height){
			obackToTop.style.opacity=1;
		}else{
			obackToTop.style.opacity=0;
		}
	}
//		var $index_json=$(".index_json");
//	    $(function() {
//			$("img").lazyload({effect:'fadeIn'});
//			$index_json.find("img").attr({})
//			$index_json.find("img").lazyload({ effect:'fadeIn'});
//		});

});
