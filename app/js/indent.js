
$(function(){
	   //获取已付款的商品信息  
	   var indentgood = localStorage.getItem('dlist')?JSON.parse(localStorage.getItem('dlist')):[];
	   
	   var $Order_List = $('.order_list');
	   if(indentgood.length){
	   	    console.log(11)
	   	    var all_num = 0;
	   	    var all_price = 0; 
	   	    var $goods_box = $('<li/>'); 
	   	    //头部  标题
	   	    var etop1 = $('<p>店铺1</p>');
          var etop2 = $('<span>交易成功</span>');
          var $goods_content1 = $('<div/>').addClass('shangping1');
          etop1.appendTo($goods_content1);
          etop2.appendTo($goods_content1);
          $goods_content1.appendTo($goods_box); 
           //添加图片 ，标题 ， 单价 ，数量
          for(var i = 0; i < indentgood.length ;i++){
          	 var $goods_content2 = $('<div/>').addClass('shangping2');
          	 $('<img src="'+indentgood[i].image+'">').appendTo($goods_content2);//商品图片
             $('<p>'+indentgood[i].title+'</p>').appendTo($goods_content2);
             $('<span>'+indentgood[i].price+'</span>').appendTo($goods_content2);
             $('<h4>&times;'+indentgood[i].num+'</h4>').addClass('num_count').appendTo($goods_content2);
             all_num += indentgood[i].num; //统计数量
             all_price += indentgood[i].price*indentgood[i].num;//统计价格
          	 $goods_content2.appendTo($goods_box); 
          }
     
          //统计总价
          var $goods_content3 = $('<div/>').addClass('shangping3');
          $('<p>共'+all_num+'商品，合计:&yen;'+all_price+'</p>').appendTo($goods_content3);
          $goods_content3.appendTo($goods_box); 

          //底部  查看物流，删除，付款几个按钮
          var $goods_content4 = $('<div/>').addClass('shangping4');
          $('<a>查看物流</a>').appendTo($goods_content4);
          $('<a class="order_del">删除</a>').appendTo($goods_content4);
          $('<a>付款</a>').appendTo($goods_content4);
          $goods_content4.appendTo($goods_box); 
          
          $goods_box.appendTo($Order_List);
	   }else{
	   	return;
	   }
	
	  //删除订单
    $('.order_del').on('singleTap',function(){
            $(this).parent().parent().remove(); //删除点击下的li
           var step_num = $(this).parent().parent().index();//获取索引
           indentgood.splice(step_num,1);//删除对应的内容
           localStorage.setItem("dlist",JSON.stringify(indentgood)); //重新设置订单剩下的内容
         })      
	
})
