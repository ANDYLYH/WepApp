document.addEventListener('DOMContentLoaded',function(){
                  $(function(){
                
                                    
            	                                                  
                           var indentgood = localStorage.getItem('dlist');
                        	var inde  = JSON.parse(indentgood); 
                              if(inde){
                         for(var i=0;i<inde.length;i++){
                              var ep = $('<p>店铺</p>');
                              var espan = $('<span>交易成功</span>');
                              var eimg = $('<img src="'+inde[i].image+'">');
                              var ep2 = $('<p>'+inde[i].title+'</p>');
                              var espan2=$('<span>'+inde[i].price+'</span>');
                              var eh4 = $('<h4>x'+inde[i].num+'</h4>');
                              var ep3 = $('<p>共'+inde[i].num+'商品，合计:￥'+inde[i].price+'</p>');
                              var ea1 = $('<a>查看物流</a>').addClass('in_look');
                              var ea2 = $('<a>删除</a>').addClass('in_del');
                              var ea3 = $('<a>付款</a>').addClass('in_pay');
                              var eshangping1 = $('<div/>').addClass('shangping1');
                              var eshangping2 = $('<div/>').addClass('shangping2');
                              var eshangping3 = $('<div/>').addClass('shangping3');
                              var eshangping4 = $('<div/>').addClass('shangping4');   
                              var eli = $("<li/>");         
                              ep.appendTo(eshangping1);
                              espan.appendTo(eshangping1);
                              eimg.appendTo(eshangping2);
                              ep2.appendTo(eshangping2);
                              espan2.appendTo(eshangping2);
                              eh4.appendTo(eshangping2);
                              ep3.appendTo(eshangping3);
                              ea1.appendTo(eshangping4);
                              ea2.appendTo(eshangping4);
                              ea3.appendTo(eshangping4);                
                              eshangping1.appendTo(eli);
                              eshangping2.appendTo(eli);
                              eshangping3.appendTo(eli);
                              eshangping4.appendTo(eli);
                              eli.appendTo($('.in_ul1'));
                        }  
                              }else{
                                    return;
                              }
                  
                                    $('.in_del').on('tap',function(){
                                                $(this).parent().parent().remove();
                                                var xxx = $(this).index();
                                                // console.log(xxx);
                                                inde.splice(xxx-1,xxx);
                                                // console.log(inde.splice(xxx-1,xxx));
                                                console.log(inde.length);
                                                var x1 = inde.slice(0,inde.length);
                                                console.log(x1);
                                                localStorage.setItem("dlist",JSON.stringify(x1));
                                     })             
                  })
})