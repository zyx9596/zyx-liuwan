// 画册边框效果
window.onload = function(){
	var album = document.getElementById('album-2');
	var shadow = document.getElementById('shadow-box');
	// console.log(typeof shadow);
	// 添加悬浮事件
	album.onmouseover = function(){
		shadow.style.display = 'block';
	}
	album.onmouseout = function(){
		shadow.style.display = 'none';
	}
}