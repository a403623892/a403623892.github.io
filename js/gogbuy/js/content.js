(function(){
	var content = document.getElementById("content");
	var ol = document.getElementById('arrow');
	var coArr = content.children[0].children;
	var olLiArr = ol.children;
	var target = 0;var leader = 0;var timer = null;
	var current = 0;
	var floor = ["那家优选","特产小吃","黔茶茗品","醉美贵州","生态黔椒","高原粮油","民族工艺","肉禽蛋类"];
	for(var i=0;i<coArr.length;i++){
        //属性绑定索引值
        olLiArr[i].index = i;

        olLiArr[i].onmouseover = function(){
        	for (var i = 0; i < floor.length; i++) {
        		olLiArr[i].innerHTML = (i+1)+"F";
				olLiArr[i].style.backgroundColor = '#fff';
				olLiArr[i].style.borderColor = '#dedede';
        	}
        	this.innerHTML = floor[this.index];
			this.style.backgroundColor = '#fdeeee';
			this.style.borderColor = '#ed5759';
        }
        olLiArr[i].onmouseout = function(){
        	for (var i = 0; i < floor.length; i++) {
        		olLiArr[i].innerHTML = (i+1)+"F";
				olLiArr[i].style.backgroundColor = '#fff';
				olLiArr[i].style.borderColor = '#dedede';
        	}
        	olLiArr[current].innerHTML = floor[current];
			olLiArr[current].style.backgroundColor = '#fdeeee';
			olLiArr[current].style.borderColor = '#ed5759';
        }
        //循环绑定，为每一个li绑定点击事件
        olLiArr[i].onclick = function () {
        	//点击改变颜色
        	current =this.index;
        	for (var i = 0; i < olLiArr.length; i++) {
        		olLiArr[i].innerHTML = (i+1)+"F";
				olLiArr[i].style.backgroundColor = '#fff';
				olLiArr[i].style.borderColor = '#dedede';
        	}
        	this.innerHTML = floor[this.index];
			this.style.backgroundColor = '#fdeeee';
			this.style.borderColor = '#ed5759';
            //获取目标位置
                //获取索引值。
            target = coArr[this.index].offsetTop;
            //要用定时器，先清除定时器
            clearInterval(timer);
            //利用缓动动画原理实现屏幕滑动
            timer = setInterval(function () {
                //获取步长
                var step = (target-leader)/10;
                //二次处理步长
                step = step>0?Math.ceil(step):Math.floor(step);
                //屏幕滑动
                leader = leader + step;
                window.scrollTo(0,leader);
                //清除定时器
                if(Math.abs(target-leader)<=Math.abs(step)){
                    window.scrollTo(0,target);
                    clearInterval(timer);
                }
            },25);
        }
    }

        //用scroll事件模拟盒子距离最顶端的距离。
    window.onscroll = function () {
        //每次屏幕滑动，把屏幕卷去的头部赋值给leader,模拟获取显示区域距离顶部的距离
        leader = scroll().top;
        if (leader<coArr[0].offsetTop) {
			ol.style.display = "none";
		}else if (leader<coArr[1].offsetTop) {
			ol.style.display = "block";
			current = 0;
			for (var i = 0; i < floor.length; i++) {
        		olLiArr[i].innerHTML = (i+1)+"F";
				olLiArr[i].style.backgroundColor = '#fff';
				olLiArr[i].style.borderColor = '#dedede';
        	}
        	olLiArr[current].innerHTML = floor[current];
			olLiArr[current].style.backgroundColor = '#fdeeee';
			olLiArr[current].style.borderColor = '#ed5759';
		}else if (leader<coArr[2].offsetTop) {
			ol.style.display = "block";
			current = 1;
			for (var i = 0; i < floor.length; i++) {
        		olLiArr[i].innerHTML = (i+1)+"F";
				olLiArr[i].style.backgroundColor = '#fff';
				olLiArr[i].style.borderColor = '#dedede';
        	}
        	olLiArr[current].innerHTML = floor[current];
			olLiArr[current].style.backgroundColor = '#fdeeee';
			olLiArr[current].style.borderColor = '#ed5759';
		}else if (leader<coArr[3].offsetTop) {
			ol.style.display = "block";
			current = 2;
			for (var i = 0; i < floor.length; i++) {
        		olLiArr[i].innerHTML = (i+1)+"F";
				olLiArr[i].style.backgroundColor = '#fff';
				olLiArr[i].style.borderColor = '#dedede';
        	}
        	olLiArr[current].innerHTML = floor[current];
			olLiArr[current].style.backgroundColor = '#fdeeee';
			olLiArr[current].style.borderColor = '#ed5759';
		}else if (leader<coArr[4].offsetTop) {
			ol.style.display = "block";
			current = 3;
			for (var i = 0; i < floor.length; i++) {
        		olLiArr[i].innerHTML = (i+1)+"F";
				olLiArr[i].style.backgroundColor = '#fff';
				olLiArr[i].style.borderColor = '#dedede';
        	}
        	olLiArr[current].innerHTML = floor[current];
			olLiArr[current].style.backgroundColor = '#fdeeee';
			olLiArr[current].style.borderColor = '#ed5759';
		}else if (leader<coArr[5].offsetTop) {
			ol.style.display = "block";
			current = 4;
			for (var i = 0; i < floor.length; i++) {
        		olLiArr[i].innerHTML = (i+1)+"F";
				olLiArr[i].style.backgroundColor = '#fff';
				olLiArr[i].style.borderColor = '#dedede';
        	}
        	olLiArr[current].innerHTML = floor[current];
			olLiArr[current].style.backgroundColor = '#fdeeee';
			olLiArr[current].style.borderColor = '#ed5759';
		}else if (leader<coArr[6].offsetTop) {
			ol.style.display = "block";
			current = 5;
			for (var i = 0; i < floor.length; i++) {
        		olLiArr[i].innerHTML = (i+1)+"F";
				olLiArr[i].style.backgroundColor = '#fff';
				olLiArr[i].style.borderColor = '#dedede';
        	}
        	olLiArr[current].innerHTML = floor[current];
			olLiArr[current].style.backgroundColor = '#fdeeee';
			olLiArr[current].style.borderColor = '#ed5759';
		}else if (leader<coArr[7].offsetTop) {
			ol.style.display = "block";
			current = 6;
			for (var i = 0; i < floor.length; i++) {
        		olLiArr[i].innerHTML = (i+1)+"F";
				olLiArr[i].style.backgroundColor = '#fff';
				olLiArr[i].style.borderColor = '#dedede';
        	}
        	olLiArr[current].innerHTML = floor[current];
			olLiArr[current].style.backgroundColor = '#fdeeee';
			olLiArr[current].style.borderColor = '#ed5759';
		}else if (leader<coArr[7].offsetTop+100) {
			ol.style.display = "block";
			current = 7;
			for (var i = 0; i < floor.length; i++) {
        		olLiArr[i].innerHTML = (i+1)+"F";
				olLiArr[i].style.backgroundColor = '#fff';
				olLiArr[i].style.borderColor = '#dedede';
        	}
        	olLiArr[current].innerHTML = floor[current];
			olLiArr[current].style.backgroundColor = '#fdeeee';
			olLiArr[current].style.borderColor = '#ed5759';
		}else if(leader>coArr[7].offsetTop+100){
			ol.style.display = "none";
		}
		// console.log(coArr[7].offsetTop)
    }
    function scroll() {  // 开始封装scrollTop
    if(window.pageYOffset != null) {  // ie9+ 高版本浏览器
        // 因为 window.pageYOffset 默认的是  0  所以这里需要判断
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    }
    else if(document.compatMode === "CSS1Compat") {    // 标准浏览器   来判断有没有声明DTD
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }
    return {   // 未声明 DTD
        left: document.body.scrollLeft,
        top: document.body.scrollTop
    }
}
}())