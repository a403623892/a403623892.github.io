window.onload = function() {
    var arrow = document.getElementById("d-arrow");  // 三角
    var wrap = document.getElementById("d-wrap");   // 大盒子
    var slide = document.getElementById("d-slide");
    var lis = slide.children[0].children;   // 获得所有的li
    var json = [  //  包含了5张图片里面所有的样式
        {
        //z-index: 1; top: 48px; left: 0px; width: 240px; height: 160px;
            width:240,
            height:160,
            top:48,
            left:0,
            opacity:20,
            z:2
        },
        {  
        //z-index: 2; top: 24px; left: 98px; width: 360px; height: 200px;
            width:360,
            height:200,
            top:24,
            left:98,
            opacity:80,
            z:2
        },
        {  
            //z-index: 3; top: 0px; left: 235px; width: 550px; height: 240px;
            width:550,
            height:240,
            top:0,
            left:235,
            opacity:100,
            z:3
        },
        { 
            //z-index: 2; top: 24px; left: 540px; width: 360px; height: 200px;
            width:360,
            height:200,
            top:24,
            left:540,
            opacity:80,
            z:2
        },
        {   
            //z-index: 1; top: 48px; left: 735px; width: 240px; height: 160px;
            width:240,
            height:160,
            top:48,
            left:735,
            opacity:20,
            z:1
        }
    ];
    wrap.onmouseover = function() {   // 鼠标经过显示 三角
        animate(arrow,{opacity:100});
    }
    wrap.onmouseout = function() {  // 鼠标离开 隐藏三角
        animate(arrow,{opacity:0});
    }
    move(); // 页面执行也调用一次
    // 两个按钮
    var flag = true;   // 用于函数节流
    var as = arrow.children;   // 2 个 a
    for(var k in as) {
        as[k].onclick = function() {
            // 点击的时候， 只做一件事情  ---- 交换json
            if(this.className == "prev") {  // 左侧按钮
                if(flag == true) {   // 实现按钮只能点击一次
                    move(true);
                    // flag = false;
                }
            }
            else
            {
              /*  当我们点击了 右侧按钮  ：
    把 数组里面的第一个值删掉 ，然后把这个值追加到 数组的最后面。
     json.push(json.shift());*/
            // 右侧按钮
               if(flag == true) {   // 实现按钮只能点击一次
                   move(false);
                   // flag = false;
               }
            }
        }
    }
    function move(x) {
        if(x != undefined) {   // 如果没有值传递过来，就应该  不执行 里面的语句直接遍历json
            if(x) {
                // 交换 反向json   左侧
                json.unshift(json.pop())
            }else {
                // 正向 json
                json.push(json.shift());
            }
        }
        // 交换完毕 json 之后，就要 循环执行一次
        for(var i=0;i<json.length;i++) {
            animate(lis[i],{
                width: json[i].width,
                top: json[i].top,
                left: json[i].left,
                opacity: json[i].opacity,
                height: json[i].height,
                zIndex: json[i].z
            },function(){ flag = true; })
        }
    }
}