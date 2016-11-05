//nav左侧导航条
document.addEventListener("DOMContentLoaded",function(){
	//导航栏点击事件
	
	var $nav_list=$(".nav_list");
	$nav_list.on("singleTap","li",function(){
		//先清除兄弟节点的点击样式
		$(this).siblings("li").removeClass("li_active");
		//添加点击样式
		$(this).addClass("li_active");
	});
	
	$(".menudata").on('singleTap',function(){
		$('.menu').toggle();
	});
});

//json数据加载
;$(function(){
	//添加样式
	$(function(){
		var $list_json=$(".list_json");
		var $ul=$("<ul/>");
		
		$.ajaxSetup({
			success:function(ele){
				ele.forEach(function(item,idx){
					var $li=$("<li/>");
					var $img=$("<img/>");
					var $typeExplain=$("<span/>");
					var $a=$("<a/>")
					
					$img.attr({src:item.url}).addClass("img").appendTo($a);
					
					//将商品id存入本地存储
					$a.on("touchstart",function(){
						$(this).attr({id:"idname"}).attr({href:item.href}).addClass("json_a");
						var id=$(this).parent().index();
						localStorage.setItem("id",id);
					
					});
					
					$typeExplain.html(item.typeExplain).addClass("typeExplain").appendTo($a);
				    
					$li.addClass("json_li").append($a);
				    $ul.addClass("json_1").append($li);
				
				})
				$ul.appendTo($list_json);
				
			}
		});
		//加载数据
		$.ajax({url:"../data/listjson_1.json"});
		
//		//懒加载
//		$(window).on("scroll", function() {
//			$list_json=$(".list_json");
//			var sum=$list_json.find("li").length;
//			var scrollTop = $(window).scrollTop();
//			if(scrollTop >= $(document).height() - $(window).height() - 400) {
//				if(sum<100){
//					$.ajax({url:"../data/listjson_1.json"});
//				}
//				
//			}
//		});
		
		//根据索引加载不同的数据
		var $nav_list=$(".nav_list");
		
		$nav_list.on("singleTap","li",function(){
			var $ul_load=$(".json_1");
			$ul_load.empty();
			
			var index=$(this).index()+1;
			$.ajax({url:"../data/listjson_"+index+".json"});
			
			//懒加载
//			$(window).on("scroll", function() {
//				var sum=$list_json.find("li").length;
//				var scrollTop = $(window).scrollTop();
//				if(scrollTop >= $(document).height() - $(window).height() - 400) {
//					if(sum<100){
//						$.ajax({url:"../data/listjson_"+index+".json"});
//					}
//				}
//			});	
			
	})
        
	})
});