(function(){
	var nav = document.getElementById('nav');
	var liArr = nav.getElementsByTagName('ul')[0].children;
	var span = nav.getElementsByTagName('span');
	for (var i = 0; i < liArr.length; i++) {
		liArr[i].index =i;
		liArr[i].onmouseover = function(){
			this.className = "show";
			span[this.index].style.display = 'block';
			//获取索引值
			span[this.index].index =this.index;
			span[this.index].onmouseover = function(){
				this.style.display="block";
				liArr[this.index].className = "show";
				//再次获取索引值。。
				this.getElementsByTagName('i')[0].index = this.index;
				this.getElementsByTagName('i')[0].onclick = function(){
					span[this.index].style.display = 'none';
				}
			}
		}
		liArr[i].onmouseout = function(){
			this.className = "active";
			span[this.index].style.display = 'none';
			span[this.index].index =this.index;
			span[this.index].onmouseout = function(){
				this.style.display="none";
				liArr[this.index].className = "active";
			}
		}
	}
	
}())