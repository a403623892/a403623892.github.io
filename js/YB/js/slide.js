(function(){
    var screen =document.getElementById('slider-firstMain'),
        list = screen.children[0],
        listArr = list.getElementsByTagName('div'),
        ol = screen.children[3],
        imgWidth = screen.offsetWidth,
        focusPrev = document.getElementById('focus-prev'),
        focusNext = document.getElementById('focus-next');
    list.style.width = listArr.length*imgWidth + 'px';
    var olLiArr = ol.children;
    olLiArr[0].className = "focus-pagination-active";
    for (var i = 0; i < olLiArr.length; i++) {
        olLiArr[i].index = i;
        olLiArr[i].onclick = function() {
            for (var j = 0; j < olLiArr.length; j++) {
                olLiArr[j].className = "";
                listArr[j].className = 'focus-slide'
            }
            this.className = "focus-pagination-active";
            listArr[this.index].className = "focus-slide current";
            key = square = this.index;
            act(list, {
                marginLeft: -this.index * imgWidth
            });
        }
    }
    var timer = setInterval(autoPlay, 3000);
    var key = 0;
    var square = 0;

    screen.onmouseover = function() {
        focusPrev.className = 'focus-prev';
        focusNext.className = 'focus-next';
        clearInterval(timer);
    }
    screen.onmouseout = function() {
        focusPrev.className = 'focus-prev hide';
        focusNext.className = 'focus-next hide';
        timer = setInterval(autoPlay, 3000);
    }
    focusPrev.onclick = function() {
        key--;
        if (key < 0) {
            list.style.marginLeft = -imgWidth * (olLiArr.length) + "px";
            key = olLiArr.length - 1;
        }
        act(list, {
            marginLeft: -key * imgWidth
        });
        square--;
        if (square < 0) {
            square = olLiArr.length - 1;
        }
        changeStyle(square);
    }
    focusNext.onclick = function() {
        autoPlay();
    }

    function changeStyle(square){
        for (var i = 0; i < olLiArr.length; i++) {
            olLiArr[i].className = "";
            listArr[i].className = 'focus-slide'
        }
        olLiArr[square].className = "focus-pagination-active";
        listArr[square].className = "focus-slide current";
    }

    function autoPlay() {
        key++;
        if (key > olLiArr.length) {
            list.style.marginLeft = 0;
            key = 1;
        }
        act(list, {
            marginLeft: -key * imgWidth
        });
        square++;
        if (square > olLiArr.length - 1) {
            square = 0;
        }
        changeStyle(square);
    }
    function act(obj, json, fn) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function() {
            var stop = true;
            for (var attr in json) {
                var cur = 0;
                if (attr == 'opacity') {
                    cur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
                }else{
                    cur = parseInt(getStyle(obj, attr));  
                }
                var speed = 0;
                speed = (json[attr] - cur) / 8;
                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                if (cur != json[attr]) {
                    stop = false;
                }
                cur += speed;
                if (attr == 'opacity') {
                    obj.style.filter = 'alpha(opacity:' + cur + ')';
                    obj.style.opacity = cur / 100;
                }
                obj.style[attr] = cur + 'px';
                if (stop) {
                    clearInterval(obj.timer);
                    fn&&fn();
                }
            }
        }, 30);
    }

    function getStyle(obj, attr) {
        if (obj.currentStyle) {
            return obj.currentStyle[attr];
        } else {
            return getComputedStyle(obj, false)[attr];
        }
    }
})()
