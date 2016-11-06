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
						var $a = $('<a/>')
						var $explain=$("<p/>");
						var $title=$("<span/>");
						var $content=$("<span/>");
						var $price=$("<p/>");
						//添加样式
						//添加图片淡入效果
						$img.attr({src:item.url}).attr({"data-original":item.url}).appendTo($a);
		                $a.attr({href:'html/list.html'}).appendTo($li);
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

});
