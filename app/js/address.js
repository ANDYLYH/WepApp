document.addEventListener('DOMContentLoaded',function(){
	var eSelect=document.querySelectorAll('select');
	var xhr=new XMLHttpRequest();
	xhr.open('GET','../data/province.json',true);
	xhr.send(null);
	xhr.onreadystatechange=function(){
		if(xhr.status==200 && xhr.readyState==4){
			var res=JSON.parse(xhr.responseText);
			res.forEach(function(item,idx){
				var option=document.createElement('option');
				option.innerHTML=item.name;
				eSelect[0].appendChild(option); 
				
			})
			$('select').eq(0).on('blur',function(){
			  
			  for(var i=0;i<res.length-1;i++){ 
				if($('select').eq(0).val()==res[i].name){
					$($('select').eq(1)).html('');
					var arr=res[i].cities;
					arr.forEach(function(item,idx){
						var option=document.createElement('option');
			 	        option.innerHTML=item; 
				        eSelect[1].appendChild(option); 
					})
				 }
			  }
			
			})
			
		}
		
	}
})