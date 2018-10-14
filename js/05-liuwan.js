// 绑定点击事件
$('div').bind('click',function(){
	var i = $('div').index(this);
	$('div').eq(i).addClass('dasha').siblings().removeClass('dasha');
})

// 台北热门
var top1 = document.getElementById('top-border1');
var top2 = document.getElementById('top-border2');
var top3 = document.getElementById('top-border3');
var oDiv = document.getElementById('con2-left-top');
var oDiv1 = document.getElementById('img1');
var oDiv2 = document.getElementById('img2');
// console.log(oDiv);
// 鼠标悬浮
oDiv.onmouseover = function(){
	top1.style.display = 'block';
}
oDiv.onmouseout = function(){
	top1.style.display = 'none';
}
// 获取css样式表
function getStyle(ogj,stylke){
	if(window.getComputedStyle){
		return getComputedStyle(obj,'null')[style];
	}else{
		obj.currentStyle[style];
	}
}