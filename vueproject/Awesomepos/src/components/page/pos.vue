<template>
  <div class="pos">
    <el-row>
    	<el-col :span='7'>
			<el-tabs type="border-card" id="border-card">
			  <el-tab-pane label="点餐">
				<el-table
				    :data="tableData3"
				    style="width: 100%"
				    height='350'
				    >
				    <el-table-column
				      prop="goodsName"
				      label="商品名称"
				      width="100">
				    </el-table-column>
				    <el-table-column
				      prop="count"
				      label="数量"
				      width="60">
				    </el-table-column>
				    <el-table-column
				      prop="price"
				      label="金额"
				      width="50">
				    </el-table-column>
				    <el-table-column
				      fixed="right"
				      label="操作"
				      width="90">
				      <template slot-scope="scope">
			            <el-button type="text" size="small" @click="remove(scope.row)">删除</el-button>
			            <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
			    	  </template>
				    </el-table-column>
				  </el-table>
				  <div class="total">
				  	<span>数量：{{totalCount}}</span><span>金额：￥{{totalMoney}}</span>
				  </div>
				  <div class="order-btn">
				  	<el-button type="primary" size='small'>挂单</el-button>
				  	<el-button type="danger" size='small' @click="delTotal">删除</el-button>
  					<el-button type="success" size='small' @click='checkout'>结账</el-button>
				  </div>
			  </el-tab-pane>
			  <el-tab-pane label="挂单">挂单</el-tab-pane>
			  <el-tab-pane label="外卖">外卖</el-tab-pane>
			</el-tabs>
    	</el-col>
    	<el-col :span='17'>
			<div class="new-product">
				<p>热销商品</p>
				<ul>
					<li v-for="product in newProduct" @click='addOrderList(product)'>
						<el-tag type='danger'>{{product.goodsName}} ￥{{product.price}}元</el-tag>
					</li>
				</ul>
			</div>
			<div class="list">
			  <el-tabs value='first'>
			    <el-tab-pane label="汉堡" name="first">
					<ul class='cookList'>
					    <li v-for="goods in type0Goods" @click='addOrderList(goods)'>
					        <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
					        <span class="foodName">{{goods.goodsName}}</span>
					        <span class="foodPrice">￥{{goods.price}}元</span>
					    </li>
					</ul>
			    </el-tab-pane>
			    <el-tab-pane label="小吃" name="second">
					<ul class='cookList'>
					    <li v-for="goods in type1Goods" @click='addOrderList(goods)'>
					        <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
					        <span class="foodName">{{goods.goodsName}}</span>
					        <span class="foodPrice">￥{{goods.price}}元</span>
					    </li>
					</ul>
			    </el-tab-pane>
			    <el-tab-pane label="饮料" name="third">
					<ul class='cookList'>
					    <li v-for="goods in type2Goods" @click='addOrderList(goods)'>
					        <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
					        <span class="foodName">{{goods.goodsName}}</span>
					        <span class="foodPrice">￥{{goods.price}}元</span>
					    </li>
					</ul>
			    </el-tab-pane>
			    <el-tab-pane label="套餐" name="fourth">
					<ul class='cookList'>
					    <li v-for="goods in type3Goods" @click='addOrderList(goods)'>
					        <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
					        <span class="foodName">{{goods.goodsName}}</span>
					        <span class="foodPrice">￥{{goods.price}}元</span>
					    </li>
					</ul>
			    </el-tab-pane>
			  </el-tabs>
			</div>
    	</el-col>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'pos',
  data () {
    return {
      tableData3:[],
      newProduct:[{
              goodsId:1,
              goodsName:'香辣鸡腿堡',
              price:18
          }, {
              goodsId:2,
              goodsName:'田园鸡腿堡',
              price:15
          }, {
              goodsId:3,
              goodsName:'和风汉堡',
              price:15
          }, {
              goodsId:4,
              goodsName:'快乐全家桶',
              price:80
          }, {
              goodsId:5,
              goodsName:'脆皮炸鸡腿',
              price:10
          }, {
              goodsId:6,
              goodsName:'魔法鸡块',
              price:20
          }, {
              goodsId:7,
              goodsName:'可乐大杯',
              price:10
          }, {
              goodsId:8,
              goodsName:'雪顶咖啡',
              price:18
          }, {
              goodsId:9,
              goodsName:'大块鸡米花',
              price:15
          }, {
              goodsId:20,
              goodsName:'香脆鸡柳',
              price:17
          }],
      type0Goods:[{
              goodsId:1,
              goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",
              goodsName:'香辣鸡腿堡',
              price:18
          }, {
              goodsId:2,
              goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
              goodsName:'田园鸡腿堡',
              price:15
          }, {
              goodsId:3,
              goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg",
              goodsName:'和风汉堡',
              price:15
          }, {
              goodsId:4,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
              goodsName:'快乐全家桶',
              price:80
          }, {
              goodsId:5,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
              goodsName:'脆皮炸鸡腿',
              price:10
          }, {
              goodsId:6,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg",
              goodsName:'魔法鸡块',
              price:20
          }, {
              goodsId:7,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",
              goodsName:'可乐大杯',
              price:10
          }, {
              goodsId:8,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
              goodsName:'雪顶咖啡',
              price:18
          }, {
              goodsId:9,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
              goodsName:'大块鸡米花',
              price:15
          }, {
              goodsId:20,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
              goodsName:'香脆鸡柳',
              price:17
          }],
      type1Goods:[],
      type2Goods:[],
      type3Goods:[],
      totalCount:0,
      totalMoney:0
    }
  },
  created(){
  	// axios.get('http://jspang.com/DemoApi/oftenGoods.php')
  	// .then(response=>{
  	// 	this.newProduct = response.data
  	// })
  	// .catch(error=>{
  	// 	alert('没有获取到数据!')
  	// })
  	//同时获取数据
  	axios.all([axios.get('http://jspang.com/DemoApi/oftenGoods.php'),axios.get('http://jspang.com/DemoApi/typeGoods.php')])
  	.then(axios.spread((oftenResp, typeResp)=> {
        // console.log(oftenResp.data);
        // console.log(typeResp.data);
        this.newProduct = oftenResp.data;
        this.type0Goods = typeResp.data[0];
        this.type1Goods = typeResp.data[1];
        this.type2Goods = typeResp.data[2];
        this.type3Goods = typeResp.data[3];
    }))
  	.catch(error=>{
  		alert('没有获取到数据!')
  	})
  },
  mounted(){
    var orderHeight = document.documentElement.clientHeight;
    document.getElementById('border-card').style.height = orderHeight + "px";
  },
  methods:{
  	addOrderList(product){
  		this.totalCount = 0;
  		this.totalMoney = 0;
  		let isHave = false;
  		for (let i = 0; i < this.tableData3.length; i++) {
  			if (this.tableData3[i].goodsId == product.goodsId) {
  				isHave = true;
  			}
  		}
  		if (isHave) {
  			let arr = this.tableData3.filter(o=>o.goodsId == product.goodsId);
  			arr[0].count++;
  		}else{
  			let newArr = {goodsId:product.goodsId,goodsName:product.goodsName,price:product.price,count:1};
  			this.tableData3.push(newArr)
  		} 
  		this.getTotal()
  	},
  	remove(product){
  		this.totalCount = 0;
  		this.totalMoney = 0;
  		this.tableData3 = this.tableData3.filter(o=>o.goodsId != product.goodsId);
  		this.getTotal()
  	},
  	getTotal(){
  		this.tableData3.forEach(element=>{
  			this.totalCount+=element.count;
  			this.totalMoney+=element.price*element.count
  		})
  	},
  	delTotal(){
  		this.tableData3 = [];
  		this.totalMoney = 0;
  		this.totalCount = 0;
  	},
  	checkout(){
  		if (this.totalCount != 0) {
  			this.totalCount = 0;
  			this.totalMoney = 0;
  			this.tableData3 = [];
  			this.$message({
	          message: '恭喜你，操作成功！',
	          type: 'success'
	        });
  		}else{
  			this.$message.error('不要急，你还没有点餐哦！');
  		}
  	}
  }
}
</script>

<style scoped>
.order-btn{
	margin-top: 10px;
	text-align: center
}
.new-product p{
	height: 20px;
	padding: 10px;
	border-bottom: 1px solid #ccc;
	box-shadow: 1px 1px 1px #fff
}
.new-product ul{
	border-bottom: 1px solid #ccc;
	box-shadow: 1px 1px 1px #fff;
	padding: 10px;
	overflow: hidden;
}
.new-product ul li{
	padding:10px;
	float: left;
	cursor: pointer;
}
.list{
	padding-left: 10px
}
.cookList li{
       list-style: none;
       width:23%;
       border:1px solid #E5E9F2;
       height: auot;
       overflow: hidden;
       background-color:#fff;
       padding: 2px;
       float:left;
       margin: 2px;
       cursor: pointer;
 
   }
.cookList li span{
   
    display: block;
    float:left;
}
.foodImg{
   width: 40%;
}
.foodName{
   font-size: 18px;
   padding-left: 10px;
   color:brown;

}
.foodPrice{
   font-size: 16px;
   padding-left: 10px;
   padding-top:10px;
}
.total{
	text-align: center
}
.total span{
	padding-right: 40px;
}
</style>
