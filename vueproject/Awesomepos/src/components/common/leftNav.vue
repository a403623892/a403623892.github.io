<template>
  <div class="left-nav" id="left-nav">
    <ul>
      <li>
       <i class="iconfont icon-hanbao"></i>
       <div>收银</div>
      </li>
      <li>
        <i class="iconfont icon-kefuyouxian"></i>
        <div>操作</div>
        </li>
      <li>
       <i class="iconfont icon-liebiao"></i>
       <div>菜单</div>
      </li>
      <li>
        <i class="iconfont icon-zuanshi"></i>
        <div>会员</div>
      </li>
      <li>
       <i class="iconfont icon-shezhi"></i>
       <div>设置</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'left-nav',
  mounted(){
    var orderHeight = document.documentElement.clientHeight;
    document.getElementById('left-nav').style.height = orderHeight + "px";
  }
}
</script>

<style>
.left-nav{
  width: 5%;
  height: 100%;
  float:left;
  background-color: #545c64;
  text-align: center
}
.left-nav ul li{
  float: left;
  width: 100%;
  line-height: 60px;
  cursor: pointer;
  padding-top: 10px
}
.left-nav ul li div{
  line-height: 20px;
  margin-top: -20px;
  font-size: 12px;
  color: #fff;
}
.left-nav ul li i{
  font-size:24px;
  color: #fff; 
}
</style>
