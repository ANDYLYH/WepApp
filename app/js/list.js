
	$(function(){
		//导航栏点击事件
		var $nav_list=$(".nav_list");
		$nav_list.on("singleTap","li",function(){
			//先清除兄弟节点的点击样式
			$(this).siblings("li").removeClass("li_active");
			//添加点击样式
			$(this).addClass("li_active");
		});

		var $list_json=$(".list_json");
		var $ul=$(".json_1");
		var index_num = 1;
		
		//根据索引加载不同的数据
		var $nav_list=$(".nav_list");
		
		$nav_list.on("singleTap","li",function(){
			$ul.empty();
			var index=$(this).index()+1;
			JsonLoad(index);   //加载相对应的json文件	
	})
	JsonLoad(index_num);
	//点击跳转
	$('.list_json').on('singleTap','li',function(){
		var id=$(this).index();
		localStorage.setItem("id",id);
		window.location = 'details.html';
	})

	//封装一个加载json文件的函数	
    function JsonLoad(num){
    	$.ajax({
    		type:"get",
    		url:"../data/listjson_"+num+".json",
    		success:function(res){
    			res.forEach(function(item,idx){
					var $li=$("<li/>");
					var $img=$("<img/>");
					var $a = $('<a/>')
					$img.attr({src:item.url}).addClass("img").appendTo($a);
				    $("<span/>").html(item.typeExplain).addClass("typeExplain").appendTo($a);
					$li.addClass("json_li").append($a);
				    $ul.append($li);
				})
    			
    			$ul.appendTo($list_json);
    		}
    	});
    	
    }
        
})