//加载完毕，获取DOM元素执行代码
window.onload = function() {
	//顶部的通栏 滚动效果
	headerScroll();
	//倒计时效果
	cutDownTime();
	//轮播图效果
	banner();
}
//1、获取顶部通栏高度，获取banner高度
//2、获取卷去高度
//3、根据卷去高度改变顶部通栏背景透明度从0-1，超过等于1
function headerScroll(){
	var navDom = document.querySelector(".jd_nav");
	var maxDistance =navDom.offsetTop+navDom.offsetHeight;
	window.onscroll = function(){
		//2、获取卷去高度
		var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
		// 卷去高度除以总距离百分比
		var persent = scrollTop/maxDistance;
		var headerDom = document.querySelector('.jd_header');
		if (persent>1) {
			persent = 1;
		}
		headerDom.style.backgroundColor = 'rgba(201,21,35,'+persent+')';
	}
}

function cutDownTime(){
	var sumTime = 3;
	var sec = sumTime*3600;
	var liArr = document.querySelectorAll('.main_content:nth-child(1) .content_top li');
	var timer = setInterval(function(){
		sec--;
		if (sec<=0) {
			clearInterval(timer);
			return;
		}
		var currentTime = Math.floor(sec/3600);
		var minTime = Math.floor(sec%3600/60);
		var secTime =Math.floor(sec%60);
		liArr[0].innerHTML = Math.floor(currentTime/10);
		liArr[1].innerHTML = currentTime%10;
		liArr[3].innerHTML = Math.floor(minTime/10);
		liArr[4].innerHTML = minTime%10;
		liArr[6].innerHTML = Math.floor(secTime/10);
		liArr[7].innerHTML = secTime%10;
	},1000);
}

// function banner(){
// 	//获取变量
// 	//屏幕宽度
// 	var width = document.body.offsetWidth;
// 	//获取轮播图的ul
// 	var moveUl =document.querySelector('.banner_images');
// 	//索引的li标签
// 	var indexLiArr = document.querySelectorAll('.banner_index li');
// 	var index =1;
// 	var timeId = setInterval(function(){
// 		index++;
// 		if (index>8) {
// 			index = 1;
// 		}
// 		moveUl.style.transition = 'all .3s';
// 		moveUl.style.transform = 'translateX('+(index*width*-1)+'px)';
// 		for (var i = 0; i < indexLiArr.length; i++) {
// 		indexLiArr[i].className="";
// 		}
// 		indexLiArr[index-1].className = 'current';
// 	},1000);
// }

// function banner2(){
// 	var width = document.body.offsetWidth;
// 	var moveUl = document.querySelector('.banner_images');
// 	moveUl.style.transition = 'all .3s';
// 	var indexLiArr = document.querySelectorAll('.banner_index li');
// 	var index = 1;
// 	var timeId = setInterval(function(){
// 		index++;
// 		if (index>9) {
// 			index =1;
// 			moveUl.style.transition="";
// 		}
// 		moveUl.style.transform = "translateX("+(index*width*-1)+"px)";
// 	},1000);
// }

function banner(){
	var width = document.body.offsetWidth;
	var moveUl = document.querySelector(".banner_images");
	var indexLiArr = document.querySelectorAll('.banner_index li');
	var index = 1;
	var timeId = setInterval(function(){
		index++;
		moveUl.style.transition = 'all .3s';
		moveUl.style.transform = 'translateX('+(index*width*-1)+'px)';
	},1000);
	moveUl.addEventListener('webkitTransitionEnd',function(){
		if (index>8) {
			index = 1;
			moveUl.style.transition = "";
			moveUl.style.transform = 'translateX('+(index*width*-1)+'px)';
		}else if(index<1){
			index = 8;
			moveUl.style.transition = "";
			moveUl.style.transform = 'translateX('+index*width*-1+'px)';
		}
		for (var i = 0; i < indexLiArr.length; i++) {
			indexLiArr[i].className = '';
		}
		indexLiArr[index-1].className = 'current';
	});


//注册三个touch 事件
//定义变量 记录 开始的X

	var startX = 0;

	var moveX = 0;

	var distanceX = 0;

	moveUl.addEventListener('touchstart',function (event) {
		// 关闭定时器
		clearInterval(timeId);
		console.log('touchstart');
		// 关闭过渡效果
		moveUl.style.transition = '';

		// 记录开始值
		startX = event.touches[0].clientX;

	})

	moveUl.addEventListener('touchmove',function (event) {
		// 计算移动的值
		moveX = event.touches[0].clientX - startX;
		console.log('as');
		// 移动ul
		// 默认的移动值是 index*-1*width 
		moveUl.style.transform = 'translateX('+(moveX+index*-1*width)+'px)';
	})

	moveUl.addEventListener('touchend',function(event){
		var maxDistance = width/3;
		console.log('touchend');
		if (Math.abs(moveX)>maxDistance) {
			if(moveX>0){
				index--;
			}else{
				index++;
			}
			moveUl.style.transition = 'all .3s';
			moveUl.style.transform = 'translateX('+(index*-1*width)+'px)';
		}else{
			moveUl.style.transition = 'all .3s';
			moveUl.style.transform = 'translateX('+(index*-1*width)+'px)';
		}
		timeId = setInterval(function(){
			index++;
			moveUl.style.transition = 'all .3s';
			moveUl.style.transform ='translateX('+(index*-1*width)+'px)';
		},1000)
	})

}