//无缝轮播
//步骤：
//获取相关元素,js创建ol中li标签
(function(){
	var banner = document.getElementById("banner");
    var screen = banner.firstElementChild || banner.firstChild;
    var imgWidth = screen.offsetWidth;
    var ul = screen.firstElementChild || screen.firstChild;
    var ol = screen.children[1];
    var div = screen.lastElementChild || screen.lastChild;
    //复制第一张图
    var ulNewLi = ul.children[0].cloneNode(true);
    ul.appendChild(ulNewLi);
    //js创建ol中li标签
    for(var i=0;i<ul.children.length-1;i++){
        var olNewLi = document.createElement("li");
        ol.appendChild(olNewLi)
    }
    var olLiArr = ol.children;
    olLiArr[0].className = "current";
    //鼠标移入ol切换图片
    for(var i=0;i<olLiArr.length;i++){
        //自定义属性，把索引值绑定到元素的index属性上
        olLiArr[i].index = i;
        olLiArr[i].onmouseover = function () {
            for(var j=0;j<olLiArr.length;j++){
                olLiArr[j].className = "";
            }
            this.className = "current";
            key = square = this.index;
            animate(ul,-this.index*imgWidth);
        }
    }
    //定时器
    var timer = setInterval(autoPlay,3000);
    var key = 0;
    var square = 0;
    function autoPlay(){
        key++;
        if(key>olLiArr.length){
            ul.style.left = 0;
            key = 1;
        }
        animate(ul,-key*imgWidth);
        square++;
        if(square>olLiArr.length-1){
            square = 0;
        }
        for(var i=0;i<olLiArr.length;i++){
            olLiArr[i].className = "";
        }
        olLiArr[square].className = "current";
    }
    //鼠标移入清除定时器
    banner.onmouseover = function () {
        div.style.display = "block";
        clearInterval(timer);
    }
    //鼠标移出开启定时器
    banner.onmouseout = function () {
        div.style.display = "none";
        timer = setInterval(autoPlay,3000);
    }
    function animate(ele,target){
        clearInterval(ele.timer);
        var speed = 0;
        ele.timer = setInterval(function () {
            speed  = (target - ele.offsetLeft)/8;
            speed = speed > 0 ? Math.ceil(speed):Math.floor(speed);
            if(ele.offsetLeft == target){
                ele.style.left = target + "px";
                clearInterval(ele.timer);
            }
            ele.style.left = ele.offsetLeft + speed + "px";
            
        },30)
    }
}());
