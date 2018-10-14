// 内容中间-上部分
window.onload = function(){
	var tops = document.getElementById('content-center-top');
	var pic = document.getElementById('pic');
	var imgs = pic.children;
	var time = null;
	// console.log(top.scrollLeft);
	//自动走
	function automove(){
		clearInterval(time);
		var a = 0;
		var img8 = imgs[0].offsetWidth*4+110;
		console.log(img8);
		clearInterval(time);
		time = setInterval(function(){
			a++;
			// console.log(a);
			if(a>=img8){
				a = 0;
				// alert(a);
			}
			tops.scrollLeft = a;
			// clearInterval(time);
			// console.log(scrollLeft);
			
		},8)
		// 鼠标悬浮事件
		pic.onmouseover = function(){
			clearInterval(time);
		}
		pic.onmouseout = function(){
			time = setInterval(function(){
			a++;
			// console.log(a);
			if(a>=img8){
				a = 0;
				// alert(a);
			}
			tops.scrollLeft = a;
			// clearInterval(time);
			// console.log(scrollLeft);
			
		},8)
		}
	}
	automove();
}

// 悬浮事件
	var a = document.getElementById('middle-center1');
	var b = document.getElementById('middle-center2');
	a.onmouseover = function(){
		b.style.display = 'block';
		a.style.background = '#EEEEEE';
	} 
	a.onmouseout = function(){
		b.style.display = 'none';
		a.style.background = '#FFFFFF';
	}

// 发表评论
	var con = document.getElementById('middle-center7-bottom-right');
	var num = document.getElementById('num');
	// var con1 = document.getElementById('content1-right');
	var text = document.getElementById('middle-center7-bottom1-1');
	var btn = document.getElementById('middle-center7-bottom1-2');
	var num = document.getElementById('num');
	// 给评论添加点击事件
	btn.onclick = function(){

		// 判断输入的字符串大于200个字的时候，则截取前200个字
		if(con.value.length>200){
			con.value = con.value.substring(0,200);
		}
		// 判断用户是否输入了空内容
		if(con.value == ''){
			alert('评论内容不能为空!');
			num.innerHTML = 200;
		}
	}
	con.value.length = '';
		// 对输入框进行监测
		var time = null;
		// 获取鼠标在textarea时的焦点，监听鼠标输入事件
		con.onfocus = function(){
			console.log(1111);
			// 设置计时器，每隔50毫秒监听一次
			time = setInterval(function(){
				// 定义输入字符的长度
				var len = con.value.length;
				// 还能输入的长度
				var shuru = 200-len;
				if(shuru<0){
					text.style.color = 'red';
				}else if(shuru>=0){
					text.style.color = '#9C9C9C';
				}
				// 传值给定义好的num.innerHTML;
				num.innerHTML = shuru;
			},50)
		}