// 鼠标悬浮事件 大阴影
window.onload = function(){
	// var con_1 = document.getElementsByClassName('con_1');
	// var con_1_1 = document.getElementsByClassName('con_1_1')
	var con_1_1 = document.getElementById('con_1_1');
	var con_1 = document.getElementById('con_1');
	var con_2 = document.getElementById('con_2');
	var con_2_1 = document.getElementById('con_2_1');
	var con_3 = document.getElementById('con_3');
	var con_3_1 = document.getElementById('con_3_1');
	// 添加鼠标悬浮事件
	
	con_1.onmouseover = function(){
		con_1_1.style.display = 'block';
	
	}
	con_1.onmouseout = function(){
		con_1_1.style.display = 'none';
		// alert('1');
	}
	con_2.onmouseover = function(){
		con_2_1.style.display = 'block';
	}
	con_2.onmouseout = function(){
		con_2_1.style.display = 'none';
	}
	con_3.onmouseover = function(){
		con_3_1.style.display = 'block';
	}
	con_3.onmouseout = function(){
		con_3_1.style.display = 'none';
	}
	// 获取css样式
	function getStyle(obj,style){
		if(window.getComputedStyle){
			return getComputedStyle(obj,'null')[style];
		}else{
			obj.currentStyle[style];
		}

	}

}