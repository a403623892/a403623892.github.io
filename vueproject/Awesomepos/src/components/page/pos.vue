<template>
  <div class="pos">
    <el-row>
    	<el-col :span='7'>
			<el-tabs type="border-card" id="border-card">
			  <el-tab-pane label="用户管理">
				<el-table
				    :data="tableData3"
				    style="width: 100%"
				    height="420">
				    <el-table-column
				      prop="date"
				      label="商品名称"
				      width="100">
				    </el-table-column>
				    <el-table-column
				      prop="name"
				      label="数量"
				      width="60">
				    </el-table-column>
				    <el-table-column
				      prop="city"
				      label="金额"
				      width="60">
				    </el-table-column>
				    <el-table-column
				      fixed="right"
				      label="操作"
				      width="100">
				      <template scope="scope">
			            <el-button type="text" size="small">删除</el-button>
			            <el-button type="text" size="small">增加</el-button>
			    	  </template>
				    </el-table-column>
				  </el-table>
			  </el-tab-pane>
			  <el-tab-pane label="配置管理">配置管理</el-tab-pane>
			  <el-tab-pane label="角色管理">角色管理</el-tab-pane>
			</el-tabs>
    	</el-col>
    	<el-col :span='17'>2</el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'pos',
  data () {
    return {
      tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
    }
  },
  mounted(){
    var orderHeight = document.documentElement.clientHeight;
    document.getElementById('border-card').style.height = orderHeight + "px";
  }
}
</script>

<style scoped>

</style>
